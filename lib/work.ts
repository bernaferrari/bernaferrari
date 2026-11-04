/** A project shown big, with a picture: the few that say the most about the work. */
export interface Feature {
  name: string;
  /** One sentence: what it does and why it matters. */
  summary: string;
  url: string;
  /** Short facts in a quiet line under the summary. */
  meta: string[];
  /** The real product, shown inside the same frame as every other feature. */
  image: {
    src: string;
    alt: string;
    /** contain: show the whole picture on `background`; otherwise it fills the frame. */
    contain?: boolean;
    background?: string;
    /** The picture's own size, so the frame can lay it out before it loads. */
    width?: number;
    height?: number;
  };
  /** Draw this instead of the picture: rport shows its real code beside the plot it made. */
  preview?: "rport";
}

/** A project in the plain list: one line each. */
export interface Project {
  name: string;
  summary: string;
  url: string;
  /** Stars, or a word like "macOS" when stars say little. */
  note: string;
  /** Shown on the home page's smaller cards. */
  image?: Feature["image"];
  /** The app's own icon, for the text cards. `padded` for a glyph without its own tile. */
  icon?: { src: string; padded?: boolean };
}

export const features: Feature[] = [
  {
    name: "Figma to Code",
    summary:
      "A Figma plugin that turns designs into responsive HTML, Tailwind, Flutter and SwiftUI, used by over 2 million people.",
    url: "https://github.com/bernaferrari/FigmaToCode",
    meta: ["Figma plugin", "2M+ users", "5.2k stars"],
    image: {
      src: "/work/figmatocode.png",
      width: 1672,
      height: 941,
      alt: "A Figma dashboard design flowing into Tailwind, HTML, Flutter, React and SwiftUI code",
    },
  },
  {
    name: "Kotlin Reforge",
    summary:
      "Well-loved open-source Android apps, rewritten in Kotlin and redesigned screen by screen, with a before and after for every one.",
    url: "https://kotlin-reforge.vercel.app",
    meta: ["Android", "Kotlin Multiplatform", "8 apps"],
    image: {
      src: "/work/kotlin-reforge-before-after.webp",
      width: 2400,
      height: 1260,
      alt: "Rethink's home and app list beside the same screens redesigned as Keepout",
    },
  },
  {
    name: "Screenshot Studio",
    summary:
      "Turns real app captures into Google Play and App Store screenshots in every language, checked the way a store reviewer would.",
    url: "https://github.com/bernaferrari/screenshot-studio",
    meta: ["TypeScript", "Built for AI agents"],
    image: {
      src: "/work/screenshot-studio-before-after.jpg",
      width: 2400,
      height: 1420,
      alt: "Plain screenshots of Calcula made into a store-ready set, and the same set in German, Chinese and Japanese",
    },
  },
  {
    name: "GradleKotlinConverter",
    summary:
      "Paste a Groovy Gradle build file, get the Kotlin DSL version. The tool Android developers reach for when they migrate.",
    url: "https://gradle-kotlin-converter.vercel.app",
    meta: ["Web", "TypeScript", "943 stars"],
    image: {
      src: "/work/gradle-web.jpg",
      width: 2476,
      height: 2056,
      alt: "A Groovy build file on the left and its Kotlin DSL version on the right",
    },
  },
  {
    name: "PNGSmith",
    summary:
      "A native macOS app that makes PNGs smaller by reducing colors intelligently, with cropping and batch review.",
    url: "https://github.com/bernaferrari/PNGSmith",
    meta: ["macOS", "Swift"],
    image: {
      src: "/work/pngsmith-app.webp",
      width: 2160,
      height: 1480,
      alt: "PNGSmith reducing an image to 39 colors, 84% smaller",
    },
  },
  {
    name: "rport",
    summary:
      "GNU R's core runtime rewritten in Rust: parser, evaluator and math library, matching R on all 607 conformance tests.",
    url: "https://rport.dev",
    meta: ["Rust", "Language runtime"],
    image: {
      src: "/work/rport-dark.png",
      width: 800,
      height: 600,
      alt: "A smoothed curve through noisy points, plotted by R code running on rport",
    },
    preview: "rport",
  },
];

