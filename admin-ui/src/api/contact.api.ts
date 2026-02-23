import { ContactData } from "@/types/contact.type";
import { apiFetch } from "./apiFetch";

interface ContactResponse {
  success: boolean;
  data: ContactData;
  message?: string;
}
interface PutContactResponse {
  success: boolean;
  data?: ContactData;
  message?: string;
}

export async function getContact(): Promise<ContactResponse> {
  const res = await apiFetch("/api/contactinfo");
  return res.json();
}
export async function updateContact(
  data: Omit<ContactData, "id" | "createdAt" | "updatedAt">,
): Promise<PutContactResponse> {
  const res = await apiFetch("/api/contactinfo", {
    method: "PUT",
    body: data,
  });

  return res.json();
}
