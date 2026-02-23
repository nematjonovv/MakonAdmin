import express from "express";
import { teamController } from "./team.controller";
import { authMiddleware } from "../../middleware/auth.middleware";
import { hasRole, isAdmin } from "../../middleware/isAdmin.middleware";
import { uploadImage } from "../../middleware/upload.middleware";

const router = express.Router();

/**
 * @openapi
 * /api/team:
 *   post:
 *     tags:
 *       - Team
 *     summary: Add a new team member
 *     description: >
 *       Creates a new team member. This endpoint is admin-only.
 *       Member photo must be uploaded as an image file (JPEG/PNG).
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
 *               - role
 *               - member_photo
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *                 description: Team member full name
 *               role:
 *                 type: string
 *                 example: "Interior Designer"
 *                 description: Team member role or position
 *               member_photo:
 *                 type: string
 *                 format: binary
 *                 description: Team member photo (JPEG/PNG, max 5MB)
 *     responses:
 *       201:
 *         description: Team member added successfully
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
 *                   example: "Team member added successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: "John Doe"
 *                     role:
 *                       type: string
 *                       example: "Interior Designer"
 *                     photo:
 *                       type: string
 *                       example: "https://res.cloudinary.com/.../member.jpg"
 *       400:
 *         description: Validation error or missing image
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Members image is required"
 *       401:
 *         description: Unauthorized (missing or invalid token)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
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
 *                 message:
 *                   type: string
 *                   example: "Access denied. Admins only."
 *       500:
 *         description: Server error
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
  "/team",
  authMiddleware,
  hasRole("admin", "editor"),
  uploadImage.single("member_photo"),
  teamController.addTeamMember,
);
/**
 * @openapi
 * /api/team:
 *   get:
 *     tags:
 *       - Team
 *     summary: Get all team members
 *     description: >
 *       Returns all team members from the database. Intended for public display.
 *     responses:
 *       200:
 *         description: Team members fetched successfully
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
 *                       name:
 *                         type: string
 *                         example: "John Doe"
 *                       role:
 *                         type: string
 *                         example: "Interior Designer"
 *                       photo:
 *                         type: string
 *                         example: "https://res.cloudinary.com/.../member.jpg"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */
router.get("/team", teamController.getTeamMembers);

/**
 * @openapi
 * /api/team/{id}:
 *   delete:
 *     tags:
 *       - Team
 *     summary: Delete a team member
 *     description: >
 *       Deletes a team member by ID. This endpoint is admin-only.
 *       The member's photo is also deleted from Cloudinary using the stored public ID (best-effort).
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 3
 *         description: Team member ID to delete
 *     responses:
 *       200:
 *         description: Team member deleted successfully
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
 *                   example: "Team member deleted successfully"
 *       400:
 *         description: Invalid team member ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid team member ID"
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
 *         description: Forbidden (admins only)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Access denied. Admins only."
 *       404:
 *         description: Team member not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Team member not found"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */
router.delete("/team/:id", authMiddleware, hasRole("admin"), teamController.deleteTeamMember);

export const teamRouter = router;
