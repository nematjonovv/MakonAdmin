export interface TeamMember {
  id: number;
  name: string;
  role: string;
  photo: string;
}
export interface TeamMemberCreate {
  name: string;
  role: string;
  photo: File;
}
export interface TeamMembersResponse {
  success: boolean;
  message: string;
  data: TeamMember[];
}