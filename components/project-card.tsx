"use client";

import { motion } from "framer-motion";
import posthog from "posthog-js";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const handleClick = () => {
    posthog.capture("project_clicked", {
      project_title: project.title,
      project_url: project.url,
      project_tech: project.tech,
      project_stars: project.stars,
    });
  };

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group block p-5 rounded-xl glass card-hover cursor-pointer"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            {project.emoji && <span className="text-xl">{project.emoji}</span>}
            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors truncate">
              {project.title}
            </h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-zinc-400 line-clamp-2 mb-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {project.stars && (
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-zinc-500 shrink-0">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {project.stars}
          </div>
        )}
      </div>
    </motion.a>
  );
}

interface ProjectGridProps {
  projects: Project[];
  title?: string;
}

export function ProjectGrid({
  projects,
  title = "Featured Projects",
}: ProjectGridProps) {
  return (
    <section className="py-8">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white"
      >
        {title}
      </motion.h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
