import { prisma } from "../../lib/prisma";
import { RequestType, UpdateContactType } from "./contact.validation";

class ContactService {
  async sendRequest(body: RequestType) {
    const { about, heardFrom, name, number } = body;

    const newService = prisma.requests.create({
      data: {
        name,
        heardFrom,
        number,
        about,
      },
    });

    return newService;
  }

  async allRequests() {
    return await prisma.requests.findMany();
  }
  async deleteRequest(id: number) {
    if (!id) return null;
    return await prisma.requests.delete({ where: { id } });
  }

  async upsertContactInfo(body: UpdateContactType) {
    const contact = prisma.contactInfo.upsert({
      where: { id: 1 },
      update: body,
      create: { id: 1, ...body },
    });

    return contact;
  }

  async getContact() {
    const contact = await prisma.contactInfo.findUnique({
      where: { id: 1 },
    });

    return contact;
  }
}

export const contactService = new ContactService();
