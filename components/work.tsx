"use client";

import Image from "next/image";
import posthog from "posthog-js";
import type { Feature, Project } from "@/lib/work";
import type { Publication } from "@/lib/publications";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={`size-3.5 shrink-0 ${className}`}
    >
      <path d="M5 11 11 5M6 5h5v5" />
    </svg>
  );
}

export function SectionHeading({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex items-baseline justify-between gap-6 border-t border-border pt-6 sm:mb-10">
      <h2 id={id} className="scroll-mt-24 text-sm font-medium text-foreground">
        {title}
      </h2>
      {children}
    </div>
  );
}

/** A big project: its picture, then the name, what it does, and a few facts. */
export function FeatureCard({ feature, priority }: { feature: Feature; priority?: boolean }) {
  return (
    <a
      href={feature.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        posthog.capture("project_clicked", { project_title: feature.name, project_url: feature.url })
      }
      className="group block"
    >
      <div
        className="relative aspect-[40/21] overflow-hidden rounded-xl border border-border bg-surface transition-[border-color] duration-200 group-hover:border-border-strong"
        style={feature.image.background ? { background: feature.image.background } : undefined}
      >
        <Image
          src={feature.image.src}
          alt={feature.image.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 560px"
          className={feature.image.contain ? "object-contain" : "object-cover"}
        />
      </div>
      <div className="mt-5 flex items-center gap-1.5">
        <h3 className="text-lg font-medium tracking-tight">{feature.name}</h3>
        <Arrow className="text-faint transition-[transform,color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
      </div>
      <p className="mt-1.5 max-w-[34rem] text-[15px] leading-relaxed text-muted">
        {feature.summary}
      </p>
      <p className="mt-3 font-mono text-xs text-faint">{feature.meta.join("  ·  ")}</p>
    </a>
  );
}

function track(name: string, url: string) {
  posthog.capture("project_clicked", { project_title: name, project_url: url });
}

/** A smaller project with a picture: three to a row on wide screens. */
export function ProjectTiles({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li key={project.name}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track(project.name, project.url)}
            className="group block"
          >
            {project.image ? (
              <div
                className="relative aspect-[40/21] overflow-hidden rounded-lg border border-border bg-surface transition-[border-color] duration-200 group-hover:border-border-strong"
                style={
                  project.image.background ? { background: project.image.background } : undefined
                }
              >
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                  unoptimized={project.image.src.endsWith(".webp")}
                  className={project.image.contain ? "object-contain px-4" : "object-cover"}
                />
              </div>
            ) : null}
            <div className="mt-4 flex items-baseline justify-between gap-3">
              <h3 className="flex items-center gap-1.5 font-medium">
                {project.name}
                <Arrow className="text-faint transition-[transform,color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </h3>
              <span className="shrink-0 text-xs text-faint tabular-nums">{project.note}</span>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-muted">{project.summary}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** A project without a picture: a small card with its name, note and one line. */
export function ProjectCards({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li key={project.name} className="flex">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track(project.name, project.url)}
            className="group flex w-full flex-col rounded-lg border border-border p-5 transition-[border-color,background-color] duration-200 hover:border-border-strong hover:bg-surface"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="flex items-center gap-1.5 font-medium">
                {project.name}
                <Arrow className="text-faint transition-[transform,color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </h3>
              <span className="shrink-0 text-xs text-faint tabular-nums">{project.note}</span>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.summary}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** A paper: where and when on top, the title, then how often it is cited. */
export function PaperCards({ publications }: { publications: Publication[] }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {publications.map((paper) => (
        <li key={paper.title} className="flex">
          <a
            href={paper.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog.capture("publication_clicked", {
                publication_title: paper.title,
                publication_url: paper.url,
              })
            }
            className="group flex w-full flex-col justify-between gap-8 rounded-lg border border-border p-6 transition-[border-color,background-color] duration-200 hover:border-border-strong hover:bg-surface"
          >
            <div>
              <p className="text-sm text-faint">
                {paper.year} · {paper.venue}
              </p>
              <h3 className="mt-3 text-lg leading-snug font-medium tracking-tight">{paper.title}</h3>
            </div>
            <p className="flex items-center gap-1.5 text-sm text-muted">
              Cited by {paper.citations}
              <Arrow className="text-faint transition-[transform,color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
}
