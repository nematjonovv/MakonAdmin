import * as z from "zod";

export const imageAltSchema = z.object({
  uz: z.string().min(1, "Image alt in Uzbek is required"),
  ru: z.string().min(1, "Image alt in Russian is required"),
});

export const coverImageAltSchema = z.object({
  alt: imageAltSchema,
});

export const galleryImageAltSchema = z.object({
  alt: imageAltSchema,
});


