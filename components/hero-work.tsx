import Image from "next/image";

const reforge = "https://kotlin-reforge.vercel.app";

/**
 * The first screen's picture: Google Play screenshots of the rebuilt apps, three staggered
 * columns that fade out at the edges. Each one opens its app.
 */
const columns = [
  {
    offset: "translate-y-10",
    cards: [
      { src: "calcula-flick", app: "Calcula", slug: "calcula" },
      { src: "changedetection", app: "ChangeDetection", slug: "changedetection" },
    ],
  },
  {
    offset: "-translate-y-6",
    cards: [
      { src: "keepout", app: "Keepout", slug: "keepout" },
      { src: "wordkeep", app: "Wordkeep", slug: "wordkeep" },
    ],
  },
  {
    offset: "translate-y-24",
    cards: [
      { src: "quietguard", app: "QuietGuard", slug: "quietguard" },
      { src: "calcula-graph", app: "Calcula", slug: "calcula" },
    ],
  },
];

export function HeroWork() {
  return (
    <div
      aria-label="Apps from Kotlin Reforge"
      className="relative hidden h-[34rem] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_85%,transparent)] lg:block"
    >
      <div className="grid grid-cols-3 gap-3">
        {columns.map((column, c) => (
          <div key={c} className={`flex flex-col gap-3 ${column.offset}`}>
            {column.cards.map((card, i) => (
              <a
                key={card.src}
                href={`${reforge}/#${card.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${card.app}, from Kotlin Reforge`}
                className="rise block overflow-hidden rounded-[14px] border border-black/5 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out hover:-translate-y-1 dark:border-white/10"
                style={{ animationDelay: `${60 + (c * 2 + i) * 60}ms` }}
              >
                <Image
                  src={`/work/store/${card.src}.webp`}
                  alt={`${card.app}'s Google Play screenshot`}
                  width={720}
                  height={1280}
                  priority={i === 0}
                  sizes="180px"
                  className="h-auto w-full"
                />
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
