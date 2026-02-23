import { Request, Response } from "express";
import { ProjectSchemaType } from "./project.validation";
import return500status from "../../scripts/return500status";
import { projectService } from "./project.service";

type ProjectFiles = {
  coverLight?: Express.Multer.File[];
  coverDark?: Express.Multer.File[];
  gallery?: Express.Multer.File[];
};

class ProjectController {
  async createProject(req: Request<{}, {}, ProjectSchemaType>, res: Response) {
    try {
      const files = req.files as ProjectFiles;
      const coverLight = files?.coverLight?.[0];
      const coverDark = files?.coverDark?.[0];
      const galleryImages = files?.gallery || [];

      if (!coverLight || !coverDark) {
        return res.status(400).json({ message: "Cover images are required" });
      }

      const project = await projectService.createProject({
        body: req.body,
        coverLight,
        coverDark,
        galleryImages,
      });

      if (!project) {
        return return500status({ message: "Failed to create project", res });
      }

      return res.status(201).json({
        success: true,
        message: "Project created successfully",
        data: project,
      });
    } catch (error: any) {
      return500status({ message: error.message, res });
    }
  }

  async getAllProjects(req: Request, res: Response) {
    try {
      const projects = await projectService.getAll();
      if (!projects) {
        return return500status({ message: "Failed to fetch projects", res });
      }
      return res.status(200).json({
        success: true,
        data: projects,
      });
    } catch (error: any) {
      return return500status({ message: error.message, res });
    }
  }
  async getProjectBySlug(req: Request, res: Response) {
    try {
      const slug = String(req.params.slug);
      if (!slug) {
        return res.status(400).json({ message: "Slug is required" });
      }
      const project = await projectService.getBySlug(slug);
      if (!project) {
        return res
          .status(404)
          .json({ success: false, message: "Project not found" });
      }
      return res.status(200).json({
        success: true,
        data: project,
      });
    } catch (error: any) {
      return return500status({ message: error.message, res });
    }
  }
  async deleteProject(req: Request, res: Response) {
    try {
      const projectId = Number(req.params.id);
      if (isNaN(projectId)) {
        return res.status(400).json({ message: "Invalid project ID" });
      }
      const deletedProject = await projectService.delete(projectId);
      if (!deletedProject) {
        return return500status({ message: "Failed to delete project", res });
      }
      return res.status(200).json({
        success: true,
        message: "Project deleted successfully",
        data: deletedProject,
      });
    } catch (error: any) {
      return return500status({ message: error.message, res });
    }
  }
}

export const projectController = new ProjectController();
