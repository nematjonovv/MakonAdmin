import { TeamMemberCreate, TeamMembersResponse } from "@/types/team.type";
import { apiFetch } from "./apiFetch";

export async function getTeam(): Promise<TeamMembersResponse> {
  const res = await apiFetch("/api/team");
  return res.json();
}

export async function createMember(
  member: FormData,
): Promise<TeamMembersResponse> {
  const res = await apiFetch("/api/team", { method: "POST", rawBody: member });
  return res.json();
}

export async function deleteTeam(id: number): Promise<TeamMembersResponse> {
  const res = await apiFetch(`/api/team/${id}`, { method: "DELETE" });
  return res.json();
}
