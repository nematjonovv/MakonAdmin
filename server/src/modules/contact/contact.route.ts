import { Router } from "express";
import { contactController } from "./contact.controller";
import { validateBody } from "../../middleware/validate.middleware";
import { requestsSchema, updateContactSchema } from "./contact.validation";
import { authMiddleware } from "../../middleware/auth.middleware";
import { hasRole, isAdmin } from "../../middleware/isAdmin.middleware";
const router = Router();

/**
 * @openapi
 * /api/request:
 *   post:
 *     tags:
 *       - Contact / Requests
 *     summary: Send contact request
 *     description: >
 *       Foydalanuvchi studiyaga so‘rov yuboradi (lead form).
 *       Bu public endpoint bo‘lib, auth talab qilinmaydi.
 *       `heardFrom` maydoni foydalanuvchi studiya haqida qayerdan eshitganini bildiradi.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - number
 *               - about
 *               - heardFrom
 *             properties:
 *               name:
 *                 type: string
 *                 minLength: 1
 *                 example: Azizbek
 *               number:
 *                 type: string
 *                 example: "901234567"
 *                 description: >
 *                   Telefon raqam (faqat raqamlar). Zod orqali numberga cast qilinadi.
 *               about:
 *                 type: string
 *                 minLength: 1
 *                 example: 3 xonali kvartira dizayni kerak
 *                 description: Loyiha haqida qisqacha ma'lumot
 *               heardFrom:
 *                 type: string
 *                 enum: [INSTAGRAM, TELEGRAM, GOOGLE, FRIEND, OTHER]
 *                 example: INSTAGRAM
 *                 description: Foydalanuvchi studiya haqida qayerdan eshitgan
 *     responses:
 *       200:
 *         description: Request sent successfully
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
 *                   example: So'rovingiz yuborildi
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                       example: 12
 *                     name:
 *                       type: string
 *                       example: Azizbek
 *                     number:
 *                       type: number
 *                       example: 998901234567
 *                     about:
 *                       type: string
 *                       example: 3 xonali kvartira dizayni kerak
 *                     heardFrom:
 *                       type: string
 *                       example: INSTAGRAM
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2026-02-07T12:00:00.000Z
 *       400:
 *         description: Validation error (Zod)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       path:
 *                         type: string
 *                         example: name
 *                       message:
 *                         type: string
 *                         example: Ismingizni kiriting
 *       500:
 *         description: Server error
 */
router.post(
  "/request",
  validateBody(requestsSchema),
  contactController.sendRequest,
);

/**
 * @openapi
 * /api/request:
 *   get:
 *     tags:
 *       - Contact / Requests
 *     summary: Get all requests
 *     description: >
 *       Barcha foydalanuvchi so‘rovlarini (lead) qaytaradi.
 *       Odatda admin panelda ko‘rish uchun ishlatiladi.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Requests fetched successfully
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
 *                   example: Requests fetched successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: Azizbek
 *                       number:
 *                         type: string
 *                         example: "998901234567"
 *                       about:
 *                         type: string
 *                         example: 3 xonali kvartira dizayni kerak
 *                       heardFrom:
 *                         type: string
 *                         example: INSTAGRAM
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: 2026-02-07T12:00:00.000Z
 *       401:
 *         description: Unauthorized (token missing or invalid)
 *       403:
 *         description: Forbidden (Admins only)
 *       500:
 *         description: Server error
 */
router.get("/request", authMiddleware, hasRole("admin", "editor"), contactController.getRequest);

/**
 * @openapi
 * /api/request/{id}:
 *   delete:
 *     tags:
 *       - Contact / Requests
 *     summary: Delete request by ID
 *     description: >
 *       Admin kelgan so‘rovni (lead) ID orqali o‘chiradi.
 *       Bu endpoint odatda faqat admin panelda ishlatiladi.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Request ID
 *         schema:
 *           type: integer
 *           example: 3
 *     responses:
 *       200:
 *         description: Request deleted successfully
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
 *                   example: Request deleted successfully
 *       400:
 *         description: Invalid request ID
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
 *                   example: Invalid request ID
 *       401:
 *         description: Unauthorized (token missing or invalid)
 *       403:
 *         description: Forbidden (Admins only)
 *       404:
 *         description: Request not found
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
 *                   example: Request not found
 *       500:
 *         description: Server error
 */
router.delete(
  "/request/:id",
  authMiddleware,
  hasRole("admin"),
  contactController.deleteRequest,
);

