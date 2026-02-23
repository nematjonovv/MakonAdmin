"use client";
import PageTitle from "@/components/PageTitle";
import ProjectCard from "./components/ProjectCard";
import { useEffect, useState } from "react";
import { getProjects } from "@/api/projects.api";
import { useToast } from "@/Providers/MessageProvider";
import { ProjectDTO } from "@/types/projects.type";
import Link from "next/link";

function Projects() {
  const [projects, setProjects] = useState<ProjectDTO[] | null>(null);
  const { error, success } = useToast();
  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res.data))
      .catch((err) => error(err.message));
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center border-b border-neutral-700 pb-2 mb-5 pt-5 sticky top-0 z-50 bg-(--bg)">
        <PageTitle title="Loyihalar" />
        <Link
          href={"/dashboard/projects/create"}
          // onClick={() => setOpen(true)}
          className="bg-(--surface) cursor-pointer py-1 px-2 rounded-md"
        >
          Yangi loyiha qo'shish
        </Link>
      </div>

      <div className="flex flex-wrap gap-5 w-full">
        {projects && projects.length > 0 ? (
          projects.map((e) => (
            <ProjectCard key={e.id} title={e.title} slug={e.slug} image={e.coverImage.image_dark} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center w-full py-20 text-stone-400">
            <svg
              className="w-16 h-16 mb-4 text-stone-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 7h18M3 12h18M3 17h18"
              />
            </svg>

            <p className="text-lg font-medium">Loyihalar mavjud emas</p>
            <p className="text-sm mt-1">
              Hozircha hech qanday loyiha qo'shilmagan
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
