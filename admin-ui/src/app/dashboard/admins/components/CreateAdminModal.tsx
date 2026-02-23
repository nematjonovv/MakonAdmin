import { createPortal } from "react-dom";
import { useState } from "react";
import { register } from "@/api/admin.api";
import { useToast } from "@/Providers/MessageProvider";

function CreateAdminModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    role: "editor",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const { error, success } = useToast();
  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Ism kiritilishi shart";
    if (!form.password) newErrors.password = "Parol kiritilishi shart";
    else if (form.password.length < 6) newErrors.password = "Kamida 6 ta belgi";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Parollar mos kelmadi";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    try {
      const res = await register({
        name: form.name,
        password: form.password,
        role: form.role as "editor" | "admin",
      });

      if (res.success) {
        setLoading(false);
        success(res.message);
      } else {
        setLoading(false);
        error(res.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      onClose();
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#060e10] border border-neutral-700 rounded-2xl p-6 z-10">
        <h2 className="text-white text-xl font-semibold mb-6">
          Yangi admin yaratish
        </h2>

        <div className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">
              Nom <span className="text-gray-600">(username)</span>{" "}
              <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="username"
              className={`bg-neutral-800 border rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-colors ${
                errors.name
                  ? "border-red-500"
                  : "border-neutral-700 focus:border-neutral-500"
              }`}
            />
            {errors.name && (
              <p className="text-red-400 text-xs">{errors.name}</p>
            )}
          </div>

          {/* Role */}
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">
              Rol <span className="text-red-400">*</span>
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-neutral-500 transition-colors cursor-pointer"
            >
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Password row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-sm">
                Parol <span className="text-red-400">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`bg-neutral-800 border rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-colors ${
                  errors.password
                    ? "border-red-500"
                    : "border-neutral-700 focus:border-neutral-500"
                }`}
              />
              {errors.password && (
                <p className="text-red-400 text-xs">{errors.password}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-sm">
                Tasdiqlash <span className="text-red-400">*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={`bg-neutral-800 border rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-colors ${
                  errors.confirmPassword
                    ? "border-red-500"
                    : "border-neutral-700 focus:border-neutral-500"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-400 text-xs">{errors.confirmPassword}</p>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white border border-neutral-700 hover:border-neutral-500 transition-colors cursor-pointer"
          >
            Bekor qilish
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 rounded-lg text-sm bg-white text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Yaratilmoqda...
              </span>
            ) : (
              "Yaratish"
            )}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default CreateAdminModal;
