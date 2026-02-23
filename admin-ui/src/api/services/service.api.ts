import { apiFetch } from "../apiFetch";

export async function createService(data: FormData) {
  const res = await apiFetch("/api/services", {
    method: "POST",
    rawBody: data,
  });

  if (!res.ok) {
    const text = await res.text();
    throw { status: res.status, message: text };
  }

  return res.json();
}

export async function getServices() {
  const res = await apiFetch("/api/services");
  return res.json();
}

export async function deleteService(id: number) {
  const res = await apiFetch(`/api/services/${id}`, { method: "DELETE" });

  return res.json();
}

