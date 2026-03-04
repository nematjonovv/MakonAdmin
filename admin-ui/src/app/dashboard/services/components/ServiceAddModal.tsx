import { createService } from "@/api/services/service.api";
import { useToast } from "@/Providers/MessageProvider";
import { useState } from "react";
import { createPortal } from "react-dom";

function ServiceAddModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    uzTitle: "",
    uzDesc: "",
    ruTitle: "",
    ruDesc: "",
  });

  const { error, success } = useToast();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData();
      if (file) {
        formData.append("service_icon", file);
      }
      formData.append(
        "localeData",
        JSON.stringify({
          uz: { title: form.uzTitle, desc: form.uzDesc },
          ru: { title: form.ruTitle, desc: form.ruDesc },
        }),
      );

      const res = await createService(formData);
      success(res?.message);
    } catch (err: any) {
      console.error(err);
      error(err.message);
    } finally {
      setForm({ uzTitle: "", uzDesc: "", ruTitle: "", ruDesc: "" });
      setLoading(false);
      onClose();
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => onClose()}
      />

      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="z-10 relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-(--bg) p-6 w-120 border border-neutral-700"
        >
          <h2 className="mb-6 text-xl font-semibold text-(--text) font-clash">
            Yangi xizmat qo'shish
          </h2>

          {/* UZ fields */}
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
            O'zbekcha
          </p>
          <input
            type="text"
            placeholder="Sarlavha (UZ)"
            className="mb-3 w-full rounded-lg bg-gray-800 px-3 py-2.5 text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-blue-500 transition"
            onChange={(e) =>
              setForm((p) => ({ ...p, uzTitle: e.target.value }))
            }
          />
          <textarea
            placeholder="Tavsif (UZ)"
            rows={3}
            className="mb-4 w-full rounded-lg bg-gray-800 px-3 py-2.5 text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-blue-500 transition resize-none"
            onChange={(e) => setForm((p) => ({ ...p, uzDesc: e.target.value }))}
          />

          {/* Divider */}
          <div className="border-t border-gray-700 mb-4" />

          {/* RU fields */}
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
            Ruscha
          </p>
          <input
            type="text"
            placeholder="Заголовок (RU)"
            className="mb-3 w-full rounded-lg bg-gray-800 px-3 py-2.5 text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-blue-500 transition"
            onChange={(e) =>
              setForm((p) => ({ ...p, ruTitle: e.target.value }))
            }
          />
          <textarea
            placeholder="Описание (RU)"
            rows={3}
            className="mb-4 w-full rounded-lg bg-gray-800 px-3 py-2.5 text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-blue-500 transition resize-none"
            onChange={(e) => setForm((p) => ({ ...p, ruDesc: e.target.value }))}
          />

          {/* Divider */}
          <div className="border-t border-gray-700 mb-4" />

          {/* File upload */}
          <input
            type="file"
            id="file-upload"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="hidden"
          />
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center w-full px-4 py-5 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-gray-800/50 transition mb-5"
          >
            {file ? (
              <span className="text-green-400 text-sm">{file.name}</span>
            ) : (
              <>
                <svg
                  className="w-7 h-7 text-gray-500 mb-1.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                <span className="text-gray-400 text-sm">
                  Fayl yuklash uchun bosing
                </span>
                <span className="text-gray-600 text-xs mt-0.5">
                  SVG, PNG, JPG
                </span>
              </>
            )}
          </label>

          {/* Buttons */}
          <div className="flex gap-2 text-white">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="flex-1 rounded-lg bg-gray-700 py-2.5 cursor-pointer hover:bg-red-500/20 border-2 border-transparent hover:border-red-500 transition disabled:opacity-50"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded-lg bg-blue-600 py-2.5 hover:bg-blue-700 cursor-pointer transition disabled:opacity-50"
            >
              {loading ? "Yuklanmoqda..." : "Qo'shish"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
}

export default ServiceAddModal;
