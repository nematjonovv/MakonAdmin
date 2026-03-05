import { prisma } from "../../lib/prisma";
import { deleteImageFromCloud } from "../../scripts/deleteImageFromCloud";
import { uploadToCloudinary } from "../../scripts/upload";
import { CreateTeamInput } from "./team.validation";

class TeamService {
  async create(body: CreateTeamInput, file: Express.Multer.File) {
    const { name, role } = body;
    const photoBuffer = file.buffer;

    const photoUploadResult = await uploadToCloudinary(photoBuffer);

    const newMember = await prisma.team.create({
      data: {
        name,
        role,
        photo: photoUploadResult.transformed_url,
        photoPublicId: photoUploadResult.public_id,
      },
    });

    return newMember;
  }
  async getAll() {
    const members = await prisma.team.findMany();
    return members;
  }
  async delete(id: number) {
    if (!id) return null;
    const member = await prisma.team.findUnique({ where: { id } });
    if (!member) {
      throw new Error("Team member not found");
    }
    await prisma.team.delete({ where: { id } });
    await deleteImageFromCloud(member.photoPublicId);

    return true;
  }
}

export const teamService = new TeamService();
