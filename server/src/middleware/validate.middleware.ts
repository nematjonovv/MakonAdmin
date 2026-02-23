import { NextFunction, Request, Response } from "express";
import * as z from "zod";

export const validateBody =
  (schema: z.ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors = result.error.issues.map((i) => ({
        path: i.path.join("."),
        message: i.message,
        code: i.code,
      }));

      return res.status(400).json({ errors });
    }

    req.body = result.data;
    next();
  };
