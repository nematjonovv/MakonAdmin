import { Request, Response } from "express";
import return500status from "../../scripts/return500status";
import { CreateTestimonialInput } from "./testimonial.validation";
import { testimonialService } from "./testimonial.service";

type TestimonialFile = {
  video: Express.Multer.File[];
  avatar: Express.Multer.File[];
};
class TestimonialController {
  async createTestimonial(
    req: Request<{}, {}, CreateTestimonialInput>,
    res: Response,
  ) {
    try {
      const { body } = req;
      const file = req.files as TestimonialFile;
      const videoFile = file?.video?.[0];
      const avatarFile = file?.avatar?.[0];
      if (!videoFile || !avatarFile) {
        throw new Error("Video and Avatar files are required");
      }
      const newTestimonial = await testimonialService.create(
        body,
        videoFile,
        avatarFile,
      );

      return res.status(201).json({
        success: true,
        message: "Testimonial created successfully",
        data: newTestimonial,
      });
    } catch (error: any) {
      return return500status({ message: error.message, res });
    }
  }

  async getAllTestimonials(req: Request, res: Response) {
    try {
      const testimonials = await testimonialService.getAll();
      return res.status(200).json({
        success: true,
        message: "Testimonials retrieved successfully",
        data: testimonials,
      });
    } catch (error: any) {
      return return500status({ message: error.message, res });
    }
  }
  async deleteTestimonial(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
        });
      }
      const deletedTestimonial = await testimonialService.delete(id);
      return res.status(200).json({
        success: true,
        message: "Testimonial deleted successfully",
        data: deletedTestimonial,
      });
    } catch (error: any) {
      return return500status({ message: error.message, res });
    }
  }
}

export const testimonialController = new TestimonialController();
