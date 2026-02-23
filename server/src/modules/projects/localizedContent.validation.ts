import * as z from "zod";

export const projectLocalizedSeoSchema = z.object({
  metaTitle: z
    .string({ error: "Meta title must be a string" })
    .trim()
    .max(70)
    .optional(),
  metaDescription: z
    .string({ error: "Meta description must be a string" })
    .trim()
    .max(170)
    .optional(),
});
export const projectContentSchema = z.object({
  excerpt: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? "Excerpt is required"
          : "Excerpt must be a string",
    })
    .trim()
    .min(1, "Excerpt must be at least 25 characters long")
    .max(1000, "Excerpt must be at most 1000 characters long"),
  challenge: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? "Challenge is required"
          : "Challenge must be a string",
    })
    .trim()
    .min(1, "Challenge must be at least 10 characters long")
    .max(1000, "Challenge must be at most 1000 characters long"),

  solution: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? "Solution is required"
          : "Solution must be a string",
    })
    .trim()
    .min(1, "Solution must be at least 10 characters long")
    .max(1000, "Solution must be at most 1000 characters long"),
  results: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? "Results is required"
          : "Results must be a string",
    })
    .trim()
    .min(1, "Results must be at least 10 characters long")
    .max(1000, "Results must be at most 1000 characters long"),
  seo: projectLocalizedSeoSchema.optional(),
});

export const projectLocalizedContentSchema = z.object({
  uz: projectContentSchema,
  ru: projectContentSchema,
});

export type LocalizedData = z.infer<typeof projectLocalizedContentSchema>;
