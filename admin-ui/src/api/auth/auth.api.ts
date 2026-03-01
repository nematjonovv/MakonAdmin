import { redirect } from "next/navigation";
import { apiFetch } from "../apiFetch";
import { IRegister } from "@/types/users.tyoe";
import { useRouter } from "next/router";

export type AdminDto = { id: number; name: string; role: string };

export async function login(name: string, password: string): Promise<{ token: string, success: boolean }> {
  const res = await apiFetch("/auth/login", {
    method: "POST",
    body: { name, password },
  });
  const data = await res.json()
  return data as { token: string, success: boolean }
}

export async function me() {
  return await apiFetch("/auth/me", { method: "GET" });
}

export async function logout() {
  localStorage.removeItem("access_token")
}