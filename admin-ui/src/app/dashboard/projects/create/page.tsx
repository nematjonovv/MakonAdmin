"use client";

import { createProject } from "@/api/projects.api";
import CategoryDropdown from "@/components/CategoryDropdown";
import { useToast } from "@/Providers/MessageProvider";
import { Select } from "antd";
import { PlusCircle, PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import CategoryModal from "../components/CategoryModal";
import Loader from "@/components/Loader";

// ─── Reusable UI ────────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label
      className="block text-xs font-semibold tracking-widest uppercase mb-1.5"
      style={{ color: "var(--secondarytext)" }}
    >
      {children}
    </label>
  );
}

function Input({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none transition-all"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border-muted)",
        color: "var(--text)",
      }}
    />
  );
}

function Textarea({
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={3}
      className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none transition-all resize-none"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border-muted)",
        color: "var(--text)",
      }}
    />
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <span
          className="text-xs font-bold tracking-[0.2em] uppercase"
          style={{ color: "var(--secondarytext)" }}
        >
          {title}
        </span>
        <div
          className="flex-1 h-px"
          style={{ background: "var(--border-muted)" }}
        />
      </div>
      {subtitle && (
        <p className="text-xs mt-1" style={{ color: "var(--secondarytext)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Tag Input ───────────────────────────────────────────────────────────────

function TagInput({
  tags,
  onChange,
  placeholder,
}: {
  tags: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
}) {
  const [input, setInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      if (!tags.includes(input.trim())) {
        onChange([...tags, input.trim()]);
      }
      setInput("");
    }
    if (e.key === "Backspace" && !input && tags.length > 0) {
      onChange(tags.slice(0, -1));
    }
  };

  const removeTag = (tag: string) => {
    onChange(tags.filter((t) => t !== tag));
  };

  return (
    <div
      className="min-h-11 w-full px-3 py-2 rounded-lg transition-all flex flex-wrap gap-2"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border-muted)",
      }}
    >
      {tags.map((tag) => (
        <span
          key={tag}
          className="flex items-center gap-1 px-2.5 py-0.5 text-xs rounded-full"
          style={{ background: "var(--surface)", color: "var(--text)" }}
        >
          {tag}
          <button
            type="button"
            onClick={() => removeTag(tag)}
            style={{ color: "var(--secondarytext)" }}
            className="hover:text-white transition-colors"
          >
            ×
          </button>
        </span>
      ))}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={tags.length === 0 ? placeholder : ""}
        className="flex-1 min-w-30 bg-transparent text-sm focus:outline-none"
        style={{ color: "var(--text)" }}
      />
    </div>
  );
}

// ─── Color Picker ────────────────────────────────────────────────────────────