/** The smaller cards on the home page. */
export const highlights: Project[] = [
  {
    name: "EmojiSlider",
    summary: "An Android slider full of emoji, made to be customized.",
    url: "https://github.com/bernaferrari/EmojiSlider",
    note: "617 ★",
    image: { src: "/work/emojislider.png", alt: "A slider whose thumb is a heart-eyes emoji" },
  },
  {
    name: "ChangeDetection",
    summary: "Watches websites in the background and shows what changed.",
    url: "https://github.com/bernaferrari/ChangeDetection",
    note: "746 ★",
    image: {
      src: "/work/changedetection.jpg",
      alt: "ChangeDetection highlighting what changed on a watched page",
    },
  },
  {
    name: "Multi Diff",
    summary: "Compare several diff files side by side.",
    url: "https://multi-diff.vercel.app",
    note: "Web",
    image: { src: "/work/multidiff.png", alt: "Three diffs lined up side by side" },
  },
  {
    name: "SDKMonitor",
    summary: "Shows which Android version each installed app targets.",
    url: "https://sdkmonitor.vercel.app",
    note: "301 ★",
    image: { src: "/work/sdkmonitor.jpg", alt: "SDKMonitor listing installed apps and their target SDK" },
  },
  {
    name: "Diagonal Wipe Icon",
    summary: "iPhone-style icon transitions in one file, for Compose and Flutter.",
    url: "https://bernaferrari.github.io/diagonal-wipe-icon/",
    note: "Library",
    image: {
      src: "/work/diagonal-wipe-icon.webp",
      alt: "Icons switching with a diagonal wipe",
      contain: true,
      background: "#fcf3f2",
    },
  },
  {
    name: "RegexLearner",
    summary: "A journey through regular expressions. Swift Student Challenge winner.",
    url: "https://github.com/bernaferrari/RegexLearner",
    note: "WWDC20",
    image: { src: "/work/regexlearner.png", alt: "Apple's WWDC20 Swift Student Challenge page" },
  },
];

/** Everything else worth a look, on /projects. */
export const others: Project[] = [
  {
    name: "Color Studio",
    summary: "Build coherent, accessible color themes with the right colors.",
    url: "https://github.com/bernaferrari/color-studio",
    note: "440 ★",
    icon: { src: "/icons/color-studio.png" },
  },
  {
    name: "KMPwright",
    summary: "Browser automation for Kotlin Multiplatform: Android, iOS and Chromium.",
    url: "https://kmpwright.vercel.app",
    note: "Library",
    icon: { src: "/icons/kmpwright.png" },
  },
  {
    name: "CashBalancer",
    summary: "Balance money across assets and accounts.",
    url: "https://bernaferrari.github.io/CashBalancer/",
    note: "88 ★",
    icon: { src: "/icons/cashbalancer.png" },
  },
  {
    name: "RandomColorScheme",
    summary: "Try different Flutter color schemes without the pain.",
    url: "https://bernaferrari.github.io/RandomColorScheme/",
    note: "77 ★",
    icon: { src: "/icons/randomcolorscheme.png" },
  },
  {
    name: "ColorBlindnessFlutter",
    summary: "See a Flutter theme the way people with color blindness do.",
    url: "https://github.com/bernaferrari/ColorBlindnessFlutter",
    note: "61 ★",
  },
  {
    name: "hsluv-dart",
    summary: "HSLuv for Dart, a human-friendly alternative to HSL.",
    url: "https://github.com/bernaferrari/hsluv-dart",
    note: "53 ★",
  },
  {
    name: "text-to-files",
    summary: "Turn an AI chat answer into files with one paste.",
    url: "https://text-to-files.vercel.app",
    note: "Web",
    icon: { src: "/icons/text-to-files.png", padded: true },
  },
  {
    name: "default-opener",
    summary: "Take back control of your default apps on macOS.",
    url: "https://github.com/bernaferrari/default-opener",
    note: "macOS",
    icon: { src: "/icons/default-opener.png", padded: true },
  },
  {
    name: "fast-kotlin-diff-utils",
    summary: "A modern Kotlin port of java-diff-utils.",
    url: "https://github.com/bernaferrari/fast-kotlin-diff-utils",
    note: "Library",
  },
];

export const links = {
  email: "bernaferrari2@gmail.com",
  github: "https://github.com/bernaferrari",
  linkedin: "https://www.linkedin.com/in/bernaferrari",
  x: "https://twitter.com/bernaferrari",
  scholar: "https://scholar.google.com/citations?user=sJaFHJIAAAAJ&hl=en",
};
