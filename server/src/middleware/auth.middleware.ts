import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AuthPayload } from "../types/authpayload.type";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    if (!process.env.JWT_SECRET) {
      return res
        .status(500)
        .json({ success: false, message: "Server configuration error" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as AuthPayload;
    req.admin = decoded;


    next();
  } catch (error: any) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ success: false, message: "Token expired" });
    }

    if (error.name === "JsonWebTokenError" || error.name === "SyntaxError") {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }

    console.error("Auth Middleware Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}
