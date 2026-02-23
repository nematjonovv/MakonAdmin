import * as z from "zod";

export const testimonialContent = z.object({
  position: z.string().min(1, "Position is required"),
  content: z.string().min(1, "Content is required"),
});

export const localizedContent = z.object({
  uz: testimonialContent,
  ru: testimonialContent,
});

export const testimonialAltImage = z.object({
  uz: z.string().min(1, "Alt image for Uzbek is required"),
  ru: z.string().min(1, "Alt image for Russian is required"),
});

export const testimonialAltVideo = z.object({
  uz: z.string().min(1, "Alt video for Uzbek is required"),
  ru: z.string().min(1, "Alt video for Russian is required"),
});

export const testimonialAlt = z.object({
  image: testimonialAltImage,
  video: testimonialAltVideo,
});

export const createTestimonialSchema = z.object({
  name: z.string().min(1, "Name is required"),
  localizedContent: localizedContent,
  alt: testimonialAlt,
});
export type CreateTestimonialInput = z.infer<typeof createTestimonialSchema>;
