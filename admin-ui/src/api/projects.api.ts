import { ProjectDTO } from "@/types/projects.type";
import { apiFetch } from "./apiFetch";

export interface ProjectsResponse {
  data: ProjectDTO[];
  success: boolean;
  message?: string | undefined;
}

export interface ProjectDetailResponse {
  data: ProjectDTO;
  success: boolean;
  message?: string;
}

export interface ProjectDeleteResponse {
  success: boolean;
  message: string;
}
export async function getProjects(): Promise<ProjectsResponse> {
  const res = await apiFetch("/api/projects");
  return res.json();
}

export async function getBySlug(slug: string): Promise<ProjectDetailResponse> {
  const res = await apiFetch(`/api/projects/${slug}`);
  return res.json();
}

export async function deleteProject(
  id: number,
): Promise<ProjectDeleteResponse> {
  const res = await apiFetch(`/api/projects/${id}`, { method: "DELETE" });
  return res.json();
}

export async function createProject(
  formData: FormData,
): Promise<ProjectsResponse> {
  const res = await apiFetch("/api/projects", {
    method: "POST",
    rawBody: formData,
  });

  return res.json();
}
