import { Response } from "express";

export async function SetAuthCookie(res: Response, token: string) {
  const isProd = process.env.NODE_ENV === "production";
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("isProd:", isProd);
  res.cookie("access_token", token, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}
