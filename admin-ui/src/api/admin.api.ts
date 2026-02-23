import { IRegister, IUser } from "@/types/users.tyoe";
import { apiFetch } from "./apiFetch";
type UsersResponse = {
  success: boolean
  message: string
  data: IUser[]
}
type registerResponse = {
  success: boolean
  message: string
  data: IUser[]
}
export async function getUsers(): Promise<UsersResponse> {
  const res = await apiFetch("/api/users")
  return res.json()
}

export async function deleteUser(id: number): Promise<UsersResponse> {
  const res = await apiFetch(`/api/users/${id}`, { method: "DELETE" })
  return res.json()
}


export async function register(data: IRegister): Promise<registerResponse> {
  const res = await apiFetch("/auth/register",
    {
      method: "POST",
      body: data
    }
  )

  return res.json()
}