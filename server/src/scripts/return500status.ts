export default function return500status({
  message,
  res,
}: { message?: string; res?: any } = {}) {
  return res
    .status(500)
    .json({ success: false, message: message || "Internal server error" });
}
