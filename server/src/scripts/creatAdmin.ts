import "dotenv/config";
import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma";

async function createAdmin() {
  const name = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  if (!name || !password) {
    throw new Error("Missing ADMIN_NAME or ADMIN_PASSWORD in .env");
  }
  const hashedPassword = await bcrypt.hash(password!, 10);

  await prisma.admin.upsert({
    where: { name },
    update: {},
    create: {
      name: name!,
      password: hashedPassword,
      role:"admin"
    },
  });

  console.log("admin ready", name);
}

createAdmin()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
