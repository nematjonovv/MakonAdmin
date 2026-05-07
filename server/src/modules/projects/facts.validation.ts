import * as z from "zod";

export const factLocationSchema = z.object({
  country: z
    .string({ error: "Country must be a string" })
    .trim()
    .min(1, "Country is required")
    .max(100, "Country must be at most 100 characters long"),
  city: z
    .string({ error: "City must be a string" })
    .trim()
    .min(1, "City is required")
    .max(100, "City must be at most 100 characters long"),
});

export const projectFactsSchema = z.object({
  year: z.coerce
    .number({ error: "Year must be a number" })
    .int()
    .min(1900, { error: "Year must be at least 1900" })
    .max(new Date().getFullYear(), { error: "Year cannot be in the future" }),
  areaM2: z.coerce
    .number({ error: "Area must be a number" })
    .min(1, { error: "Area must be greater than 0" })
    .max(100000, { error: "Area is unrealistically large" }),
  location: factLocationSchema,
  budgetDesign: z.coerce
    .number({ error: "Budget must be a number" })
    .min(0, { error: "Budget must be non-negative" })
    .optional(),
  budgetBuild: z.coerce
    .number({ error: "Budget must be a number" })
    .min(0, { error: "Budget must be non-negative" })
    .optional(),
});

export type ProjectFacts = z.infer<typeof projectFactsSchema>;
