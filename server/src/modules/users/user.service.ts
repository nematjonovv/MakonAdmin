import { prisma } from "../../lib/prisma";

class UserService {
  async getUsers() {
    return await prisma.admin.findMany({
      select: {
        id: true,
        role: true,
        name: true
      }
    })
  }

  async deleteUser(id: number) {
    const admin = await prisma.admin.findUnique({ where: { id } })
    if (!admin) {
      throw Error("Existing admin not found")
    }
    return await prisma.admin.delete({ where: { id } })

  }
}

export const userService = new UserService()