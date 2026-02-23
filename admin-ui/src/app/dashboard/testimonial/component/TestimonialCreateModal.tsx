"use client";
import { createPortal } from "react-dom";
import { useState, ChangeEvent, FormEvent, useRef } from "react";
import { createTestimonial } from "@/api/testimonial.api";
import { useToast } from "@/Providers/MessageProvider";
import BtnLoader from "@/components/BtnLoader";

interface LocalizedText {
  position: string;
  content: string;
}

interface LocalizedContent {
  uz: LocalizedText;
  ru: LocalizedText;
}

interface AltLang {
  uz: string;
  ru: string;
}

interface Alt {
  image: AltLang;
  video: AltLang;
}
function TestimonialCreateModal({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}) {
  if (!isOpen) return null;

  const [name, setName] = useState<string>("");
  const [localizedContent, setLocalizedContent] = useState<LocalizedContent>({
    uz: { position: "", content: "" },
    ru: { position: "", content: "" },
  });
  const [alt, setAlt] = useState<Alt>({
    image: { uz: "", ru: "" },
    video: { uz: "", ru: "" },
  });
  const [avatar, setAvatar] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);

  const avatarRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);

  const handleLocalizedContentChange = (
    lang: keyof LocalizedContent,
    field: keyof LocalizedText,
    value: string,
  ) => {
    setLocalizedContent((prev) => ({
      ...prev,
      [lang]: { ...prev[lang], [field]: value },
    }));
  };

  const handleAltChange = (
    type: keyof Alt,
    lang: keyof AltLang,
    value: string,
  ) => {
    setAlt((prev) => ({
      ...prev,
      [type]: { ...prev[type], [lang]: value },
    }));
  };

  const { error, success } = useToast();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("localizedContent", JSON.stringify(localizedContent));
    formData.append("alt", JSON.stringify(alt));
    if (avatar) formData.append("avatar", avatar);
    if (video) formData.append("video", video);

    try {
      setLoading(true);
      const res = await createTestimonial(formData);
      if (res.success) {
        success(res.message);
        setLoading(false);
        onSuccess()
      } else {
        error(res.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      onClose();
      setLoading(false);
      setName("");
      setLocalizedContent({
        uz: { position: "", content: "" },
        ru: { position: "", content: "" },
      });
      setAlt({
        image: { uz: "", ru: "" },
        video: { uz: "", ru: "" },
      });
      setAvatar(null);
      setVideo(null);
    }
  };

  const inputClass =
    "bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-neutral-500 transition-colors w-full placeholder:text-neutral-500";

  const labelClass = "text-gray-400 text-sm";
  return createPortal(
    <div>
      <div
        className="absolute z-50 inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => onClose()}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-[#060e10] border border-neutral-700 rounded-2xl p-6 z-50">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-[#060e10] border border-neutral-700 rounded-2xl p-6"
        >
          <h2 className="text-white text-xl font-semibold mb-6">
            Testimonial qo'shish
          </h2>

          <div className="flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                placeholder="Full name"
                className={inputClass}
              />
            </div>

            {/* Localized Content */}
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>
                Localized Content <span className="text-red-400">*</span>
              </label>
              <div className="flex gap-5">
                {(["uz", "ru"] as Array<keyof LocalizedContent>).map((lang) => (
                  <div
                    key={lang}
                    className="bg-neutral-800 border border-neutral-700 rounded-lg p-4 flex flex-col gap-2 flex-1
                    "
                  >
                    <span className="text-xs font-bold uppercase text-neutral-400">
                      {lang}
                    </span>
                    <input
                      type="text"
                      placeholder="Position"
                      value={localizedContent[lang].position}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleLocalizedContentChange(
                          lang,
                          "position",
                          e.target.value,
                        )
                      }
                      className="bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-500"
                    />
                    <textarea
                      placeholder="Content"
                      value={localizedContent[lang].content}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                        handleLocalizedContentChange(
                          lang,
                          "content",
                          e.target.value,
                        )
                      }
                      rows={3}
                      className="bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-neutral-500 transition-colors resize-none placeholder:text-neutral-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Alt */}
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>
                Alt <span className="text-red-400">*</span>
              </label>
              <div className="flex gap-5">
                {(["image", "video"] as Array<keyof Alt>).map((type) => (
                  <div
                    key={type}
                    className="bg-neutral-800 border border-neutral-700 rounded-lg p-4 flex flex-col gap-2 flex-1"
                  >
                    <span className="text-xs font-bold uppercase text-neutral-400">
                      {type}
                    </span>
                    {(["uz", "ru"] as Array<keyof AltLang>).map((lang) => (
                      <input
                        key={lang}
                        type="text"
                        placeholder={`Alt ${type} (${lang})`}
                        value={alt[type][lang]}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleAltChange(type, lang, e.target.value)
                        }
                        className="bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-500"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-5">
              {/* Avatar */}
              <div className="flex flex-col gap-1.5 flex-1">
                <label className={labelClass}>Avatar</label>
                <div
                  onClick={() => avatarRef.current?.click()}
                  className="bg-neutral-800 border border-dashed border-neutral-600 rounded-lg px-4 py-5 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-neutral-400 transition-colors"
                >
                  {avatar ? (
                    <p className="text-green-400 text-sm">{avatar.name}</p>
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
                      <p className="text-neutral-500 text-sm">JPEG/PNG/WebP</p>
                    </>
                  )}
                </div>
                <input
                  ref={avatarRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setAvatar(e.target.files?.[0] ?? null)
                  }
                  className="hidden"
                />
              </div>

              {/* Video */}
              <div className="flex flex-col gap-1.5 flex-1">
                <label className={labelClass}>Video</label>
                <div
                  onClick={() => videoRef.current?.click()}
                  className="bg-neutral-800 border border-dashed border-neutral-600 rounded-lg px-4 py-5 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-neutral-400 transition-colors"
                >
                  {video ? (
                    <p className="text-green-400 text-sm">{video.name}</p>
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
                          d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                        />
                      </svg>
                      <p className="text-neutral-500 text-sm">MP4/MOV/etc</p>
                    </>
                  )}
                </div>
                <input
                  ref={videoRef}
                  type="file"
                  accept="video/*"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setVideo(e.target.files?.[0] ?? null)
                  }
                  className="hidden"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={() => {
                setName("");
                setLocalizedContent({
                  uz: { position: "", content: "" },
                  ru: { position: "", content: "" },
                });
                setAlt({
                  image: { uz: "", ru: "" },
                  video: { uz: "", ru: "" },
                });
                setAvatar(null);
                setVideo(null);
              }}
              className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white border border-neutral-700 hover:border-neutral-500 transition-colors cursor-pointer"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg text-sm bg-white text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer"
            >
              {loading ? <BtnLoader /> : "Qo'shish"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
}

export default TestimonialCreateModal;
