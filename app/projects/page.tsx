import { Metadata } from "next";
import { ProjectGrid } from "@/components/project-card";
import { featuredProjects, additionalProjects } from "@/lib/projects";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Open source projects and tools by Bernardo Ferrari",
};

export default function ProjectsPage() {
  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold gradient-text mb-4">Projects</h1>
        <p className="text-gray-600 dark:text-zinc-400 max-w-xl">
          A collection of open source projects, tools, and experiments. Each one
          solves a different problem – you won&apos;t find two that look or work
          the same.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { label: "Open Source Projects", value: "38+" },
          { label: "GitHub Stars", value: "8k+" },
          { label: "Years Building", value: "10+" },
        ].map((stat) => (
          <div key={stat.label} className="p-4 rounded-xl glass text-center">
            <div className="text-2xl font-bold gradient-text">{stat.value}</div>
            <div className="text-xs text-gray-500 dark:text-zinc-500 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Highlighted Projects */}
      <ProjectGrid projects={featuredProjects} title="Featured" />

      {/* More Projects */}
      <div className="mt-8">
        <ProjectGrid projects={additionalProjects} title="More Projects" />
      </div>

      {/* CTA */}
      <div className="mt-12 p-6 rounded-xl glass text-center">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
          See all projects on GitHub
        </h3>
        <p className="text-sm text-gray-500 dark:text-zinc-500 mb-4">
          Browse all 38+ repositories and contributions
        </p>
        <a
          href="https://github.com/bernaferrari?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          View GitHub Profile
        </a>
      </div>
    </div>
  );
}
