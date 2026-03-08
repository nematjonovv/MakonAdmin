import { features } from "node:process";
import * as z from "zod";

export const localeSchema = z.enum(["uz", "ru"]);
export type Locale = z.infer<typeof localeSchema>;

export const serviceLocaleBlockSchema = z.object({
  title: z.string().min(1, "Title is required"),
  desc: z.string().min(1, "Desc is required"),
  features: z.array(z.string().min(1, "Feature cannot be empty")).min(1, "At least one feature is required"),
  duration: z.string().min(3, "Duration is required"),
  steps: z.array(z.string().min(1, "Step cannot be empty")).min(1, "At least one step is required"),
});

export const localeDataSchema = z.object({
  uz: serviceLocaleBlockSchema,
  ru: serviceLocaleBlockSchema,
});
export type LocaleData = z.infer<typeof localeDataSchema>;

export const createServiceSchema = z.object({
  localeData: localeDataSchema,
});
export type CreateServiceBody = z.infer<typeof createServiceSchema>;
