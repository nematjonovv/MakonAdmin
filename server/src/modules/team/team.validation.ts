import * as z from "zod";

export const createTeamSchema = z.object({
  name: z.string().min(3, "Member name must be at least 3 characters long"),
  role: z.string().min(2, "Role must be at least 2 characters long"),
});

export type CreateTeamInput = z.infer<typeof createTeamSchema>;