function ColorPicker({
  colors,
  onChange,
}: {
  colors: string[];
  onChange: (colors: string[]) => void;
}) {
  const [current, setCurrent] = useState("#000000");

  const addColor = () => {
    if (!colors.includes(current)) {
      onChange([...colors, current]);
    }
  };

  const removeColor = (hex: string) => {
    onChange(colors.filter((c) => c !== hex));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          className="w-10 h-10 rounded-lg cursor-pointer p-0.5"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border-muted)",
          }}
        />
        <span
          className="text-sm font-mono"
          style={{ color: "var(--secondarytext)" }}
        >
          {current}
        </span>
        <button
          type="button"
          onClick={addColor}
          className="px-3 py-1.5 text-xs rounded-lg transition-colors"
          style={{ background: "var(--button-bg)", color: "var(--text)" }}
        >
          + Qo'shish
        </button>
      </div>
      <div className="flex flex-wrap gap-3">
        {colors.map((hex) => (
          <div key={hex} className="flex flex-col items-center gap-1">
            <div
              className="w-9 h-9 rounded-full border-2 cursor-pointer relative group"
              style={{
                backgroundColor: hex,
                borderColor: "var(--border-muted)",
              }}
            >
              <button
                type="button"
                onClick={() => removeColor(hex)}
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-xs hidden group-hover:flex items-center justify-center"
              >
                ×
              </button>
            </div>
            <span
              className="text-xs font-mono"
              style={{ color: "var(--secondarytext)" }}
            >
              {hex}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Image Upload ─────────────────────────────────────────────────────────────

function ImageUpload({
  label,
  preview,
  onChange,
}: {
  label: string;
  preview: string | null;
  onChange: (file: File) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div
        onClick={() => ref.current?.click()}
        className="relative aspect-video rounded-xl border-2 border-dashed cursor-pointer transition-all overflow-hidden flex items-center justify-center"
        style={{
          borderColor: "var(--border-muted)",
          background: "var(--card)",
        }}
      >
        {preview ? (
          <img src={preview} className="w-full h-full object-cover" />
        ) : (
          <div
            className="flex flex-col items-center gap-2"
            style={{ color: "var(--secondarytext)" }}
          >
            <svg
              className="w-10 h-10"
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
            <span className="text-xs">Rasm yuklash uchun bosing</span>
          </div>
        )}
      </div>
      <input
        ref={ref}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onChange(file);
        }}
      />
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────────

export default function ProjectCreatePage() {
  const router = useRouter();
  // General
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("completed");
  const [categoryId, setCategoryId] = useState<number | null>(null);

  // Facts
  const [year, setYear] = useState("");
  const [areaM2, setAreaM2] = useState("");
  const [budget, setBudget] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  // Design
  const [styles, setStyles] = useState<string[]>([]);
  const [palette, setPalette] = useState<string[]>([]);
  const [materials, setMaterials] = useState<string[]>([]);
  const [keyFeatures, setKeyFeatures] = useState<string[]>([]);

  // Localized — UZ
  const [uzExcerpt, setUzExcerpt] = useState("");
  const [uzChallenge, setUzChallenge] = useState("");
  const [uzSolution, setUzSolution] = useState("");
  const [uzResults, setUzResults] = useState("");
  const [uzMetaTitle, setUzMetaTitle] = useState("");
  const [uzMetaDesc, setUzMetaDesc] = useState("");

  // Localized — RU
  const [ruExcerpt, setRuExcerpt] = useState("");
  const [ruChallenge, setRuChallenge] = useState("");
  const [ruSolution, setRuSolution] = useState("");
  const [ruResults, setRuResults] = useState("");
  const [ruMetaTitle, setRuMetaTitle] = useState("");
  const [ruMetaDesc, setRuMetaDesc] = useState("");

  // Cover Image
  const [coverLightFile, setCoverLightFile] = useState<File | null>(null);
  const [coverLightPreview, setCoverLightPreview] = useState<string | null>(
    null,
  );
  const [coverDarkFile, setCoverDarkFile] = useState<File | null>(null);
  const [coverDarkPreview, setCoverDarkPreview] = useState<string | null>(null);
  const [coverAltUz, setCoverAltUz] = useState("");
  const [coverAltRu, setCoverAltRu] = useState("");

  // Gallery
  const [gallery, setGallery] = useState<
    { file: File; preview: string; altUz: string; altRu: string }[]
  >([]);
  const galleryRef = useRef<HTMLInputElement>(null);

  const handleCoverLight = (file: File) => {
    setCoverLightFile(file);
    setCoverLightPreview(URL.createObjectURL(file));
  };

  const handleCoverDark = (file: File) => {
    setCoverDarkFile(file);
    setCoverDarkPreview(URL.createObjectURL(file));
  };

  const handleGalleryAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newItems = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      altUz: "",
      altRu: "",
    }));
    setGallery((prev) => [...prev, ...newItems]);
  };

  const handleGalleryAlt = (
    index: number,
    lang: "altUz" | "altRu",
    value: string,
  ) => {
    setGallery((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [lang]: value } : item)),
    );
  };

  const handleGalleryRemove = (index: number) => {
    setGallery((prev) => prev.filter((_, i) => i !== index));
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    // ── Oddiy fieldlar ─────────────────────────
    formData.append("title", title);
    formData.append("status", status);
    if (categoryId) {
      formData.append("categoryId", String(categoryId));
    }

    // ── JSON fieldlar — stringify qilamiz ──────
    const localizedContent = {
      uz: {
        excerpt: uzExcerpt,
        challenge: uzChallenge,
        solution: uzSolution,
        results: uzResults,
        seo: {
          metaTitle: uzMetaTitle,
          metaDescription: uzMetaDesc,
        },
      },
      ru: {
        excerpt: ruExcerpt,
        challenge: ruChallenge,
        solution: ruSolution,
        results: ruResults,
        seo: {
          metaTitle: ruMetaTitle,
          metaDescription: ruMetaDesc,
        },
      },
    };
    formData.append("localizedContent", JSON.stringify(localizedContent));

    const facts = {
      year: Number(year),
      areaM2: Number(areaM2),
      budget: Number(budget),
      location: { city, country },
    };
    formData.append("facts", JSON.stringify(facts));

    const design = {
      style: styles,
      palette,
      materials,
      keyFeatures,
    };
    formData.append("design", JSON.stringify(design));

    // ── Cover image alt — stringify ────────────
    const coverImageAlt = { alt: { uz: coverAltUz, ru: coverAltRu } };
    formData.append("coverAlt", JSON.stringify(coverImageAlt));

    // ── Fayllar — to'g'ridan-to'g'ri ──────────
    if (coverLightFile) formData.append("coverLight", coverLightFile);
    if (coverDarkFile) formData.append("coverDark", coverDarkFile);

    // ── Gallery ────────────────────────────────
    gallery.forEach((item, index) => {
      formData.append("gallery", item.file);
    });
    const galleryAlts = gallery.map((item) => ({
      alt: { uz: item.altUz, ru: item.altRu },
    }));
    formData.append("galleryAlt", JSON.stringify(galleryAlts));
    try {
      setLoading(true);
      const res = await createProject(formData);
      if (res.success) {
        success(res.message ?? "Loyiha muvaffaqiyatli qo'shildi");
        router.push("/dashboard/projects");
      }
      console.log(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const { error, success } = useToast();
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div
      className="min-h-screen h-screen overflow-x-auto custom-scroll font-clash"
      style={{ background: "var(--bg)" }}
    >
      {loading && <Loader />}
      {/* Header */}
      <div
        className="sticky top-0 z-10 backdrop-blur px-8 py-4 flex items-center justify-between"
        style={{
          background: "var(--header-bg)",
          borderBottom: "1px solid var(--header-border)",
        }}
      >
        <div>
          <h1
            className="text-lg font-semibold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Yangi loyiha
          </h1>
          <p
            className="text-xs mt-0.5"
            style={{ color: "var(--secondarytext)" }}
          >
            Barcha maydonlarni to'ldiring
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => history.back()}
            className="px-5 py-2 text-sm font-medium rounded-lg transition-colors"
            style={{
              border: "1px solid var(--border-muted)",
              color: "var(--secondarytext)",
              background: "transparent",
            }}
          >
            Bekor qilish
          </button>
          <button
            type="submit"
            form="create-form"
            className="px-5 py-2 text-sm font-medium rounded-lg transition-colors"
            style={{ background: "var(--button-bg)", color: "var(--text)" }}
          >
            Saqlash
          </button>
        </div>
      </div>

      <form id="create-form" onSubmit={handleSubmit}>
        <div className="max-w-5xl mx-auto px-8 py-10 space-y-10">
          {/* General Info */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border-muted)",
            }}
          >
            <SectionTitle title="Umumiy ma'lumotlar" />
            <div className="grid grid-cols-2 gap-5">
              <div>
                <Label>Sarlavha</Label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Loyiha nomi"
                />
              </div>

              <div>
                <Label>Status</Label>

                <Select
                  className="!bg-transparent ant-select-placeholder w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none transition-all h-10.5"
                  value={status}
                  onChange={(e) => setStatus(e)}
                  placeholder="Loyiha qanday statusda"
                  options={[
                    { value: "completed", label: "Completed" },
                    { value: "in_progress", label: "In Progress" },
                    { value: "pending", label: "Pending" },
                  ]}
                />
              </div>
              <div className="flex items-end gap-3 col-span-2 md:col-span-1">
                <div className="w-full">
                  <Label>Kategoriya</Label>
                  <CategoryDropdown onChange={(id) => setCategoryId(id)} />
                </div>
                <button type="button" onClick={() => setIsOpen(true)} title="Yangi kategoriya qo'shish">
                  <PlusCircle className="mb-2.5 text-stone-600 cursor-pointer" />
                </button>
              </div>
            </div>
          </div>

          {/* Facts */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border-muted)",
            }}
          >
            <SectionTitle title="Faktlar" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              <div>
                <Label>Yil</Label>
                <Input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="2024"
                />
              </div>
              <div>
                <Label>Maydon (m²)</Label>
                <Input
                  type="number"
                  value={areaM2}
                  onChange={(e) => setAreaM2(e.target.value)}
                  placeholder="220"
                />
              </div>
              <div>
                <Label>Byudjet ($)</Label>
                <Input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="150000"
                />
              </div>
              <div>
                <Label>Shahar</Label>
                <Input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Toshkent"
                />
              </div>
              <div>
                <Label>Mamlakat</Label>
                <Input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Uzbekistan"
                />
              </div>
            </div>
          </div>

          {/* Design */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border-muted)",
            }}
          >
            <SectionTitle title="Dizayn" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Stil</Label>
                <TagInput
                  tags={styles}
                  onChange={setStyles}
                  placeholder="Yozing va Enter bosing..."
                />
              </div>
              <div>
                <Label>Materiallar</Label>
                <TagInput
                  tags={materials}
                  onChange={setMaterials}
                  placeholder="Yozing va Enter bosing..."
                />
              </div>
              <div>
                <Label>Asosiy xususiyatlar</Label>
                <TagInput
                  tags={keyFeatures}
                  onChange={setKeyFeatures}
                  placeholder="Yozing va Enter bosing..."
                />
              </div>
              <div>
                <Label>Rang palitra</Label>
                <ColorPicker colors={palette} onChange={setPalette} />
              </div>
            </div>
          </div>

          {/* Localized Content */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border-muted)",
            }}
          >
            <SectionTitle
              title="Mazmun"
              subtitle="O'zbek va Rus tillarida to'ldiring"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* UZ */}
              <div className="space-y-4">
                <div
                  className="inline-flex items-center px-2.5 py-0.5 text-xs font-bold rounded tracking-widest uppercase"
                  style={{ background: "var(--surface)", color: "var(--text)" }}
                >
                  UZ
                </div>
                <div>
                  <Label>Qisqacha tavsif</Label>
                  <Textarea
                    value={uzExcerpt}
                    onChange={(e) => setUzExcerpt(e.target.value)}
                    placeholder="Loyiha haqida qisqacha..."
                  />
                </div>
                <div>
                  <Label>Muammo</Label>
                  <Textarea
                    value={uzChallenge}
                    onChange={(e) => setUzChallenge(e.target.value)}
                    placeholder="Qanday muammo hal qilindi..."
                  />
                </div>
                <div>
                  <Label>Yechim</Label>
                  <Textarea
                    value={uzSolution}
                    onChange={(e) => setUzSolution(e.target.value)}
                    placeholder="Qanday yechim topildi..."
                  />
                </div>
                <div>
                  <Label>Natija</Label>
                  <Textarea
                    value={uzResults}
                    onChange={(e) => setUzResults(e.target.value)}
                    placeholder="Qanday natijaga erishildi..."
                  />
                </div>
                <div
                  className="pl-3 border-l-2 space-y-3"
                  style={{ borderColor: "var(--border-muted)" }}
                >
                  <div>
                    <Label>Meta Title</Label>
                    <Input
                      value={uzMetaTitle}
                      onChange={(e) => setUzMetaTitle(e.target.value)}
                      placeholder="SEO sarlavha"
                    />
                  </div>
                  <div>
                    <Label>Meta Description</Label>
                    <Textarea
                      value={uzMetaDesc}
                      onChange={(e) => setUzMetaDesc(e.target.value)}
                      placeholder="SEO tavsif"
                    />
                  </div>
                </div>
              </div>

              {/* RU */}
              <div className="space-y-4">
                <div
                  className="inline-flex items-center px-2.5 py-0.5 text-xs font-bold rounded tracking-widest uppercase"
                  style={{ background: "var(--surface)", color: "var(--text)" }}
                >
                  RU
                </div>
                <div>
                  <Label>Краткое описание</Label>
                  <Textarea
                    value={ruExcerpt}
                    onChange={(e) => setRuExcerpt(e.target.value)}
                    placeholder="Кратко о проекте..."
                  />
                </div>
                <div>
                  <Label>Проблема</Label>
                  <Textarea
                    value={ruChallenge}
                    onChange={(e) => setRuChallenge(e.target.value)}
                    placeholder="Какая проблема была решена..."
                  />
                </div>
                <div>
                  <Label>Решение</Label>
                  <Textarea
                    value={ruSolution}
                    onChange={(e) => setRuSolution(e.target.value)}
                    placeholder="Какое решение было найдено..."
                  />
                </div>
                <div>
                  <Label>Результат</Label>
                  <Textarea
                    value={ruResults}
                    onChange={(e) => setRuResults(e.target.value)}
                    placeholder="Каких результатов достигли..."
                  />
                </div>
                <div
                  className="pl-3 border-l-2 space-y-3"
                  style={{ borderColor: "var(--border-muted)" }}
                >
                  <div>
                    <Label>Meta Title</Label>
                    <Input
                      value={ruMetaTitle}
                      onChange={(e) => setRuMetaTitle(e.target.value)}
                      placeholder="SEO заголовок"
                    />
                  </div>
                  <div>
                    <Label>Meta Description</Label>
                    <Textarea
                      value={ruMetaDesc}
                      onChange={(e) => setRuMetaDesc(e.target.value)}
                      placeholder="SEO описание"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border-muted)",
            }}
          >
            <SectionTitle title="Cover rasm" />
            <div className="grid grid-cols-2 gap-5">
              <ImageUpload
                label="Light versiya"
                preview={coverLightPreview}
                onChange={handleCoverLight}
              />
              <ImageUpload
                label="Dark versiya"
                preview={coverDarkPreview}
                onChange={handleCoverDark}
              />
              <div>
                <Label>Alt matn (UZ)</Label>
                <Input
                  value={coverAltUz}
                  onChange={(e) => setCoverAltUz(e.target.value)}
                  placeholder="Rasm tavsifi o'zbekcha"
                />
              </div>
              <div>
                <Label>Alt matn (RU)</Label>
                <Input
                  value={coverAltRu}
                  onChange={(e) => setCoverAltRu(e.target.value)}
                  placeholder="Описание изображения на русском"
                />
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border-muted)",
            }}
          >
            <SectionTitle title="Gallery" />
            <div className="space-y-5">
              {gallery.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-4 p-4 rounded-xl"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border-muted)",
                  }}
                >
                  <div className="aspect-video rounded-lg overflow-hidden bg-stone-200">
                    <img
                      src={item.preview}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 space-y-3">
                    <div>
                      <Label>Alt matn (UZ)</Label>
                      <Input
                        value={item.altUz}
                        onChange={(e) =>
                          handleGalleryAlt(index, "altUz", e.target.value)
                        }
                        placeholder="Rasm tavsifi o'zbekcha"
                      />
                    </div>
                    <div>
                      <Label>Alt matn (RU)</Label>
                      <Input
                        value={item.altRu}
                        onChange={(e) =>
                          handleGalleryAlt(index, "altRu", e.target.value)
                        }
                        placeholder="Описание на русском"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleGalleryRemove(index)}
                      className="text-xs text-red-400 hover:text-red-600 transition-colors"
                    >
                      O'chirish
                    </button>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={() => galleryRef.current?.click()}
                className="w-full py-4 border-2 border-dashed rounded-xl text-sm transition-all flex items-center justify-center gap-2"
                style={{
                  borderColor: "var(--border-muted)",
                  color: "var(--secondarytext)",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Rasm qo'shish
              </button>
              <input
                ref={galleryRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleGalleryAdd}
              />
            </div>
          </div>
        </div>
      </form>

      <CategoryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

    </div>
  );
}
