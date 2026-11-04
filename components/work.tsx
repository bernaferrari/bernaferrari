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

/** The real R code behind rport's plot, beside the plot it drew. */
const rportCode = [
  ["# A curve hiding in the noise", "comment"],
  ["set.seed(42)", ""],
  ["x <- seq(0, 10, length.out = 80)", ""],
  ["y <- sin(x) + rnorm(80, sd = 0.22)", ""],
  ["fit <- loess(y ~ x, span = 0.3)", ""],
  ["", ""],
  ["plot(x, y, pch = 16, cex = 0.7)", ""],
  ['lines(x, predict(fit), col = "#cc5636")', ""],
] as const;

function RportPreview() {
  return (
    <div className="absolute inset-x-[6%] top-[9%] bottom-0 grid grid-cols-[1.3fr_1fr] overflow-hidden rounded-t-lg border border-b-0 border-black/10 bg-[#1b1f1e] shadow-[0_12px_40px_-16px_rgba(0,0,0,0.45)] dark:border-white/10">
      <div
        aria-hidden
        className="overflow-hidden border-r border-white/10 px-[5%] py-[6%] font-mono text-[1.6cqw] leading-[1.75] whitespace-pre text-[#d6dcd8]"
      >
        <div>
          {rportCode.map(([line, kind], i) => (
            <span key={i} className={`block ${kind === "comment" ? "text-[#7c8a83]" : ""}`}>
              {line || " "}
            </span>
          ))}
        </div>
      </div>
      <div className="relative">
        <Image
          src="/work/rport-dark.png"
          alt="The smoothed curve that code draws, plotted by rport"
          fill
          sizes="300px"
          className="object-contain p-[4%]"
        />
      </div>
    </div>
  );
}

/**
 * Every big project gets the same frame: a quiet stage with the real product set into it,
 * coming in from the top and running off the bottom edge.
 */
function FeatureFrame({ feature, priority }: { feature: Feature; priority?: boolean }) {
  const { image } = feature;
  return (
    <div className="@container relative aspect-[40/21] overflow-hidden rounded-xl border border-border bg-surface transition-[border-color] duration-200 group-hover:border-border-strong">
      {feature.preview === "rport" ? (
        <RportPreview />
      ) : (
        <div className="absolute inset-x-[6%] top-[9%] transition-transform duration-300 ease-out group-hover:-translate-y-1">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width ?? 1600}
            height={image.height ?? 1000}
            priority={priority}
            sizes="(max-width: 768px) 90vw, 500px"
            className="h-auto w-full rounded-t-lg border border-black/10 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.45)] dark:border-white/10"
          />
        </div>
      )}
    </div>
  );
}

/** A big project: its framed product, then the name, what it does, and a few facts. */
export function FeatureCard({ feature, priority }: { feature: Feature; priority?: boolean }) {
  return (
    <a
      href={feature.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track(feature.name, feature.url)}
      className="group block"
    >
      <FeatureFrame feature={feature} priority={priority} />
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

/** The app's icon, or its initials on a quiet tile when it has none. */
function ProjectIcon({ project }: { project: Project }) {
  const tile = "relative size-10 shrink-0 overflow-hidden rounded-[10px] border border-border";
  if (project.icon) {
    return (
      <span className={`${tile} ${project.icon.padded ? "bg-white" : "bg-surface"}`}>
        <Image
          src={project.icon.src}
          alt=""
          fill
          sizes="40px"
          className={project.icon.padded ? "object-contain p-0.5" : "object-cover"}
        />
      </span>
    );
  }
  const initials = project.name
    .split(/[\s-]+|(?=[A-Z][a-z])/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
  return (
    <span
      aria-hidden
      className={`${tile} inline-flex items-center justify-center bg-surface font-mono text-xs text-muted`}
    >
      {initials}
    </span>
  );
}

/** A project without a picture: its icon, name, note and one line. */
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
            className="group flex w-full gap-4 rounded-lg border border-border p-5 transition-[border-color,background-color] duration-200 hover:border-border-strong hover:bg-surface"
          >
            <ProjectIcon project={project} />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="flex min-w-0 items-center gap-1.5 font-medium">
                  <span className="truncate">{project.name}</span>
                  <Arrow className="text-faint transition-[transform,color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </h3>
                <span className="shrink-0 text-xs text-faint tabular-nums">{project.note}</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted">{project.summary}</p>
            </div>
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
