"use client";

import { deleteProject } from "@/api/projects.api";
import { useToast } from "@/Providers/MessageProvider";
import { ProjectDTO } from "@/types/projects.type";
import { Button, Popconfirm } from "antd";
import { ChevronLeft, Delete, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  project: ProjectDTO;
  onEdit: () => void;
}

function Badge({ text }: { text: string }) {
  return (
    <span className="px-3 py-1 text-xs font-medium tracking-widest uppercase border border-stone-300 text-white rounded-full">
      {text}
    </span>
  );
}

function ColorSwatch({ hex }: { hex: string }) {
  return (
    <div
      className="w-8 h-8 rounded-full border border-stone-200 shadow-sm"
      style={{ backgroundColor: hex }}
      title={hex}
    />
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-400">
        {title}
      </span>
      <div className="flex-1 h-px bg-stone-100" />
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs tracking-widest uppercase text-white font-semibold">
        {label}
      </span>
      <span className="text-sm font-sans text-white/80 font-medium">
        {value}
      </span>
    </div>
  );
}

export default function ProjectViewMode({ project, onEdit }: Props) {
  const statusColors: Record<string, string> = {
    completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
    in_progress: "bg-amber-50 text-amber-700 border-amber-200",
    pending: "bg-stone-50 text-stone-500 border-stone-200",
  };
  
  const statusLabels: Record<string, string> = {
    completed: "Completed",
    in_progress: "In Progress",
    pending: "Pending",
  };
  const rotuer = useRouter();
  const { error, success } = useToast();
  const handleDelete = async () => {
    try {
      const res = await deleteProject(project.id);
      success(res.message);

      setTimeout(() => {
        rotuer.push("/dashboard/projects");
      }, 1500);
    } catch (err: any) {
      error(err?.message);
    }
  };

  return (
    <div className="max-h-screen font-grotesk">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-(--surface) backdrop-blur border-b border-stone-100 px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={"/dashboard/projects"} className="cursor-pointer">
            <ChevronLeft />
          </Link>
          <h1 className="text-lg font-semibold text-white tracking-tight">
            {project.title}
          </h1>
          <span
            className={`text-xs px-3 py-1 rounded-full border font-medium ${statusColors[project.status]}`}
          >
            {statusLabels[project.status]}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <button
            onClick={onEdit}
            className="flex items-center gap-2 px-5 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-700 transition-colors cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Tahrirlash
          </button>

          <Popconfirm
            title="Loyihani o'chirish"
            description={`Haqiqatan ${project.title} loyihasizni o'chirishni xoxlaysizmi?`}
            okText="Ha"
            cancelText="Yo'q"
            className=""
            onConfirm={handleDelete}
          >
            <button className="flex items-center gap-2 px-5 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-red-500 transition-colors cursor-pointer">
              <Trash size={16} />
              O'chirish
            </button>
          </Popconfirm>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-10 space-y-8">
        {/* Cover Images */}
        <div>
          <SectionTitle title="Cover Rasmlari" />
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-xs text-stone-400 uppercase tracking-widest">
                Light
              </span>
              <div className="aspect-video rounded-xl overflow-hidden border border-stone-200 bg-stone-100">
                <img
                  src={project.coverImage.image_light}
                  alt={
                    typeof project.coverImage.image_alt === "string"
                      ? project.coverImage.image_alt
                      : project.coverImage.image_alt.uz
                  }
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-xs text-stone-400 uppercase tracking-widest">
                Dark
              </span>
              <div className="aspect-video rounded-xl overflow-hidden border border-stone-200 bg-stone-800">
                <img
                  src={project.coverImage.image_dark}
                  alt={
                    typeof project.coverImage.image_alt === "string"
                      ? project.coverImage.image_alt
                      : project.coverImage.image_alt.ru
                  }
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <InfoRow
              label="Alt (UZ)"
              value={
                typeof project.coverImage.image_alt === "string"
                  ? project.coverImage.image_alt
                  : project.coverImage.image_alt.uz
              }
            />
            <InfoRow
              label="Alt (RU)"
              value={
                typeof project.coverImage.image_alt === "string"
                  ? project.coverImage.image_alt
                  : project.coverImage.image_alt.ru
              }
            />
          </div>
        </div>

        {/* Localized Content */}
        <div className="bg-(--surface) rounded-2xl border border-stone-100 p-6">
          <SectionTitle title="Loyiha malumotlari" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-5">
            <InfoRow label="Title" value={project.title} />
            <InfoRow label="Category" value={project.category.title} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(["uz", "ru"] as const).map((lang) => (
              <div key={lang} className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold tracking-widest uppercase text-white bg-stone-800 px-2 py-0.5 rounded">
                    {lang.toUpperCase()}
                  </span>
                </div>
                <InfoRow
                  label="Excerpt (qisqacha)"
                  value={project.localizedContent[lang].excerpt}
                />
                <InfoRow
                  label="Muammo"
                  value={project.localizedContent[lang].challenge}
                />
                <InfoRow
                  label="Yechim"
                  value={project.localizedContent[lang].solution}
                />
                <InfoRow
                  label="Natija"
                  value={project.localizedContent[lang].results}
                />
                <div className="pl-3 border-l-2 border-stone-100 space-y-3">
                  <InfoRow
                    label="Meta Title"
                    value={project.localizedContent[lang].seo.metaTitle}
                  />
                  <InfoRow
                    label="Meta Description"
                    value={project.localizedContent[lang].seo.metaDescription}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facts */}
        <div className="bg-(--surface) rounded-2xl border border-stone-100 p-6">
          <SectionTitle title="Faktlar" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <InfoRow label="Year" value={project.facts.year} />
            <InfoRow label="Area" value={`${project.facts.areaM2} m²`} />
            <InfoRow
              label="Budget"
              value={`$${project.facts.budget?.toLocaleString()}`}
            />
            <InfoRow
              label="Location"
              value={`${project.facts.location?.city}, ${project.facts.location?.country}`}
            />
          </div>
        </div>

        {/* Design */}
        <div className="bg-(--surface) rounded-2xl border border-stone-100 p-6">
          <SectionTitle title="Dizayn" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div>
                <span className="text-xs tracking-widest uppercase text-white font-medium block mb-2">
                  Styles
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.design.style.map((s) => (
                    <Badge key={s} text={s} />
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs tracking-widest uppercase text-white font-medium block mb-2">
                  Materials
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.design.materials.map((m) => (
                    <Badge key={m} text={m} />
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <div>
                <span className="text-xs tracking-widest uppercase text-white font-medium block mb-2">
                  Color Palette
                </span>
                <div className="flex gap-3 items-center">
                  {project.design.palette.map((hex) => (
                    <div key={hex} className="flex flex-col items-center gap-1">
                      <ColorSwatch hex={hex} />
                      <span className="text-xs text-white">{hex}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs tracking-widest uppercase text-white font-medium block mb-2">
                  Key Features
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.design.keyFeatures.map((f) => (
                    <Badge key={f} text={f} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <SectionTitle title={`Galereya (${project.gallery.length} rasm)`} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.gallery.map((item) => (
              <div key={item.id} className="space-y-2">
                <div className="aspect-video rounded-xl overflow-hidden border border-stone-200 bg-stone-100">
                  <img
                    src={item.image}
                    alt={
                      typeof item.image_alt === "string"
                        ? item.image_alt
                        : item.image_alt.uz
                    }
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <InfoRow
                    label="Alt UZ"
                    value={
                      typeof item.image_alt === "string"
                        ? item.image_alt || "—"
                        : item.image_alt.uz || "—"
                    }
                  />
                  <InfoRow
                    label="Alt RU"
                    value={
                      typeof item.image_alt === "string"
                        ? item.image_alt || "—"
                        : item.image_alt.ru || "—"
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
