import * as z from "zod";
import { hearFrom } from "../../generated/prisma";

export const requestsSchema = z.object({
  name: z.string().min(1, "Ismingizni kiriting"),
  number: z.string().min(1, "Bog'lanish uchun telefon raqam kerak"),
  about: z.string().min(1, "Loyihangiz haqida qisqacha aytib bering"),
  heardFrom: z.enum(hearFrom),
});

export const updateContactSchema = z.object({
  phone: z.string().min(3).max(50).optional(),
  phone2: z.string().min(3).max(50).optional(),

  email: z.string("Invalid email").optional(),

  addressUz: z.string().max(500).optional(),
  addressRu: z.string().max(500).optional(),

  instagram: z.string("Invalid instagram url").optional(),
  telegram: z.string("Invalid telegram url").optional(),
  youtube: z.string("Invalid youtube url").optional(),
  facebook: z.string("Invalid facebook url").optional(),
  website: z.string("Invalid website url").optional(),

  mapUrl: z.string("Invalid map url").optional(),
});

export type UpdateContactType = z.infer<typeof updateContactSchema>;

export type RequestType = z.infer<typeof requestsSchema>;
