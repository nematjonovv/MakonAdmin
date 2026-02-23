import * as z from "zod";

export const localeSchema = z.enum(["uz", "ru"]);
export type Locale = z.infer<typeof localeSchema>;

export const serviceLocaleBlockSchema = z.object({
  title: z.string().min(1, "Title is required"),
  desc: z.string().min(1, "Desc is required"),
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
