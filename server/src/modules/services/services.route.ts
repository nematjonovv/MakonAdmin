import express from "express";
import { serviceController } from "./services.controller";
import { uploadImage } from "../../middleware/upload.middleware";
import { validateBody } from "../../middleware/validate.middleware";
import { hasRole, isAdmin } from "../../middleware/isAdmin.middleware";
import { authMiddleware } from "../../middleware/auth.middleware";
import { createServiceSchema } from "./services.validation";
import { parseLocaleData } from "../../middleware/parseData.middleware";
const router = express.Router();

/**
 * @openapi
 * /api/services:
 *   post:
 *     tags:
 *       - Services
 *     summary: Create a new service
 *     description: >
 *       Admin service yaratadi. Icon fayl sifatida yuboriladi (multipart/form-data),
 *       localeData esa string ko'rinishidagi JSON bo'ladi (multipartda text fieldlar string keladi).
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - service_icon
 *               - localeData
 *           properties:
 *             service_icon:
 *               type: string
 *               format: binary
 *               description: "Service icon image (JPEG/PNG), max 5MB"
 *             localeData:
 *               type: string
 *               description: >
 *                 JSON string. Example:
 *                 {"uz":{"title":"...","desc":"..."},"ru":{"title":"...","desc":"..."}}
 *               example: '{"uz":{"title":"Loyiha dizayni","desc":"Interyer yechimi..."},"ru":{"title":"Проектный дизайн","desc":"Решение интерьера..."}}'
 *     responses:
 *       201:
 *         description: Service created
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
 *                       example: 1
 *                     icon:
 *                       type: string
 *                       description: Cloudinary secure_url
 *                       example: "https://res.cloudinary.com/demo/image/upload/v123/services/icon.png"
 *                     icon_public_id:
 *                       type: string
 *                       description: Cloudinary public_id (odatda string bo'ladi)
 *                       example: "makon/services/icon_abc123"
 *                     localeData:
 *                       type: object
 *                       properties:
 *                         uz:
 *                           type: object
 *                           properties:
 *                             title:
 *                               type: string
 *                               example: "Loyiha dizayni"
 *                             desc:
 *                               type: string
 *                               example: "Interyer konsepsiyasi va funksional yechimlar."
 *                         ru:
 *                           type: object
 *                           properties:
 *                             title:
 *                               type: string
 *                               example: "Проектный дизайн"
 *                             desc:
 *                               type: string
 *                               example: "Концепция интерьера и функциональные решения."
 *                 message:
 *                   type: string
 *                   example: "Service created"
 *       400:
 *         description: Validation error (localeData struktura xato yoki JSON parse xato)
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
 *                   type: object
 *                   description: Zod flatten() output
 *       401:
 *         description: Unauthorized (missing/invalid token)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Login requires a token (Bearer)"
 *       403:
 *         description: Forbidden (not admin)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Forbidden"
 *       413:
 *         description: File too large (max 5MB)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "File too large"
 *       415:
 *         description: Unsupported media type (only JPEG/PNG)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Only JPEG and PNG images are allowed"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */
router.post(
  "/services",
  authMiddleware,
  hasRole("admin", "editor"),
  uploadImage.single("service_icon"),
  parseLocaleData,
  validateBody(createServiceSchema),
  serviceController.postC,
);

/**
 * @openapi
 * /api/services:
 *   get:
 *     tags:
 *       - Services
 *     summary: Get all services
 *     description: >
 *       Barcha servicelar ro‘yxatini qaytaradi.
 *       Odatda public endpoint (frontend uchun).
 *       localeData obyekt ko‘rinishida qaytadi (uz/ru).
 *     responses:
 *       200:
 *         description: Services list
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
 *                       icon:
 *                         type: string
 *                         description: Cloudinary secure_url
 *                         example: "https://res.cloudinary.com/demo/image/upload/v123/services/icon.png"
 *                       icon_public_id:
 *                         type: string
 *                         description: Cloudinary public_id
 *                         example: "makon/services/icon_abc123"
 *                       localeData:
 *                         type: object
 *                         properties:
 *                           uz:
 *                             type: object
 *                             properties:
 *                               title:
 *                                 type: string
 *                                 example: "Loyiha dizayni"
 *                               desc:
 *                                 type: string
 *                                 example: "Interyer konsepsiyasi va funksional yechimlar."
 *                           ru:
 *                             type: object
 *                             properties:
 *                               title:
 *                                 type: string
 *                                 example: "Проектный дизайн"
 *                               desc:
 *                                 type: string
 *                                 example: "Концепция интерьера и функциональные решения."
 *                 message:
 *                   type: string
 *                   example: "Services fetched successfully"
 *       404:
 *         description: Services not found
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
 *                   example: "No services found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */
