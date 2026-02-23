// src/modules/categorys/category.schema.ts
import * as z from "zod";

export const createCategorySchema = z.object({
  title: z
    .string("title is required")
    .trim()
    .min(2, "title must be at least 2 characters")
    .max(50, "title must be at most 50 characters"),
});

export type CreateCategoryInput = z.infer<typeof createCategorySchema>;
