import express from "express";
import { testimonialController } from "./testimonial.controller";
import { authMiddleware } from "../../middleware/auth.middleware";
import { hasRole } from "../../middleware/isAdmin.middleware";
import { uploadTestimonialFiles } from "../../middleware/upload.middleware";
import { validateBody } from "../../middleware/validate.middleware";
import { createTestimonialSchema } from "./testimonial.validation";
import { parseJsonFields } from "../../middleware/jsonParseFields.middleware";
const router = express.Router();

/**
 * @openapi
 * /api/testimonials:
 *   post:
 *     tags:
 *       - Testimonials
 *     summary: Create a new testimonial
 *     description: >
 *       Admin testimonial yaratadi. `avatar` va `video` fayl sifatida yuboriladi (multipart/form-data).
 *       `localizedContent` va `alt` maydonlari multipartda string bo‘lib keladi, shuning uchun backendda
 *       `parseJsonFields(["localizedContent","alt"])` orqali JSON.parse qilinadi.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - localizedContent
 *               - alt
 *             properties:
 *               name:
 *                 type: string
 *                 minLength: 1
 *                 example: "john-doe"
 *               localizedContent:
 *                 type: string
 *                 description: >
 *                   JSON string. Example:
 *                   {"uz":{"position":"...","content":"..."},"ru":{"position":"...","content":"..."}}
 *                 example: '{"uz":{"position":"Mijoz","content":"Zo‘r xizmat!"},"ru":{"position":"Клиент","content":"Отличный сервис!"}}'
 *               alt:
 *                 type: string
 *                 description: >
 *                   JSON string. Example:
 *                   {"image":{"uz":"...","ru":"..."},"video":{"uz":"...","ru":"..."}}
 *                 example: '{"image":{"uz":"Avatar rasmi","ru":"Фото аватара"},"video":{"uz":"Video izoh","ru":"Видео отзыв"}}'
 *               avatar:
 *                 type: string
 *                 format: binary
 *                 description: "Testimonial avatar image (JPEG/PNG/WebP), max size depends on server config"
 *               video:
 *                 type: string
 *                 format: binary
 *                 description: "Testimonial video (MP4/MOV/etc), max size depends on server config"
 *     responses:
 *       201:
 *         description: Testimonial created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Testimonial created successfully.
 *                 testimonial:
 *                   type: object
 *                   description: Created testimonial entity (fields may vary by implementation)
 *       400:
 *         description: Validation error (Zod) or invalid JSON in multipart fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid JSON format
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       path:
 *                         type: string
 *                         example: localizedContent.uz.position
 *                       message:
 *                         type: string
 *                         example: Position is required
 *                       code:
 *                         type: string
 *                         example: too_small
 *       401:
 *         description: Unauthorized (token missing/invalid)
 *       403:
 *         description: Forbidden (Admins only)
 *       500:
 *         description: Server error
 */
router.post(
  "/testimonials",
  authMiddleware,
  hasRole("admin", "editor"),
  uploadTestimonialFiles,
  parseJsonFields(["localizedContent", "alt"]),
  validateBody(createTestimonialSchema),
  testimonialController.createTestimonial,
);

/**
 * @openapi
 * /api/testimonials:
 *   get:
 *     tags:
 *       - Testimonials
 *     summary: Get all testimonials
 *     description: >
 *       Barcha testimoniallarni qaytaradi. Har bir testimonialda localized content (uz, ru),
 *       avatar va video url’lari hamda alt matnlari mavjud bo‘ladi.
 *       Public endpoint — auth talab qilinmaydi (agar middleware qo‘shilmagan bo‘lsa).
 *     responses:
 *       200:
 *         description: Testimonials fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Testimonials fetched successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: john-doe
 *                       avatarUrl:
 *                         type: string
 *                         example: https://cdn.site.com/avatar.jpg
 *                       videoUrl:
 *                         type: string
 *                         example: https://cdn.site.com/video.mp4
 *                       localizedContent:
 *                         type: object
 *                         properties:
 *                           uz:
 *                             type: object
 *                             properties:
 *                               position:
 *                                 type: string
 *                                 example: Mijoz
 *                               content:
 *                                 type: string
 *                                 example: Zo‘r xizmat!
 *                           ru:
 *                             type: object
 *                             properties:
 *                               position:
 *                                 type: string
 *                                 example: Клиент
 *                               content:
 *                                 type: string
 *                                 example: Отличный сервис!
 *                       alt:
 *                         type: object
 *                         properties:
 *                           image:
 *                             type: object
 *                             properties:
 *                               uz:
 *                                 type: string
 *                                 example: Avatar rasmi
 *                               ru:
 *                                 type: string
 *                                 example: Фото аватара
 *                           video:
 *                             type: object
 *                             properties:
 *                               uz:
 *                                 type: string
 *                                 example: Video izoh
 *                               ru:
 *                                 type: string
 *                                 example: Видео отзыв
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: 2026-02-07T10:00:00.000Z
 *       500:
 *         description: Server error
 */
router.get("/testimonials", testimonialController.getAllTestimonials);

/**
 * @openapi
 * /api/testimonials/{id}:
 *   delete:
 *     tags:
 *       - Testimonials
 *     summary: Delete testimonial by ID
 *     description: >
 *       Admin testimonialni ID orqali o‘chiradi.
 *       Testimonial o‘chirilganda unga tegishli avatar va video ham Cloudinary’dan o‘chiriladi (agar mavjud bo‘lsa).
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Testimonial ID
 *         schema:
 *           type: integer
 *           example: 5
 *     responses:
 *       200:
 *         description: Testimonial deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Testimonial deleted successfully
 *       400:
 *         description: Invalid ID supplied
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid testimonial ID
 *       401:
 *         description: Unauthorized (token missing/invalid)
 *       403:
 *         description: Forbidden (Admins only)
 *       404:
 *         description: Testimonial not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Testimonial not found
 *       500:
 *         description: Server error
 */
router.delete(
  "/testimonials/:id",
  authMiddleware,
  hasRole("admin"),
  testimonialController.deleteTestimonial,
);
export const testimonialRouter = router;
