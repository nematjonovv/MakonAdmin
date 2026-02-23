import { BASE_URL } from "@/constants/base_url";
import { redirect } from "next/navigation";
import { logout } from "./auth/auth.api";

if (!BASE_URL) {
  console.warn("API_URL is not set");
  console.log(BASE_URL);
}

type ApiError = {
  status: number;
  message: string;
  details?: unknown;
};

type ApiFetchOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
  rawBody?: BodyInit;
  skipJson?: boolean;
};

export async function apiFetch(path: string, options: ApiFetchOptions = {}) {
  const url = `${BASE_URL}${path}`;
  const headers = new Headers(options.headers);

  const hasRawBody = options.rawBody !== undefined;
  const hasJsonBody = options.body !== undefined;

  if (hasJsonBody && !hasRawBody) {
    if (!headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }
  }

  const res = await fetch(url, {
    ...options,
    credentials: "include",
    headers,
    body: hasRawBody
      ? options.rawBody
      : hasJsonBody
        ? JSON.stringify(options.body)
        : undefined,
  });

  if (res.status === 401) {
    if (typeof window === "undefined") {
      await logout();
    } else {
      // window.location.href = "/login";
      await logout()
      window.location.href = "/login";
    }
  }

  return res;
}
