import { AuthPayload } from "./authpayload.type";

declare global {
  namespace Express {
    interface Request {
      admin?: AuthPayload;
    }
  }
}

export {};
