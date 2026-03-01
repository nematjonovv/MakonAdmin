import { Request, Response } from "express";
import { authService } from "./auth.service";
import return500status from "../../scripts/return500status";
import { AuthPayload } from "../../types/authpayload.type";
import { SetAuthCookie } from "../../scripts/setAuthCookies";

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { name, password } = req.body as { name: string; password: string };
      if (!name || !password) {
        return res
          .status(400)
          .json({ message: "Name and password are required" });
      }
      const admin = await authService.login(name, password);
      console.log('JWT_SECRET:', process.env.JWT_SECRET)

      return res.status(200).json({ token: admin.token, success: true });
    } catch (error: any) {

      if (error.message === "Invalid password") return res.json({ success: false, message: "Nom yoki parol notogri" })

      return res
        .status(500)
        .json({ message: "Internal server error", errorMesage: error.message });
    }
  }

  async register(req: Request, res: Response) {
    try {
      const { name, password, role } = req.body

      if (!name || !password || !role) {
        return res
          .status(400)
          .json({ message: "Name, password and role are required" });
      }

      const allowedRoles = ["admin", "editor"]
      if (!allowedRoles.includes(role)) {
        return res.status(400).json({ message: "Role must be admin or editor" })
      }
      const admin = await authService.register(name, password, role);

      if (!admin) {
        return res.status(400).json({ message: "Registration failed" });
      }

      return res.status(201).json({ success: true, message: "Yangi admin muvaffaqiyatli yaratildi" });
    } catch (error: any) {
      return return500status({ message: error.message, res });
    }
  }

  async me(req: Request, res: Response) {
    try {
      const decoded = req.admin as AuthPayload;
      const admin = await authService.me(Number(decoded.id));

      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }
      return res
        .status(200)
        .json({ success: true, admin, message: "Successfully logged in" });
    } catch (error: any) {
      return return500status({ message: error.message, res });
    }
  }
}

export const authController = new AuthController();
