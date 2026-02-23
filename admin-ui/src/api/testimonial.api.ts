import { TestimonialDto } from "@/types/testimonial.type";
import { apiFetch } from "./apiFetch";

type TestimonialResponse = {
  success: boolean;
  message: string;
  data: TestimonialDto[];
};
type DeleteTeamMemberResponse = {
  success: boolean;
  message: string;
};
export async function getTestimonials(): Promise<TestimonialResponse> {
  const res = await apiFetch("/api/testimonials");
  return res.json();
}

export async function deleteTestimonial(
  id: number,
): Promise<DeleteTeamMemberResponse> {
  const res = await apiFetch(`/api/testimonials/${id}`, { method: "DELETE" });
  return res.json();
}

export async function createTestimonial(
  data: FormData,
): Promise<TestimonialResponse> {
  const res = await apiFetch("/api/testimonials", {
    method: "POST",
    rawBody: data,
  });

  return res.json();
}
