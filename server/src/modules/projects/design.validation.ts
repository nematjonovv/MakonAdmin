import * as z from "zod";

export const projectDesignSchema = z
  .object({
    style: z.array(z.string().trim().min(1)).default([]),
    palette: z
      .array(
        z
          .string()
          .trim()
          .regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/),
      )
      .default([]),
    materials: z.array(z.string().trim().min(1)).default([]),
    keyFeatures: z.array(z.string().trim().min(1)).default([]),
  })
  .default({
    style: [],
    palette: [],
    materials: [],
    keyFeatures: [],
  });

export type ProjectDesign = z.infer<typeof projectDesignSchema>;
