import * as z from "zod";
import { projectLocalizedContentSchema } from "./localizedContent.validation";
import { projectFactsSchema } from "./facts.validation";
import { projectDesignSchema } from "./design.validation";
import {
  coverImageAltSchema,
  galleryImageAltSchema,
  imageAltSchema,
} from "./imageAtl.validation";

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  // slug: z.string().min(1, "Slug is required"),
  categoryId: z.coerce.number().int("Category ID must be an integer"),
  status: z.enum(
    ["completed", "in_progress"],
    "Status must be either 'completed' or 'in_progress'",
  ),

  localizedContent: projectLocalizedContentSchema,
  facts: projectFactsSchema,
  design: projectDesignSchema.optional(),
  coverAlt: coverImageAltSchema,
  galleryAlt: z.array(galleryImageAltSchema).optional(),
});

export type ProjectSchemaType = z.infer<typeof projectSchema>;
