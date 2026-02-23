import { Request, Response } from "express";
import return500status from "../../scripts/return500status";
import { RequestType, UpdateContactType } from "./contact.validation";
import { contactService } from "./contact.service";

class ContactController {
  async sendRequest(req: Request<{}, {}, RequestType>, res: Response) {
    try {
      const body = req.body;

      const newRequest = await contactService.sendRequest(body);
      if (newRequest === undefined || newRequest === null) {
        return res.status(400).json({
          success: false,
          message: "Failed to create request",
        });
      }
      return res.status(200).json({
        success: true,
        message: "So'rovingiz yuborildi",
        data: newRequest,
      });
    } catch (error: any) {
      return return500status({ message: error.message, res });
    }
  }
  async getRequest(req: Request, res: Response) {
    try {
      const allRequests = await contactService.allRequests();

      return res.status(200).json({
        success: true,
        message: "Barcha so'rovlar",
        data: allRequests,
      });
    } catch (error: any) {
      return return500status({ message: error.message, res });
    }
  }

  async deleteRequest(
    req: Request<{ id: string }, {}, UpdateContactType>,
    res: Response,
  ) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid ID",
        });
      }
      const deleted = await contactService.deleteRequest(id);
      if (!deleted) {
        return res.status(400).json({
          success: false,
          message: "Failed to delete request",
        });
      }
      return res
        .status(200)
        .json({ success: true, message: "So'rov o'chirildi" });
    } catch (error: any) {
      return500status({ message: error.message, res });
    }
  }

  async upsertContactInfo(req: Request, res: Response) {
    try {
      const body = req.body;
      const info = await contactService.upsertContactInfo(body);
      return res.status(200).json({ success: true, data: info });
    } catch (error: any) {
      return return500status({ message: error.message, res });
    }
  }

  async getContactInfo(req: Request, res: Response) {
    const data = await contactService.getContact();
    return res.json({ success: true, data });
  }
}

export const contactController = new ContactController();
