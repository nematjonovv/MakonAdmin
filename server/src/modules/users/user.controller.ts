import { Request, Response } from "express";
import { userService } from "./user.service";
import return500status from "../../scripts/return500status";

class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await userService.getUsers()
      return res.status(200).json({ success: true, message: "Users retrives successfully", data: users })
    } catch (error: any) {
      return return500status({ message: error.message, res })
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      if (!req.params.id || isNaN(id) || id <= 0) {
        return res.status(400).json({ success: false, message: "ID noto'g'ri yoki mavjud emas" });
      }

      const deleted = await userService.deleteUser(id);

      return res.status(200).json({ success: true, message: "Admin muvaffaqiyatli o'chirildi" });
    } catch (error: any) {
      return return500status({ message: error.message, res });
    }
  }
}

export const userController = new UserController()