"use client"
import { CreateCategory } from "@/api/category.api";
import BtnLoader from "@/components/BtnLoader";
import { useToast } from "@/Providers/MessageProvider";
import { useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

function CategoryModal({
  isOpen,
  onClose,
}: Props) {
  if (!isOpen) return null;
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { success, error } = useToast()
  const handleCreate = async () => {
    try {
      setLoading(true)
      const res = await CreateCategory(name)
      success(res.message || "Kategoriya yaratildi")
    } catch (err) {
      console.error("Xato:", err);
      error("Kategoriya yaratishda xato yuz berdi")
    } finally {
      setLoading(false)
      onClose()
    }

  };
  return createPortal(
    <div className="fixed inset-0 left-0 top-0 z-50">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => onClose()}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#060e10] border border-neutral-700 rounded-2xl p-6 z-10">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-white text-lg font-semibold tracking-tight">
            Yangi kategoriya
          </h2>
          <p className="text-neutral-500 text-sm mt-1">
            Kategoriya nomini kiriting
          </p>
        </div>

        {/* Input */}
        <div className="relative mb-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Kategoriya nomi..."
            className="w-full bg-neutral-900 border border-neutral-700 focus:border-neutral-500 text-white text-sm rounded-xl px-4 py-3 outline-none transition-colors placeholder:text-neutral-600"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2.5 rounded-xl border border-neutral-700 text-neutral-400 text-sm font-medium hover:bg-neutral-800 hover:text-white transition-all"
          >
            Bekor qilish
          </button>
          <button
            type="button"
            onClick={handleCreate}
            disabled={!name.trim()}
            className="flex-1 px-4 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-neutral-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            {loading ? <BtnLoader /> : "Qo'shish"}
          </button>
        </div>

      </div>
    </div>, document.body
  );
}

export default CategoryModal;