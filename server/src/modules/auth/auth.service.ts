import { prisma } from "../../lib/prisma";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
class AuthService {
  async login(name: string, password: string) {
    // Implementation for user authentication
    const admin = await prisma.admin.findUnique({
      where: { name },
    });

    if (!admin) {
      throw new Error("User not found");
    }

    // password verification logic here
    const isValidPassword = await bcrypt.compare(password, admin.password);
    if (!isValidPassword) {
      throw new Error("Invalid password");
    }

    // token generation logic here (e.g., JWT)
    const token = jwt.sign(
      {
        id: admin.id,
        role: admin.role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" },
    );
    return {
      token,
      admin: { id: admin.id, name: admin.name, role: admin.role },
    };
  }

  async register(name: string, password: string, role: "admin" | "editor") {
    const existingAdmin = await prisma.admin.findUnique({
      where: { name },
    });

    if (existingAdmin) {
      throw new Error("Admin already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = await prisma.admin.create({
      data: {
        name,
        password: hashedPassword,
        role
      },
    });

    return newAdmin;
  }

  async me(id: number) {
    const admin = await prisma.admin.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        role: true,
      },
    });
    return admin;
  }
}

export const authService = new AuthService();
