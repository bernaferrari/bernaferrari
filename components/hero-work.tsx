import Image from "next/image";

/**
 * The first screen's picture: the flagship across the top, two apps below it, cropped
 * to their screens. Each tile opens its project.
 */
const tiles = [
  {
    href: "https://github.com/bernaferrari/FigmaToCode",
    label: "Figma to Code",
    src: "/work/figmatocode.png",
    alt: "A Figma design flowing into Tailwind, HTML, Flutter, React and SwiftUI code",
    width: 1672,
    height: 941,
    frame: "col-span-2 aspect-[40/21]",
    position: "object-center",
    zoom: "",
  },
  {
    href: "https://kotlin-reforge.vercel.app/#calcula",
    label: "Calcula, from Kotlin Reforge",
    src: "/work/calcula.webp",
    alt: "Calcula's calculator, graph and unit converter",
    width: 2400,
    height: 1260,
    frame: "aspect-square",
    position: "object-center",
    zoom: "scale-[1.7] origin-[50%_88%]",
  },
  {
    href: "https://kotlin-reforge.vercel.app/#wifi-weakspot",
    label: "WiFi Weakspot, from Kotlin Reforge",
    src: "/work/wifi-weakspot.webp",
    alt: "WiFi Weakspot charting nearby networks by channel",
    width: 2400,
    height: 1260,
    frame: "aspect-square",
    position: "object-left",
    zoom: "scale-[1.65] origin-[12%_100%]",
  },
];

export function HeroWork() {
  return (
    <div className="hidden grid-cols-2 gap-3 lg:grid">
      {tiles.map((tile, index) => (
        <a
          key={tile.src}
          href={tile.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={tile.label}
          className={`rise group relative overflow-hidden rounded-xl border border-border bg-surface ${tile.frame}`}
          style={{ animationDelay: `${80 + index * 70}ms` }}
        >
          <Image
            src={tile.src}
            alt={tile.alt}
            width={tile.width}
            height={tile.height}
            priority
            sizes={index === 0 ? "560px" : "480px"}
            className={`h-full w-full object-cover ${tile.position} ${tile.zoom}`}
          />
          <span className="pointer-events-none absolute bottom-2.5 left-2.5 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
            {tile.label}
          </span>
        </a>
      ))}
    </div>
  );
}
