"use client";
import { createService } from "@/api/services/service.api";
import BtnLoader from "@/components/BtnLoader";
import PageTitle from "@/components/PageTitle";
import { useToast } from "@/Providers/MessageProvider";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type Lang = "uz" | "ru";
type ArrayField = "features" | "steps";

interface LangData {
  title: string;
  desc: string;
  duration: string;
  features: string[];
  steps: string[];
}

interface FormState {
  uz: LangData;
  ru: LangData;
}


export default function CreateServiceForm() {
  const [icon, setIcon] = useState<File | null>(null);
  const [form, setForm] = useState<FormState>({
    uz: { title: "", desc: "", duration: "", features: [""], steps: [""] },
    ru: { title: "", desc: "", duration: "", features: [""], steps: [""] },
  });

  const updateField = (lang: Lang, field: keyof Omit<LangData, ArrayField>, value: string) =>
    setForm((p) => ({ ...p, [lang]: { ...p[lang], [field]: value } }));

  const updateArrayItem = (lang: Lang, field: ArrayField, i: number, value: string) =>
    setForm((p) => {
      const arr = [...p[lang][field]];
      arr[i] = value;
      return { ...p, [lang]: { ...p[lang], [field]: arr } };
    });

  const addArrayItemBoth = (field: ArrayField) =>
    setForm((p) => ({
      uz: { ...p.uz, [field]: [...p.uz[field], ""] },
      ru: { ...p.ru, [field]: [...p.ru[field], ""] },
    }));

  const removeArrayItemBoth = (field: ArrayField, i: number) =>
    setForm((p) => ({
      uz: { ...p.uz, [field]: p.uz[field].filter((_, idx) => idx !== i) },
      ru: { ...p.ru, [field]: p.ru[field].filter((_, idx) => idx !== i) },
    }));

  const { success, error } = useToast()
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData();
    if (icon) fd.append("service_icon", icon);
    fd.append("localeData", JSON.stringify({
      uz: {
        title: form.uz.title,
        desc: form.uz.desc,
        duration: form.uz.duration,
        features: form.uz.features,
        steps: form.uz.steps
      },
      ru: {
        title: form.ru.title,
        desc: form.ru.desc,
        duration: form.ru.duration,
        features: form.ru.features,
        steps: form.ru.steps
      }
    }))

    try {
      setLoading(true)
      const res = await createService(fd);
      if (res.success) {
        success("Xizmat muvaffaqiyatli yaratildi");
      }
      router.push("/dashboard/services");
      console.log(res);
    } catch (err) {
      error("Xizmat yaratishda xatolik yuz berdi");
      console.log(err);

    } finally {
      setLoading(false);
    }
  };

  const inp = "w-full border border-gray-700 bg-gray-900 rounded px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500";



  return (
    <div className="">
      <div className="flex justify-between items-center border-b border-neutral-700 pb-2 mb-5 pt-5 sticky top-0 z-50 bg-(--bg)">
        <PageTitle title="Loyihalar" />
        <button
          form="service-form"
          type="submit"
          className="bg-(--surface) cursor-pointer py-1 px-2 rounded-md"
        >
          {loading ? <BtnLoader /> : "Yaratish"}
        </button>
      </div>

      <div className="text-white pt-4">
        <form onSubmit={handleSubmit} id="service-form">
          <div className="max-w-3xl mx-auto">
            {/* Icon */}
            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-1">Ikonka</label>
              <label className="flex items-center gap-4 cursor-pointer group w-fit">
                <div className="w-16 h-16 rounded-xl border-2 border-dashed border-gray-700 group-hover:border-blue-500 flex items-center justify-center transition-all bg-gray-900">
                  {icon ? (
                    <img src={URL.createObjectURL(icon)} alt="icon" className="w-full h-full object-cover rounded-xl" />
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="1.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="text-sm text-white font-medium">{icon ? icon.name : "Rasm tanlang"}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{icon ? `${(icon.size / 1024).toFixed(1)} KB` : "PNG, JPG, SVG"}</p>
                </div>
                <input type="file" accept="image/*" onChange={(e) => setIcon(e.target.files?.[0] ?? null)} className="hidden" />
              </label>
            </div>

            {/* Title */}
            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-1">Sarlavha</label>
              <div className="grid grid-cols-2 gap-3">
                <input value={form.uz.title} onChange={(e) => updateField("uz", "title", e.target.value)} placeholder="UZ" className={inp} />
                <input value={form.ru.title} onChange={(e) => updateField("ru", "title", e.target.value)} placeholder="RU" className={inp} />
              </div>
            </div>

            {/* Desc */}
            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-1">Tavsif</label>
              <div className="grid grid-cols-2 gap-3">
                <textarea value={form.uz.desc} onChange={(e) => updateField("uz", "desc", e.target.value)} placeholder="UZ" rows={3} className={`${inp} resize-none`} />
                <textarea value={form.ru.desc} onChange={(e) => updateField("ru", "desc", e.target.value)} placeholder="RU" rows={3} className={`${inp} resize-none`} />
              </div>
            </div>

            {/* Duration */}
            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-1">Muddat: 5-7</label>
              <div className="grid grid-cols-2 gap-3">
                <input value={form.uz.duration} onChange={(e) => updateField("uz", "duration", e.target.value)} placeholder="UZ" className={inp} />
                <input value={form.ru.duration} onChange={(e) => updateField("ru", "duration", e.target.value)} placeholder="RU" className={inp} />
              </div>
            </div>

            {/* Features */}
            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-1">Xizmat ichiga nimalar kiradi</label>
              <div className="space-y-2">
                {form.uz.features.map((_, i) => (
                  <div key={i} className="grid grid-cols-2 gap-3 items-center">
                    <input value={form.uz.features[i]} onChange={(e) => updateArrayItem("uz", "features", i, e.target.value)} placeholder={`UZ ${i + 1}`} className={inp} />
                    <div className="flex gap-2">
                      <input value={form.ru.features[i]} onChange={(e) => updateArrayItem("ru", "features", i, e.target.value)} placeholder={`RU ${i + 1}`} className={inp} />
                      {form.uz.features.length > 1 && (
                        <button onClick={() => removeArrayItemBoth("features", i)} className="px-2 text-red-400 hover:text-red-300 cursor-pointer">✕</button>
                      )}
                    </div>
                  </div>
                ))}
                <button onClick={() => addArrayItemBoth("features")} className="text-sm text-blue-400 hover:text-blue-300 cursor-pointer">+ Qo'shish</button>
              </div>
            </div>

            {/* Steps */}
            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-1">Xizmat qanday qadamlarda o'tadi</label>
              <div className="space-y-2">
                {form.uz.steps.map((_, i) => (
                  <div key={i} className="grid grid-cols-2 gap-3 items-center">
                    <input value={form.uz.steps[i]} onChange={(e) => updateArrayItem("uz", "steps", i, e.target.value)} placeholder={`UZ ${i + 1}`} className={inp} />
                    <div className="flex gap-2">
                      <input value={form.ru.steps[i]} onChange={(e) => updateArrayItem("ru", "steps", i, e.target.value)} placeholder={`RU ${i + 1}`} className={inp} />
                      {form.uz.steps.length > 1 && (
                        <button onClick={() => removeArrayItemBoth("steps", i)} className="px-2 text-red-400 hover:text-red-300 cursor-pointer">✕</button>
                      )}
                    </div>
                  </div>
                ))}
                <button onClick={() => addArrayItemBoth("steps")} className="text-sm text-blue-400 hover:text-blue-300 cursor-pointer">+ Qo'shish</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}