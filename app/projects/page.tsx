import { Metadata } from "next";
import { ProjectGrid } from "@/components/project-card";
import { featuredProjects, additionalProjects } from "@/lib/projects";
import { GitHubProfileLink } from "@/components/github-profile-link";

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
        <GitHubProfileLink />
      </div>
    </div>
  );
}
