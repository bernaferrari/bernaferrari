import Link from "next/link";
import { FeatureCard, PaperCards, ProjectTiles, SectionHeading, Arrow } from "@/components/work";
import { features, highlights, links } from "@/lib/work";
import { publications } from "@/lib/publications";

const proof = [
  { value: "2M+", label: "people use Figma to Code" },
  { value: "WWDC20", label: "Swift Student Challenge winner" },
  { value: "4 papers", label: "on human-computer interaction" },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Who, what, and why believe it: all on the first screen. */}
      <section className="rise pt-14 pb-16 sm:pt-20 sm:pb-20">
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
            <span className="font-medium text-foreground">Bernardo Ferrari</span> · Design
            engineer, Brazil
          </p>
        </div>

        <h1 className="mt-8 max-w-4xl text-[2.5rem] leading-[1.05] font-medium tracking-[-0.035em] sm:text-6xl lg:text-7xl">
          I build the tools between a design and the app that ships.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          Software for the web, Android, iOS and the desktop, designed with as much care as it is
          engineered. My Figma plugin turns designs into real code for over 2 million people, and I
          rebuild well-loved apps so they feel new.
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

        <dl className="mt-14 grid max-w-3xl grid-cols-1 gap-6 border-t border-border pt-6 sm:grid-cols-3">
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
