type Role = "admin" | "superadmin";

export interface AuthPayload {
  id: number;
  name: string;
  role: Role;
}
