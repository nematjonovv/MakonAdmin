import { Request, Response } from "express";
import return500status from "../../scripts/return500status";
import { categoryService } from "./category.service";
import { CreateCategoryInput } from "./category.validation";

class CategoryController {
  async postC(req: Request, res: Response) {
    try {
      const { title } = req.body as CreateCategoryInput;
      if (!title) {
        return res.status(400).json({
          success: false,
          message: "Category title is required.",
        });
      }
      const category = await categoryService.postS(title);
      if (!category) {
        return res.status(400).json({ message: "Failed to create category." });
      }
      res
        .status(201)
        .json({ message: `Category "${title}" created successfully.` });
    } catch (error: any) {
      return500status({ message: error.message, res });
    }
  }
  async getAllC(req: Request, res: Response) {
    try {
      const categories = await categoryService.getAllS();
      res.status(200).json({ success: true, data: categories });
    } catch (error: any) {
      return500status({ message: error.message, res });
    }
  }
  async getByIdC(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const category = await categoryService.getByIdS(id);
      if (!category) {
        return res.status(404).json({ message: "Category not found." });
      }
      res.status(200).json({
        success: true,
        data: category,
        message: " Category retrieved successfully.",
      });
    } catch (error: any) {
      return500status({ message: error.message, res });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID." });
      }
      const category = await categoryService.deleteS(id);
      if (!category) {
        return res.status(404).json({ message: "Category not found." });
      }
      res
        .status(200)
        .json({ success: true, message: "Category deleted successfully." });
    } catch (error: any) {
      return500status({ message: error.message, res });
    }
  }
  async updateC(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID." });
      }
      const { title } = req.body as CreateCategoryInput;
      if (!title) {
        return res.status(400).json({
          success: false,
          message: "Category title is required.",
        });
      }
      const category = await categoryService.updateS(id, title);
      if (!category) {
        return res.status(404).json({ message: "Category not found." });
      }
      res.status(200).json({
        success: true,
        data: category,
        message: `Category "${title}" updated successfully.`,
      });
    } catch (error: any) {
      return500status({ message: error.message, res });
    }
  }
}

export const categoryController = new CategoryController();
