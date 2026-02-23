import { IRequests } from "@/types/requests.type"
import { apiFetch } from "./apiFetch"

type RequestResponse = {
  message: string
  success: boolean
  data?: IRequests[]
}

export async function getRequests(): Promise<RequestResponse> {
  const res = await apiFetch("/api/request")
  return res.json()
}

export async function deleteRequest(id: number): Promise<RequestResponse> {
  const res = await apiFetch(`/api/request/${id}`, { method: "DELETE" })
  return res.json()
}