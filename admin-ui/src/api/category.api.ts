import { apiFetch } from "./apiFetch";

interface ICategoryResponse {
  success: boolean;
  data: CategoryDTO[];
  message?: string;
}
export interface CategoryDTO {
  id: number;
  title: string;
}
export async function getCategorys(): Promise<ICategoryResponse> {
  const res = await apiFetch("/api/categories");
  return res.json();
}
