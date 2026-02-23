"use client";

import { createPortal } from "react-dom";
import { useState, useRef } from "react";
import { createMember } from "@/api/team.api";
import { useToast } from "@/Providers/MessageProvider";
import { useRouter } from "next/navigation";
import BtnLoader from "@/components/BtnLoader";

function CreateModal({
  isOpen,
  onClose,
  onSuccess, // ✅ yangi prop
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    role: "",
    member_photo: null as File | null,
  });

  const fileRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const { error, success } = useToast();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "member_photo" && files) {
      setForm((prev) => ({ ...prev, member_photo: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("role", form.role);
      if (form.member_photo) formData.append("member_photo", form.member_photo);
      const res = await createMember(formData);
      success(res?.message);
      onSuccess();
      setForm({
        member_photo: null,
        name: "",
        role: "",
      });
    } catch (err: any) {
      error(err.message);
    } finally {
      setLoading(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 left-0 top-0 z-50">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => onClose()}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#060e10] border border-neutral-700 rounded-2xl p-6 z-10">
        <h2 className="text-white text-xl font-semibold mb-6">
          Yangi jamoadosh qo'shish
        </h2>

        <div className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">
              Ism <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Team member full name"
              className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-neutral-500 transition-colors"
            />
          </div>

          {/* Role */}
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">
              Lavozim <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="Team member role or position"
              className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-neutral-500 transition-colors"
            />
          </div>

          {/* Photo */}
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">
              Rasm <span className="text-red-400">*</span>
            </label>
            <div
              onClick={() => fileRef.current?.click()}
              className="bg-neutral-800 border border-dashed border-neutral-600 rounded-lg px-4 py-5 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-neutral-400 transition-colors"
            >
              {form.member_photo ? (
                <p className="text-green-400 text-sm">
                  {form.member_photo.name}
                </p>
              ) : (
                <>
                  <svg
                    className="w-8 h-8 text-neutral-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-neutral-500 text-sm">JPEG/PNG, max 5MB</p>
                </>
              )}
            </div>
            <input
              ref={fileRef}
              type="file"
              name="member_photo"
              accept="image/jpeg,image/png"
              onChange={handleChange}
              className="hidden"
            />
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
            className="px-4 py-2 rounded-lg text-sm bg-white text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer"
          >
            {loading ? <BtnLoader /> : "Qo'shish"}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default CreateModal;
