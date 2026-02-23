import { redirect } from "next/navigation";
import { apiFetch } from "../apiFetch";
import { IRegister } from "@/types/users.tyoe";

export type AdminDto = { id: number; name: string; role: string };

export async function login(name: string, password: string) {
  const res = await apiFetch("/auth/login", {
    method: "POST",
    body: { name, password },
  });

  return res
}

export async function me() {
  return await apiFetch("/auth/me", { method: "GET" });
}

export async function logout() {
  await apiFetch("/auth/logout", { method: "POST" });
  redirect("/login");
}