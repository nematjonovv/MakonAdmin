import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("access_token");
  const { pathname } = req.nextUrl;

  const isLogin = pathname.startsWith("/login");
  const isProtected = pathname.startsWith("/dashboard");
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isLogin && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login/:path*", "/dashboard/:path*"],
};
