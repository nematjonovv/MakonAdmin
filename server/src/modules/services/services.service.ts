import cloudinary from "../../config/cloudinary.config";
import { prisma } from "../../lib/prisma";
import { uploadToCloudinary } from "../../scripts/upload";
import { CreateServiceBody } from "./services.validation";

class ServicerService {
  async postS(data: CreateServiceBody, file: Express.Multer.File) {
    try {
      const localeData = data.localeData;
      const buffer = file.buffer;
      const upload = await uploadToCloudinary(buffer);

      const newService = await prisma.services.create({
        data: {
          icon: upload.secure_url,
          iconPublicId: upload.public_id,
          localeData,
        },
      });

      return newService;
    } catch (error) {
      return null;
    }
  }
  async getAllS() {
    try {
      const services = await prisma.services.findMany();
      return services;
    } catch (error) {
      return null;
    }
  }
  async deleteS(id: number) {
    try {
      const service = await prisma.services.findUnique({
        where: { id },
      });

      if (!service) {
        return null;
      }

      await cloudinary.uploader.destroy(service.iconPublicId);
      const deletedService = await prisma.services.delete({
        where: { id },
      });

      return deletedService;
    } catch (error: any) {
      throw error.message;
    }
  }
  async putS(id: number, body: CreateServiceBody, file?: Express.Multer.File) {
    try {
      const existingService = await prisma.services.findUnique({
        where: { id },
      });
      if (!existingService) return null;

      const dataToUpdate: any = {
        localeData: body.localeData,
      };

      if (file) {
        const upload = await uploadToCloudinary(file.buffer);
        dataToUpdate.icon = upload.secure_url;
        dataToUpdate.iconPublicId = upload.public_id;

        await cloudinary.uploader.destroy(existingService.iconPublicId);
      }

      const updatedService = await prisma.services.update({
        where: { id },
        data: dataToUpdate,
      });

      return updatedService;
    } catch (error: any) {
      throw error.message;
    }
  }
}

export const servicesService = new ServicerService();
