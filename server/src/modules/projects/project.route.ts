import express from "express";
import { projectController } from "./project.controller";
import { authMiddleware } from "../../middleware/auth.middleware";
import { hasRole, isAdmin } from "../../middleware/isAdmin.middleware";
import { uploadImage } from "../../middleware/upload.middleware";
import { parseJsonFields } from "../../middleware/jsonParseFields.middleware";
import { validateBody } from "../../middleware/validate.middleware";
import { projectSchema } from "./project.validation";
const router = express.Router();

/**
 * @openapi
 * /api/projects:
 *   post:
 *     tags:
 *       - Projects
 *     summary: Create a new project (with cover + gallery + localized content)
 *     description: >
 *       Creates a project and uploads cover images (light/dark) and optional gallery images.
 *       Text fields are sent as multipart/form-data.
 *       Complex fields (localizedContent, facts, design, coverAlt, galleryAlt) must be JSON strings.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - slug
 *               - categoryId
 *               - status
 *               - localizedContent
 *               - facts
 *               - design
 *               - coverAlt
 *               - coverLight
 *               - coverDark
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Boutique IT Office"
 *               slug:
 *                 type: string
 *                 example: "boutique-it-office"
 *               categoryId:
 *                 type: integer
 *                 example: 1
 *               status:
 *                 type: string
 *                 enum: [completed, in_progress]
 *                 example: "completed"
 *               localizedContent:
 *                 type: string
 *                 description: >
 *                   JSON string. Example includes uz/ru objects.
 *                 example: >
 *                   {"uz":{"title":"Boutique IT Office","excerpt":"IT kompaniya uchun butik formatdagi ofis...","seo":{"metaTitle":"Boutique IT Office interyer dizayni","metaDescription":"Zamonaviy IT ofis..."},"challenge":"...","solution":"...","results":"..."},"ru":{"title":"Boutique IT Office","excerpt":"Бутик-офис для IT-компании...","seo":{"metaTitle":"Дизайн интерьера Boutique IT Office","metaDescription":"Современный IT-офис..."},"challenge":"...","solution":"...","results":"..."}}
 *               facts:
 *                 type: string
 *                 description: JSON string.
 *                 example: >
 *                   {"area":"320 m2","location":"Tashkent","year":2024}
 *               design:
 *                 type: string
 *                 description: JSON string.
 *                 example: >
 *                   {"style":["Modern","Corporate","Creative"],"palette":["#EAE2D6","#2B2B2B","#6B7F6A"],"materials":["Wood","Glass","Felt acoustic panels","Metal"],"keyFeatures":["Hybrid workspace","Acoustic comfort","Meeting pods","Chill zone"]}
 *               coverAlt:
 *                 type: string
 *                 description: JSON string. Cover image alt text for uz/ru.
 *                 example: >
 *                   {"alt":{"uz":"Loyiha cover rasmi (kunduzgi)","ru":"Обложка проекта (дневной вид)"}}
 *               galleryAlt:
 *                 type: string
 *                 description: >
 *                   Optional JSON string array. The array index must match the gallery files order.
 *                 example: >
 *                   [{"alt":{"uz":"Mehmonxona zonasi","ru":"Гостиная зона"}},{"alt":{"uz":"Meeting room","ru":"Переговорная"}}]
 *               coverLight:
 *                 type: string
 *                 format: binary
 *                 description: Cover image for light mode (JPEG/PNG/WebP), max 5MB
 *               coverDark:
 *                 type: string
 *                 format: binary
 *                 description: Cover image for dark mode (JPEG/PNG/WebP), max 5MB
 *               gallery:
 *                 type: array
 *                 description: Optional gallery images (0..20 items). Order matters for galleryAlt mapping.
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Project created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   description: Created project (may include coverImage, gallery, category depending on implementation)
 *       400:
 *         description: Validation error / missing required files / invalid JSON fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Validation error"
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       path:
 *                         type: string
 *                         example: "localizedContent.uz.title"
 *                       message:
 *                         type: string
 *                         example: "Title is required"
 *       401:
 *         description: Unauthorized (missing/invalid token)
 *       403:
 *         description: Forbidden (admins only)
 *       409:
 *         description: Conflict (slug already exists)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Slug already exists."
 *       500:
 *         description: Internal server error
 */
