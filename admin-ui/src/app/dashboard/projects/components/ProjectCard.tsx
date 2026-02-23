import Link from "next/link";

type ProjectData = {
  title: string;
  slug: string;
  image: string;
};

function ProjectCard({ title, slug, image }: ProjectData) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`relative w-[calc(50%-20px)] h-80 rounded-2xl border border-neutral-400 bg-no-repeat bg-cover bg-center`}
    >
      <div className="absolute inset-0 backdrop-blur-xs rounded-2xl z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center gap-5 h-full">
        <p className="text-center text-white font-medium text-2xl">{title}</p>
        <Link
          href={`/dashboard/projects/${slug}`}
          className="bg-(--button-bg) border border-neutral-200 hover:bg-(--button-hover) px-6 py-2 rounded-md cursor-pointer"
        >
          Batafsil
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
