import { prisma } from "../../lib/prisma";
import {
  deleteImageFromCloud,
  deleteVideoFromCloud,
} from "../../scripts/deleteImageFromCloud";
import { uploadToCloudinary } from "../../scripts/upload";
import { VideoUploader } from "../../scripts/VideoUploader";
import { CreateTestimonialInput } from "./testimonial.validation";

class TestimonialService {
  async create(
    body: CreateTestimonialInput,
    video: Express.Multer.File,
    avatar: Express.Multer.File,
  ) {
    const { name, localizedContent, alt } = body;
    const videoBuffer = video.buffer;
    const avatarBuffer = avatar.buffer;

    const videoUrl = await VideoUploader(videoBuffer);
    const avatarUrl = await uploadToCloudinary(avatarBuffer);

    const newTestimonial = prisma.testimonials.create({
      data: {
        name,
        localizedContent,
        altImage: alt,
        videoUrl: videoUrl.secure_url,
        photoUrl: avatarUrl.secure_url,
        photoPublicId: avatarUrl.public_id,
        videoPublicId: videoUrl.public_id,
      },
    });
    return newTestimonial;
  }

  async getAll() {
    const testimonials = prisma.testimonials.findMany();
    return testimonials;
  }

  async delete(id: number) {
    const testimonial = await prisma.testimonials.findUnique({
      where: { id },
    });

    await Promise.all([
      deleteImageFromCloud(testimonial?.photoPublicId!),
      deleteVideoFromCloud(testimonial?.videoPublicId!),
    ]);
    await prisma.testimonials.delete({
      where: { id },
    });

    return testimonial;
  }
}

export const testimonialService = new TestimonialService();
