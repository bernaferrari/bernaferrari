import Link from "next/link";
import { FeatureCard, PaperCards, ProjectTiles, SectionHeading, Arrow } from "@/components/work";
import { HeroStrip, HeroWork } from "@/components/hero-work";
import { features, highlights, links } from "@/lib/work";
import { publications } from "@/lib/publications";

const proof = [
  { value: "8.8k", label: "GitHub stars on my open-source projects" },
  { value: "WWDC20", label: "Swift Student Challenge winner" },
  { value: "4 papers", label: "on human-computer interaction" },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Who, what, and why believe it, with the work itself in view: all on the first screen. */}
      <section className="pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-14">
          <div className="rise">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github.com/bernaferrari.png"
                alt=""
                width={40}
                height={40}
                className="size-10 rounded-full border border-border bg-surface"
              />
              <p className="text-sm text-muted">
                <span className="font-medium text-foreground">Bernardo Ferrari</span> · Brazil
              </p>
            </div>

            <h1 className="mt-8 text-[2.5rem] leading-[1.08] font-medium tracking-[-0.03em] sm:text-6xl lg:text-[4rem]">
              I make apps, and the tools to build them.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              My Figma plugin turns designs into code for over 2 million people. I also make apps
              for Android, iOS, Mac and the web, and I care how they look as much as how they work.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${links.email}`}
                className="inline-flex h-10 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity duration-150 hover:opacity-85"
              >
                Get in touch
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border px-5 text-sm font-medium transition-colors duration-150 hover:border-border-strong"
              >
                GitHub
                <Arrow className="text-faint" />
              </a>
            </div>
          </div>

          <HeroWork />
        </div>

        <HeroStrip />

        <dl
          className="rise mt-10 grid grid-cols-1 gap-6 border-t border-border pt-6 sm:grid-cols-3 lg:mt-20"
          style={{ animationDelay: "120ms" }}
        >
          {proof.map((item) => (
            <div key={item.label}>
              <dt className="sr-only">{item.label}</dt>
              <dd className="text-2xl font-medium tracking-tight">{item.value}</dd>
              <dd className="mt-1 text-sm text-muted">{item.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="work" className="pb-20 sm:pb-28">
        <SectionHeading id="work" title="Selected work" />
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard key={feature.name} feature={feature} priority={index < 2} />
          ))}
        </div>
      </section>

      <section aria-labelledby="more" className="pb-20 sm:pb-28">
        <SectionHeading id="more" title="More projects">
          <Link
            href="/projects"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            See all
          </Link>
        </SectionHeading>
        <ProjectTiles projects={highlights} />
      </section>

      <section aria-labelledby="research" className="pb-20 sm:pb-28">
        <SectionHeading id="research" title="Research">
          <a
            href={links.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Google Scholar
          </a>
        </SectionHeading>
        <PaperCards publications={publications} />
      </section>

      <section aria-labelledby="contact" className="pb-8">
        <SectionHeading id="contact" title="Contact" />
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <p className="max-w-2xl text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
            Working on something that should look as good as it works? I would love to hear about
            it.
          </p>
          <a
            href={`mailto:${links.email}`}
            className="group inline-flex items-center gap-2 text-lg font-medium underline decoration-border-strong decoration-1 underline-offset-[6px] transition-colors hover:decoration-foreground"
          >
            {links.email}
          </a>
        </div>
      </section>
    </div>
  );
}
