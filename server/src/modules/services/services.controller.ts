import { Request, Response } from "express";
import { CreateServiceBody, createServiceSchema } from "./services.validation";
import return500status from "../../scripts/return500status";
import { servicesService } from "./services.service";

class ServiceController {
  async postC(req: Request<{}, {}, CreateServiceBody>, res: Response) {
    try {
      console.log(req.body);
      console.log(req.file);

      const body = createServiceSchema.parse(req.body);
      const file = req.file;

      if (!file) {
        return res.status(400).json({ message: "File is required" });
      }

      const service = await servicesService.postS(body, file);

      if (!service) {
        return return500status({ message: "Failed to create service", res });
      }
      return res.status(201).json({
        success: true,
        message: "Service created successfully",
        data: service,
      });
    } catch (error: any) {
      return return500status({ message: error.message, res });
    }
  }
  async getAllC(req: Request, res: Response) {
    try {
      const services = await servicesService.getAllS();
      return res.status(200).json({
        success: true,
        message: "Services retrieved successfully",
        data: services,
      });
    } catch (error: any) {
      return return500status({ message: error.message, res });
    }
  }
  async deleteC(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedService = await servicesService.deleteS(Number(id));

      if (!deletedService) {
        return res
          .status(404)
          .json({ success: false, message: "Service not found" });
      }

      return res.status(200).json({
        success: true,
        message: "Service deleted successfully",
        data: deletedService,
      });
    } catch (error: any) {
      return return500status({ message: error.message, res });
    }
  }
  async putC(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const file = req.file;
      const body = req.body;
      if (!Number.isFinite(id)) {
        return res.status(400).json({ success: false, message: "Invalid ID" });
      }

      const updatedService = await servicesService.putS(id, body, file);

      if (!updatedService) {
        return res
          .status(404)
          .json({ success: false, message: "Service not found" });
      }
      return res.status(200).json({
        success: true,
        message: "Service updated successfully",
        data: updatedService,
      });
    } catch (error: any) {
      return return500status({ message: error.message, res });
    }
  }
}

export const serviceController = new ServiceController();
