import type { Request, Response, NextFunction } from "express";

export function parseLocaleData(req: Request, res: Response, next: NextFunction) {
  const raw = req.body?.localeData;

  if (typeof raw === "string") {
    try {
      req.body.localeData = JSON.parse(raw);
    } catch {
      return res.status(400).json({
        success: false,
        message: "localeData must be valid JSON",
      });
    }
  }

  next();
}