router.post(
  "/projects",
  authMiddleware,
  hasRole("admin", "editor"),
  uploadImage.fields([
    { name: "coverLight", maxCount: 1 },
    { name: "coverDark", maxCount: 1 },
    { name: "gallery", maxCount: 10 },
  ]),
  parseJsonFields([
    "localizedContent",
    "facts",
    "design",
    "coverAlt",
    "galleryAlt",
  ]),
  validateBody(projectSchema),
  projectController.createProject,
);
/**
 * @openapi
 * /api/projects:
 *   get:
 *     tags:
 *       - Projects
 *     summary: Get all projects
 *     description: >
 *       Returns all projects from the database without pagination,
 *       filtering, or searching. Intended for public project listing (MVP).
 *     responses:
 *       200:
 *         description: Projects fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       title:
 *                         type: string
 *                         example: "Modern Villa"
 *                       slug:
 *                         type: string
 *                         example: "modern-villa"
 *                       status:
 *                         type: string
 *                         example: "completed"
 *                       localizedContent:
 *                         type: object
 *                         description: JSON localized content
 *                         example:
 *                           uz:
 *                             title: "Zamonaviy villa"
 *                             desc: "..."
 *                           ru:
 *                             title: "Современная вилла"
 *                             desc: "..."
 *                       facts:
 *                         type: object
 *                         description: JSON facts
 *                         example:
 *                           year: 2024
 *                           areaM2: 220
 *                       design:
 *                         type: object
 *                         description: JSON design data
 *                         example:
 *                           style: "Minimal"
 *                       category:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             example: 2
 *                           title:
 *                             type: string
 *                             example: "Residential"
 *                       coverImage:
 *                         type: object
 *                         nullable: true
 *                         properties:
 *                           id:
 *                             type: integer
 *                             example: 10
 *                           image_light:
 *                             type: string
 *                             example: "https://res.cloudinary.com/.../light.jpg"
 *                           image_dark:
 *                             type: string
 *                             example: "https://res.cloudinary.com/.../dark.jpg"
 *                           image_alt:
 *                             type: object
 *                             example:
 *                               uz: "Old ko‘rinish"
 *                               ru: "Вид фасада"
 *                       gallery:
 *                         type: array
 *                         description: Project gallery images
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: integer
 *                               example: 55
 *                             image:
 *                               type: string
 *                               example: "https://res.cloudinary.com/.../gallery.jpg"
 *                             image_alt:
 *                               type: object
 *                               example:
 *                                 uz: "Ichki ko‘rinish"
 *                                 ru: "Интерьер"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */
router.get("/projects", projectController.getAllProjects);
/**
 * @openapi
 * /api/projects/{id}:
 *   delete:
 *     tags:
 *       - Projects
 *     summary: Delete a project
 *     description: >
 *       Deletes a project by ID. This endpoint is admin-only.
 *       Related records (cover image, gallery images) are deleted via Prisma cascade.
 *       Cloudinary assets are also removed using stored public IDs (best-effort).
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 12
 *         description: Project ID to delete
 *     responses:
 *       200:
 *         description: Project deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Project deleted successfully"
 *       400:
 *         description: Invalid project ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Invalid project ID"
 *       401:
 *         description: Unauthorized (missing/invalid token)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Login requires a token (Bearer)"
 *       403:
 *         description: Forbidden (admins only)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Access denied. Admins only."
 *       404:
 *         description: Project not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Project not found"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */
router.delete(
  "/projects/:id",
  authMiddleware,
  hasRole("admin"),
  projectController.deleteProject,
);
/**
 * @openapi
 * /api/projects/{slug}:
 *   get:
 *     tags:
 *       - Projects
 *     summary: Get project by slug
 *     description: >
 *       Returns a single project by its unique slug.
 *       Intended for public project detail pages.
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *           example: modern-villa-design
 *         description: Unique project slug
 *     responses:
 *       200:
 *         description: Project fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 2
 *                     title:
 *                       type: string
 *                       example: "Modern Villa Design"
 *                     slug:
 *                       type: string
 *                       example: "modern-villa-design"
 *                     status:
 *                       type: string
 *                       example: "completed"
 *                     localizedContent:
 *                       type: object
 *                       description: JSON localized content
 *                       example:
 *                         uz:
 *                           title: "Zamonaviy villa"
 *                           desc: "..."
 *                         ru:
 *                           title: "Современная вилла"
 *                           desc: "..."
 *                     facts:
 *                       type: object
 *                       description: JSON facts
 *                       example:
 *                         year: 2024
 *                         areaM2: 220
 *                     design:
 *                       type: object
 *                       description: JSON design info
 *                       example:
 *                         style: "Minimal"
 *                         rooms: 5
 *                     category:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           example: 1
 *                         title:
 *                           type: string
 *                           example: "Residential"
 *                     coverImage:
 *                       type: object
 *                       nullable: true
 *                       properties:
 *                         id:
 *                           type: integer
 *                           example: 8
 *                         image_light:
 *                           type: string
 *                           example: "https://res.cloudinary.com/.../light.jpg"
 *                         image_dark:
 *                           type: string
 *                           example: "https://res.cloudinary.com/.../dark.jpg"
 *                         image_alt:
 *                           type: object
 *                           example:
 *                             uz: "Fasad ko‘rinishi"
 *                             ru: "Вид фасада"
 *                     gallery:
 *                       type: array
 *                       description: Project gallery images
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             example: 15
 *                           image:
 *                             type: string
 *                             example: "https://res.cloudinary.com/.../gallery.jpg"
 *                           image_alt:
 *                             type: object
 *                             example:
 *                               uz: "Mehmonxona"
 *                               ru: "Гостиная"
 *       404:
 *         description: Project not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Project not found"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */
router.get("/projects/:slug", projectController.getProjectBySlug);
export const projectRouter = router;
