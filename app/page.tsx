import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-card";
// import { BlogGrid } from "@/components/blog-card";
import { PublicationGrid } from "@/components/publication-card";
import { featuredProjects } from "@/lib/projects";
// import { getPosts } from "@/lib/posts";
import { publications } from "@/lib/publications";
// import { NewsletterSignup } from "@/components/newsletter-signup";
import { ViewAllProjectsLink, ViewAllResearchLink } from "@/components/view-all-links";

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
        <ViewAllProjectsLink />
      </div>

      {/* Publications */}
      <PublicationGrid publications={publications} title="Research" />

      <div className="flex justify-center pt-2 pb-4">
        <ViewAllResearchLink />
      </div>

      {/* Newsletter (paused - bring back soon) */}
      {/* <NewsletterSignup /> */}
    </div>
  );
}
