import Image from "next/image";

const reforge = "https://kotlin-reforge.vercel.app";

/** A Kotlin Reforge app's own Google Play screenshot. */
interface StoreCard {
  kind: "store";
  src: string;
  app: string;
  slug: string;
}

/**
 * Another project, drawn the way the store screenshots are: a headline on top and the real
 * product below it, cropped inside a window, so every card in the gallery reads as one set.
 */
interface PosterCard {
  kind: "poster";
  app: string;
  url: string;
  headline: [string, string];
  sub: string;
  image: { src: string; width: number; height: number; alt: string };
  /** How wide the picture is next to the card: above 100 crops to its top-left corner. */
  zoom: number;
  theme: { background: string; text: string; accent: string; muted: string; window: string };
}

type Card = StoreCard | PosterCard;

const store = (src: string, app: string, slug: string): StoreCard => ({
  kind: "store",
  src,
  app,
  slug,
});

const pngsmith: PosterCard = {
  kind: "poster",
  app: "PNGSmith",
  url: "https://github.com/bernaferrari/PNGSmith",
  headline: ["PNGs,", "84% smaller."],
  sub: "A native Mac app that reduces colors, not quality.",
  image: {
    src: "/work/pngsmith-app.webp",
    width: 2160,
    height: 1480,
    alt: "PNGSmith reducing an image to 39 colors, 84% smaller",
  },
  zoom: 150,
  theme: {
    background: "linear-gradient(180deg, #1d1b33 0%, #120f1f 100%)",
    text: "#f4f2ff",
    accent: "#b49bff",
    muted: "rgba(244,242,255,0.66)",
    window: "#1e1e1e",
  },
};

const gradle: PosterCard = {
  kind: "poster",
  app: "GradleKotlinConverter",
  url: "https://gradle-kotlin-converter.vercel.app",
  headline: ["Groovy in,", "Kotlin out."],
  sub: "Paste a Gradle build file, get the Kotlin DSL.",
  image: {
    src: "/work/gradle-web.jpg",
    width: 2476,
    height: 2056,
    alt: "A Groovy build file beside its Kotlin DSL version",
  },
  zoom: 170,
  theme: {
    background: "linear-gradient(180deg, #f6f1ff 0%, #ece4fb 100%)",
    text: "#1d1530",
    accent: "#c2367f",
    muted: "rgba(29,21,48,0.62)",
    window: "#f8f8fa",
  },
};

const rport: PosterCard = {
  kind: "poster",
  app: "rport",
  url: "https://rport.dev",
  headline: ["R, rewritten", "in Rust."],
  sub: "Matches R on all 607 conformance tests.",
  image: {
    src: "/work/rport-dark.png",
    width: 800,
    height: 600,
    alt: "A smoothed curve through noisy points, plotted by R code running on rport",
  },
  zoom: 100,
  theme: {
    background: "linear-gradient(180deg, #16201d 0%, #0e1412 100%)",
    text: "#eef5f1",
    accent: "#e8915a",
    muted: "rgba(238,245,241,0.62)",
    window: "#1b1f1e",
  },
};

/** Three staggered columns on wide screens; the same cards, in this order, as a row on phones. */
const columns: { offset: string; cards: Card[] }[] = [
  {
    offset: "translate-y-10",
    cards: [store("calcula-flick", "Calcula", "calcula"), pngsmith],
  },
  {
    offset: "-translate-y-6",
    cards: [gradle, store("keepout", "Keepout", "keepout")],
  },
  {
    offset: "translate-y-24",
    cards: [store("wordkeep", "Wordkeep", "wordkeep"), rport],
  },
];

const strip: Card[] = [
  columns[0].cards[0],
  columns[1].cards[0],
  columns[0].cards[1],
  columns[1].cards[1],
  columns[2].cards[1],
  columns[2].cards[0],
];

const cardClass =
  "block overflow-hidden rounded-[14px] border border-black/5 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out hover:-translate-y-1 dark:border-white/10";

function CardLink({
  card,
  priority,
  width,
  className = "",
  style,
}: {
  card: Card;
  priority?: boolean;
  /** The card's widest rendered width, in CSS pixels, for picking image sizes. */
  width: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const href = card.kind === "store" ? `${reforge}/#${card.slug}` : card.url;
  const label = card.kind === "store" ? `${card.app}, from Kotlin Reforge` : card.app;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${cardClass} ${className}`}
      style={style}
    >
      {card.kind === "store" ? (
        <Image
          src={`/work/store/${card.src}.webp`}
          alt={`${card.app}'s Google Play screenshot`}
          width={720}
          height={1280}
          priority={priority}
          sizes={`${width}px`}
          className="h-auto w-full"
        />
      ) : (
        <Poster card={card} priority={priority} width={width} />
      )}
    </a>
  );
}

function Poster({ card, priority, width }: { card: PosterCard; priority?: boolean; width: number }) {
  const { theme, image, zoom } = card;
  return (
    <div
      className="@container relative aspect-[9/16] overflow-hidden"
      style={{ background: theme.background, color: theme.text }}
    >
      <div className="px-[8cqw] pt-[9cqw]">
        <p className="text-[4.6cqw] font-semibold" style={{ color: theme.accent }}>
          {card.app}
        </p>
        <p className="mt-[3cqw] text-[11.5cqw] leading-[0.98] font-bold tracking-[-0.04em]">
          {card.headline[0]}
          <br />
          <span style={{ color: theme.accent }}>{card.headline[1]}</span>
        </p>
        <p className="mt-[4cqw] text-[5cqw] leading-snug" style={{ color: theme.muted }}>
          {card.sub}
        </p>
      </div>

      {/* The product, in a window that runs off the bottom edge like the phones do. */}
      <div
        className="absolute top-[50%] right-[-1px] bottom-[-1px] left-[8cqw] overflow-hidden rounded-tl-[4cqw] border-t border-l border-white/10 shadow-[0_-10px_30px_-12px_rgba(0,0,0,0.5)]"
        style={{ background: theme.window }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={priority}
          sizes={`${Math.round((width * zoom) / 100)}px`}
          className="h-auto max-w-none"
          style={{ width: `${zoom}%` }}
        />
      </div>
    </div>
  );
}

export function HeroWork() {
  return (
    <div
      aria-label="A few of my projects"
      className="relative hidden h-[34rem] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_85%,transparent)] lg:block"
    >
      <div className="grid grid-cols-3 gap-3">
        {columns.map((column, c) => (
          <div key={c} className={`flex flex-col gap-3 ${column.offset}`}>
            {column.cards.map((card, i) => (
              <CardLink
                key={card.app + i}
                card={card}
                priority={i === 0}
                width={180}
                className="rise"
                style={{ animationDelay: `${60 + (c * 2 + i) * 60}ms` }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** The same cards on phones and tablets: one row that scrolls sideways, edge to edge. */
export function HeroStrip() {
  return (
    <div
      aria-label="A few of my projects"
      className="-mx-6 mt-12 flex snap-x snap-mandatory scroll-px-6 gap-3 overflow-x-auto px-6 pb-4 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
    >
      {strip.map((card, i) => (
        <CardLink
          key={card.app + i}
          card={card}
          priority={i < 2}
          width={176}
          className="w-36 shrink-0 snap-start sm:w-44"
        />
      ))}
    </div>
  );
}
