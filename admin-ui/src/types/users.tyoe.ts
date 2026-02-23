type Role = "admin" | "editor"

export interface IUser {
  id: number
  role: Role
  name: string
}

    export interface IRegister {
      name: string
      password: string
      role: "editor" | "admin"
    }