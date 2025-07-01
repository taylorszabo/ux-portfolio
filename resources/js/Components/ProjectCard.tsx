// Components/ProjectCard.tsx

import {Link} from "@inertiajs/react";

export interface Project {
  id: number;
  title: string;
  slug: string;
  cover_image: string;
  tags: string[];
  excerpt: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group rounded-2xl overflow-hidden bg-white dark:bg-brand hover:shadow-xl transition"
    >
      <img
        src={project.cover_image}
        alt={project.title}
        className="w-full aspect-video object-cover group-hover:scale-105 transition duration-300"
      />
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
        <p className="text-sm opacity-70 mb-2">{project.excerpt}</p>
        <ul className="flex gap-2 text-xs opacity-60">
          {project.tags?.map((t) => (
            <li key={t}>#{t}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
