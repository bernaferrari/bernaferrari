import { Metadata } from "next";
import { FeatureCard, ProjectCards, ProjectTiles, SectionHeading } from "@/components/work";
import { features, highlights, links, others } from "@/lib/work";

export const metadata: Metadata = {
  title: "Projects",
  description: "Open-source apps, tools and libraries by Bernardo Ferrari.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <header className="rise pt-16 pb-16 sm:pt-24 sm:pb-20">
        <h1 className="text-4xl font-medium tracking-[-0.03em] sm:text-5xl">Projects</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Apps, tools and libraries, all open source. Most started as something I needed myself.
        </p>
      </header>

      <section aria-labelledby="selected" className="pb-20 sm:pb-24">
        <SectionHeading id="selected" title="Selected" />
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard key={feature.name} feature={feature} priority={index < 2} />
          ))}
        </div>
      </section>

      <section aria-labelledby="all" className="pb-8">
        <SectionHeading id="more" title="More" />
        <div className="pb-20 sm:pb-24">
          <ProjectTiles projects={highlights} />
        </div>
        <SectionHeading id="all" title="Everything else">
          <a
            href={`${links.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            All repositories on GitHub
          </a>
        </SectionHeading>
        <ProjectCards projects={others} />
      </section>
    </div>
  );
}
