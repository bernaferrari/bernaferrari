import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-card";
// import { BlogGrid } from "@/components/blog-card";
import { PublicationGrid } from "@/components/publication-card";
import { featuredProjects } from "@/lib/projects";
// import { getPosts } from "@/lib/posts";
import { publications } from "@/lib/publications";
// import { NewsletterSignup } from "@/components/newsletter-signup";
import Link from "next/link";

function ViewAllLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 rounded-full border border-transparent hover:border-purple-200 dark:hover:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200"
    >
      {children}
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

function ViewAllExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 rounded-full border border-transparent hover:border-purple-200 dark:hover:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200"
    >
      {children}
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

export default function HomePage() {
  return (
    <div className="stagger-children">
      <Hero name="Bernardo Ferrari">
        <p>
          I build open source tools at the intersection of design and
          engineering.
        </p>
      </Hero>

      {/* Blog Section (paused - bring back soon) */}
      {/* <BlogGrid posts={getPosts()} title="Latest Posts" />

      <div className="flex justify-center pt-2 pb-4">
        <ViewAllLink href="/blog">View all posts</ViewAllLink>
      </div> */}

      {/* Featured Projects */}
      <ProjectGrid
        projects={featuredProjects.slice(0, 4)}
        title="Featured Projects"
      />

      <div className="flex justify-center pt-2 pb-4">
        <ViewAllLink href="/projects">View all projects</ViewAllLink>
      </div>

      {/* Publications */}
      <PublicationGrid publications={publications} title="Research" />

      <div className="flex justify-center pt-2 pb-4">
        <ViewAllExternalLink href="https://scholar.google.com/citations?user=sJaFHJIAAAAJ&hl=en">
          View all research
        </ViewAllExternalLink>
      </div>

      {/* Newsletter (paused - bring back soon) */}
      {/* <NewsletterSignup /> */}
    </div>
  );
}
