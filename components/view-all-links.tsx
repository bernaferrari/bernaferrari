"use client";

import Link from "next/link";
import posthog from "posthog-js";

export function ViewAllProjectsLink() {
  return (
    <Link
      href="/projects"
      onClick={() => posthog.capture("view_all_projects_clicked")}
      className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 rounded-full border border-transparent hover:border-purple-200 dark:hover:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200"
    >
      View all projects
      <svg
        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </Link>
  );
}

export function ViewAllResearchLink() {
  return (
    <a
      href="https://scholar.google.com/citations?user=sJaFHJIAAAAJ&hl=en"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => posthog.capture("view_all_research_clicked")}
      className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 rounded-full border border-transparent hover:border-purple-200 dark:hover:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200"
    >
      View all research
      <svg
        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </a>
  );
}
