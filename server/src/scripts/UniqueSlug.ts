import { prisma } from "../lib/prisma";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/_/g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]+/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function generateUniqueSlug(title: string): Promise<string> {
  const base = slugify(title) || `project-${Date.now()}`;
  let slug = base;
  let i = 2;

  while (await prisma.projects.findUnique({ where: { slug } })) {
    slug = `${base}-${i++}`;
  }

  return slug;
}