/**
 * @openapi
 * /api/contactinfo:
 *   get:
 *     tags:
 *       - Contact / Settings
 *     summary: Get site contact settings
 *     description: >
 *       Saytning contact ma’lumotlarini qaytaradi (single record: id=1).
 *       Public endpoint — frontend Contact page shu endpointdan o‘qiydi.
 *     responses:
 *       200:
 *         description: Contact settings fetched successfully
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
 *                     phone:
 *                       type: string
 *                       example: "+998901234567"
 *                     phone2:
 *                       type: string
 *                       example: "+998991112233"
 *                     email:
 *                       type: string
 *                       example: "info@makon.studio"
 *                     addressUz:
 *                       type: string
 *                       example: "Toshkent, Chilonzor, ..."
 *                     addressRu:
 *                       type: string
 *                       example: "Ташкент, Чиланзар, ..."
 *                     instagram:
 *                       type: string
 *                       example: "https://instagram.com/makonstudio"
 *                     telegram:
 *                       type: string
 *                       example: "https://t.me/makonstudio"
 *                     youtube:
 *                       type: string
 *                       example: "https://youtube.com/@makonstudio"
 *                     facebook:
 *                       type: string
 *                       example: "https://facebook.com/makonstudio"
 *                     website:
 *                       type: string
 *                       example: "https://makon.studio"
 *                     mapUrl:
 *                       type: string
 *                       example: "https://maps.google.com/?q=..."
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2026-02-07T12:00:00.000Z
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2026-02-07T12:05:00.000Z
 *       500:
 *         description: Server error
 */
router.get("/contactinfo", contactController.getContactInfo);

/**
 * @openapi
 * /api/contactinfo:
 *   put:
 *     tags:
 *       - Contact / Settings
 *     summary: Upsert site contact settings
 *     description: >
 *       Admin contact sozlamalarini yangilaydi.
 *       Single record ishlatiladi (id=1).
 *       Agar record mavjud bo‘lmasa — `upsert` orqali create qiladi, mavjud bo‘lsa — update qiladi.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             description: Partial update. Faqat o‘zgargan fieldlarni yuborish mumkin.
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "+998901234567"
 *               phone2:
 *                 type: string
 *                 example: "+998991112233"
 *               email:
 *                 type: string
 *                 example: "info@makon.studio"
 *               addressUz:
 *                 type: string
 *                 example: "Toshkent, Chilonzor, ..."
 *               addressRu:
 *                 type: string
 *                 example: "Ташкент, Чиланзар, ..."
 *               instagram:
 *                 type: string
 *                 example: "https://instagram.com/makonstudio"
 *               telegram:
 *                 type: string
 *                 example: "https://t.me/makonstudio"
 *               youtube:
 *                 type: string
 *                 example: "https://youtube.com/@makonstudio"
 *               facebook:
 *                 type: string
 *                 example: "https://facebook.com/makonstudio"
 *               website:
 *                 type: string
 *                 example: "https://makon.studio"
 *               mapUrl:
 *                 type: string
 *                 example: "https://maps.google.com/?q=..."
 *     responses:
 *       200:
 *         description: Contact settings upserted successfully
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
 *                   example: Contact updated
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     phone:
 *                       type: string
 *                       example: "+998901234567"
 *                     phone2:
 *                       type: string
 *                       example: ""
 *                     email:
 *                       type: string
 *                       example: "info@makon.studio"
 *                     addressUz:
 *                       type: string
 *                       example: "Toshkent, Chilonzor, ..."
 *                     addressRu:
 *                       type: string
 *                       example: ""
 *                     instagram:
 *                       type: string
 *                       example: "https://instagram.com/makonstudio"
 *                     telegram:
 *                       type: string
 *                       example: ""
 *                     youtube:
 *                       type: string
 *                       example: ""
 *                     facebook:
 *                       type: string
 *                       example: ""
 *                     website:
 *                       type: string
 *                       example: ""
 *                     mapUrl:
 *                       type: string
 *                       example: ""
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2026-02-07T12:00:00.000Z
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2026-02-07T12:05:00.000Z
 *       400:
 *         description: Validation error (Zod)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       path:
 *                         type: string
 *                         example: email
 *                       message:
 *                         type: string
 *                         example: Invalid email
 *       401:
 *         description: Unauthorized (token missing or invalid)
 *       403:
 *         description: Forbidden (Admins only)
 *       500:
 *         description: Server error
 */
router.put(
  "/contactinfo",
  authMiddleware,
  hasRole("admin", "editor"),
  validateBody(updateContactSchema),
  contactController.upsertContactInfo,
);
export const contactRouter = router;
