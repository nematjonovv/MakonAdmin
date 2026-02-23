import { Request, Response, NextFunction } from "express";

export function parseJsonFields(fields: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.body) return next();

      for (const field of fields) {
        const value = (req.body as any)[field];

        if (typeof value === "string") {
          (req.body as any)[field] = JSON.parse(value);
        }
      }

      next();
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "Invalid JSON in request body",
      });
    }
  };
}
