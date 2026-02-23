"use client";
import { getBySlug } from "@/api/projects.api";
import { ProjectDTO } from "@/types/projects.type";
import { useEffect, useState } from "react";
import ProjectViewMode from "../components/ProjectViewMode";

interface Props {
  params: Promise<{ slug: string }>;
}
function ProjectDetailPage({ params }: Props) {
  const [project, setProject] = useState<ProjectDTO | null>(null);
  useEffect(() => {
    params.then(({ slug }) => {
      getBySlug(slug).then((res) => setProject(res.data));
    });
  }, []);
  const [isEditing, setIsEditing] = useState(false);
  if (!project) return <div>Yuklanmoqda...</div>;
  return (
    <div className="h-screen overflow-y-auto custom-scroll">
      {!isEditing && (
        <ProjectViewMode
          project={project}
          onEdit={() => setIsEditing(true)} // ← Edit bosilsa isEditing true bo'ladi
        />
      )}

      {isEditing && (
        // keyingi darsda shu yerga ProjectEditMode keladi
        <div>Edit mode</div>
      )}
    </div>
  );
}

export default ProjectDetailPage;
