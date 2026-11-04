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

/** One project per row: name, what it does, and a note on the right. */
export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="divide-y divide-border border-b border-border -mt-4">
      {projects.map((project) => (
        <li key={project.name}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog.capture("project_clicked", {
                project_title: project.name,
                project_url: project.url,
              })
            }
            className="group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-1 py-4 sm:grid-cols-[13rem_minmax(0,1fr)_auto]"
          >
            <span className="flex items-center gap-1.5 font-medium">
              {project.name}
              <Arrow className="text-faint opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
            </span>
            <span className="col-span-2 row-start-2 text-[15px] text-muted sm:col-span-1 sm:row-start-auto">
              {project.summary}
            </span>
            <span className="col-start-2 row-start-1 font-mono text-xs text-faint tabular-nums sm:col-start-auto sm:row-start-auto">
              {project.note}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ResearchList({ publications }: { publications: Publication[] }) {
  return (
    <ul className="divide-y divide-border border-b border-border -mt-4">
      {publications.map((paper) => (
        <li key={paper.title}>
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
            className="group grid gap-x-6 gap-y-1 py-4 sm:grid-cols-[minmax(0,1fr)_auto]"
          >
            <span className="font-medium leading-snug transition-colors group-hover:text-foreground">
              {paper.title}
            </span>
            <span className="font-mono text-xs text-faint tabular-nums sm:pt-1 sm:text-right">
              {paper.citations} citations
            </span>
            <span className="text-sm text-muted">
              {paper.venue}, {paper.year}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