router.get("/services", serviceController.getAllC);

/**
 * @openapi
 * /api/services/{id}:
 *   delete:
 *     tags:
 *       - Services
 *     summary: Delete service
 *     description: >
 *       Service o‘chiriladi.
 *       Faqat admin foydalanuvchi ruxsatiga ega.
 *       Cloudinary’dagi icon ham public_id orqali o‘chiriladi.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Service ID
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Service deleted
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
 *                   example: "Service deleted successfully"
 *       400:
 *         description: Invalid service id
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
 *                   example: "Invalid service id"
 *       401:
 *         description: Unauthorized (missing/invalid token)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Login requires a token (Bearer)"
 *       403:
 *         description: Forbidden (not admin)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Access denied. Admins only."
 *       404:
 *         description: Service not found
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
 *                   example: "Service not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */
router.delete(
  "/services/:id",
  authMiddleware,
  hasRole("admin"),
  serviceController.deleteC,
);

/**
 * @openapi
 * /api/services/{id}:
 *   put:
 *     tags:
 *       - Services
 *     summary: Update a service (full update)
 *     description: >
 *       Service yangilaydi. localeData doim to'liq yuboriladi (UZ + RU).
 *       Icon rasm ixtiyoriy: agar service_icon yuborilsa Cloudinary'ga yuklanadi va icon yangilanadi,
 *       yuborilmasa eski icon o'zgarishsiz qoladi.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Service ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - localeData
 *           properties:
 *             service_icon:
 *               type: string
 *               format: binary
 *               description: "Optional icon image (JPEG/PNG), max 5MB"
 *             localeData:
 *               type: string
 *               description: >
 *                 JSON string. Must include both uz and ru.
 *                 Example: {"uz":{"title":"...","desc":"..."},"ru":{"title":"...","desc":"..."}}
 *               example: '{"uz":{"title":"Loyiha dizayni (update)","desc":"Yangilangan izoh..."},"ru":{"title":"Проектный дизайн (обновлено)","desc":"Обновленное описание..."}}'
 *     responses:
 *       200:
 *         description: Service updated
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
 *                       example: 1
 *                     icon:
 *                       type: string
 *                       description: Cloudinary secure_url
 *                       example: "https://res.cloudinary.com/demo/image/upload/v123/services/icon.png"
 *                     icon_public_id:
 *                       type: string
 *                       description: Cloudinary public_id
 *                       example: "makon/services/icon_abc123"
 *                     localeData:
 *                       type: object
 *                       properties:
 *                         uz:
 *                           type: object
 *                           properties:
 *                             title:
 *                               type: string
 *                               example: "Loyiha dizayni (update)"
 *                             desc:
 *                               type: string
 *                               example: "Yangilangan izoh..."
 *                         ru:
 *                           type: object
 *                           properties:
 *                             title:
 *                               type: string
 *                               example: "Проектный дизайн (обновлено)"
 *                             desc:
 *                               type: string
 *                               example: "Обновленное описание..."
 *                 message:
 *                   type: string
 *                   example: "Service updated"
 *       400:
 *         description: Validation error (invalid id, localeData JSON parse error, or zod validation)
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
 *                   type: object
 *                   description: Zod flatten() output
 *       401:
 *         description: Unauthorized (missing/invalid token)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized"
 *       403:
 *         description: Forbidden (not admin)
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
 *         description: Service not found
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
 *                   example: "Service not found"
 *       413:
 *         description: File too large (max 5MB)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "File too large"
 *       415:
 *         description: Unsupported media type (only JPEG/PNG)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Only JPEG and PNG images are allowed"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */
router.put(
  "/services/:id",
  authMiddleware,
  hasRole("admin", "editor"),
  uploadImage.single("service_icon"),
  parseLocaleData,
  validateBody(createServiceSchema),
  serviceController.putC,
);
export default router;
