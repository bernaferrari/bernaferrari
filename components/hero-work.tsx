import Image from "next/image";

/** Three real screens from three platforms, overlapping like work spread on a desk. */
const screens = [
  {
    src: "/work/kotlin-reforge-before-after.webp",
    alt: "Rethink redesigned as Keepout, from Kotlin Reforge",
    width: 2400,
    height: 1260,
    className: "top-0 right-0 w-[88%]",
    delay: 60,
  },
  {
    src: "/work/pngsmith-app.webp",
    alt: "PNGSmith, a macOS app, making an image 84% smaller",
    width: 2160,
    height: 1480,
    className: "top-[38%] left-0 w-[64%]",
    delay: 140,
  },
  {
    src: "/work/gradle-web.jpg",
    alt: "GradleKotlinConverter turning a Groovy build file into Kotlin",
    width: 2476,
    height: 2056,
    className: "right-[2%] bottom-0 w-[46%] aspect-[4/3]",
    delay: 220,
  },
];

export function HeroWork() {
  return (
    <a
      href="#work"
      aria-label="See selected work"
      className="relative hidden aspect-[1/0.92] lg:block"
    >
      {screens.map((screen) => (
        <div
          key={screen.src}
          className={`rise absolute overflow-hidden rounded-xl border border-black/10 bg-surface shadow-[0_24px_60px_-28px_rgba(0,0,0,0.55)] dark:border-white/10 ${screen.className}`}
          style={{ animationDelay: `${screen.delay}ms` }}
        >
          <Image
            src={screen.src}
            alt={screen.alt}
            width={screen.width}
            height={screen.height}
            priority
            sizes="460px"
            className="h-full w-full object-cover object-top"
          />
        </div>
      ))}
    </a>
  );
}
