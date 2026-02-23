import { prisma } from "../../lib/prisma";

class CategoryService {
  async postS(title: string) {
    const category = await prisma.projectCategory.create({
      data: { title },
    });
    return category;
  }
  async getAllS() {
    const categories = await prisma.projectCategory.findMany();
    return categories;
  }
  async getByIdS(id: number) {
    const category = await prisma.projectCategory.findUnique({
      where: { id },
    });
    return category;
  }
  async deleteS(id: number) {
    const category = await prisma.projectCategory.delete({
      where: { id },
    });
    return category;
  }
  async updateS(id: number, title: string) {
    const category = await prisma.projectCategory.update({
      where: { id },
      data: { title },
    });
    return category;
  }
}

export const categoryService = new CategoryService();
