import cloudinary from "../../config/cloudinary.config";
import { prisma } from "../../lib/prisma";
import { deleteImageFromCloud } from "../../scripts/deleteImageFromCloud";
import { generateUniqueSlug } from "../../scripts/UniqueSlug";
import { uploadToCloudinary } from "../../scripts/upload";
import { ProjectSchemaType } from "./project.validation";

function assertImage(file: Express.Multer.File) {
  const ok = ["image/jpeg", "image/png"];
  if (!ok.includes(file.mimetype)) {
    throw new Error("Invalid image type");
  }
}
export type ProjectImage = {
  id: number;
  projectId: number;
  image: string;
  imagePublicId?: string | null;
  image_alt: unknown;
};
class ProjectService {
  async createProject(args: {
    body: ProjectSchemaType;
    coverLight?: Express.Multer.File;
    coverDark?: Express.Multer.File;
    galleryImages?: Express.Multer.File[];
  }) {
    const { body, coverLight, coverDark, galleryImages } = args;
    const {
      title,
      categoryId,
      localizedContent,
      facts,
      design,
      coverAlt,
      galleryAlt,
      status,
    } = body;
    assertImage(coverLight!);
    assertImage(coverDark!);
    galleryImages?.forEach((img) => assertImage(img));

    if (!coverLight?.buffer || !coverDark?.buffer) {
      throw new Error("Cover images are required");
    }
    const [lightUpload, darkUpload] = await Promise.all([
      uploadToCloudinary(coverLight?.buffer),
      uploadToCloudinary(coverDark?.buffer),
    ]);

    const galleryUploads = await Promise.all(
      galleryImages?.map((img) => uploadToCloudinary(img.buffer)) || [],
    );

    const slug = (await generateUniqueSlug(title)) as unknown as string;
    const newProject = await prisma.projects.create({
      data: {
        title,
        slug,
        categoryId,
        status,
        // JSON fields
        localizedContent,
        facts,
        design: design ?? {},
        // Cover Image
        coverImage: {
          create: {
            image_light: lightUpload.secure_url,
            image_dark: darkUpload.secure_url,
            imageLightPublicId: lightUpload.public_id,
            imageDarkPublicId: darkUpload.public_id,
            image_alt: coverAlt.alt,
          },
        },
        // Gallery Images
        gallery: {
          create: galleryUploads.map((img, idx) => ({
            image: img.secure_url,
            imagePublicId: img.public_id,
            image_alt: galleryAlt?.[idx]?.alt || "",
          })),
        },
      },
      include: {
        coverImage: true,
        gallery: true,
      },
    });

    return newProject;
  }
  async getAll() {
    const projects = await prisma.projects.findMany({
      include: {
        coverImage: {
          select: {
            image_light: true,
            image_dark: true,
            image_alt: true,
          },
        },
        // gallery: true,
        category: true,
      },
    });
    return projects;
  }
  async getBySlug(slug: string) {
    if (!slug) return null;
    const project = await prisma.projects.findUnique({
      where: { slug },
      include: {
        coverImage: true,
        gallery: true,
        category: true,
      },
    });
    return project;
  }
  async delete(id: number) {
    try {
      if (!id) return null;
      const project = await prisma.projects.findUnique({
        where: { id },
        include: {
          coverImage: true,
          gallery: true,
        },
      });

      await Promise.all([
        deleteImageFromCloud(project?.coverImage?.imageLightPublicId!),
        deleteImageFromCloud(project?.coverImage?.imageDarkPublicId!),
      ]);

      await Promise.all(
        project?.gallery.map((img) =>
          deleteImageFromCloud(img?.imagePublicId!),
        ) || [],
      );
      await prisma.projects.delete({
        where: { id },
      });

      return true;
    } catch (error) {
      console.error("Error deleting project:", error);
      return false;
    }
  }
}

export const projectService = new ProjectService();
