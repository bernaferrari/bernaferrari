/** A project shown big, with a picture: the few that say the most about the work. */
export interface Feature {
  name: string;
  /** One sentence: what it does and why it matters. */
  summary: string;
  url: string;
  /** Short facts in a quiet line under the summary. */
  meta: string[];
  image: {
    src: string;
    alt: string;
    /** contain: show the whole picture on `background`; otherwise it fills the frame. */
    contain?: boolean;
    background?: string;
  };
}

/** A project in the plain list: one line each. */
export interface Project {
  name: string;
  summary: string;
  url: string;
  /** Stars, or a word like "macOS" when stars say little. */
  note: string;
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
      src: "/work/kotlin-reforge.png",
      alt: "QuietGuard, Calcula, Keepout and ChangeDetection, four of the rebuilt apps",
    },
  },
  {
    name: "Screenshot Studio",
    summary:
      "Turns real app captures into Google Play and App Store screenshots in every language, checked the way a store reviewer would.",
    url: "https://github.com/bernaferrari/screenshot-studio",
    meta: ["TypeScript", "Built for AI agents"],
    image: {
      src: "/work/screenshot-studio.webp",
      alt: "Plain screenshots of Calcula made into a store-ready set, and the same set in German, Chinese and Japanese",
    },
  },
  {
    name: "KMPwright",
    summary:
      "Browser automation for Kotlin Multiplatform. One script drives Android WebView, iOS WKWebView or Chromium, or an AI agent.",
    url: "https://kmpwright.vercel.app",
    meta: ["Kotlin Multiplatform", "Library"],
    image: {
      src: "/work/kmpwright.webp",
      alt: "Six lines of Kotlin filling in and submitting a sign-up form",
    },
  },
  {
    name: "PNGSmith",
    summary:
      "A native macOS app that makes PNGs smaller by reducing colors intelligently, with cropping and batch review.",
    url: "https://github.com/bernaferrari/PNGSmith",
    meta: ["macOS", "Swift"],
    image: {
      src: "/work/pngsmith.png",
      alt: "A landscape photo dissolving into a grid of fewer colors",
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
      alt: "A smoothed curve through noisy points, plotted by R code running on rport",
      contain: true,
      background: "#1b1f1e",
    },
  },
];

/** The shortlist on the home page. */
export const highlights: Project[] = [
  {
    name: "GradleKotlinConverter",
    summary: "Converts Gradle build files from Groovy to the Kotlin DSL.",
    url: "https://gradle-kotlin-converter.vercel.app",
    note: "943 ★",
  },
  {
    name: "ChangeDetection",
    summary: "Watches websites in the background and shows what changed.",
    url: "https://github.com/bernaferrari/ChangeDetection",
    note: "746 ★",
  },
  {
    name: "EmojiSlider",
    summary: "An Android slider full of emoji, made to be customized.",
    url: "https://github.com/bernaferrari/EmojiSlider",
    note: "617 ★",
  },
  {
    name: "Color Studio",
    summary: "Build coherent, accessible color themes with the right colors.",
    url: "https://github.com/bernaferrari/color-studio",
    note: "440 ★",
  },
  {
    name: "SDKMonitor",
    summary: "Shows which Android version each installed app targets.",
    url: "https://sdkmonitor.vercel.app",
    note: "301 ★",
  },
  {
    name: "RegexLearner",
    summary: "A journey through regular expressions. Swift Student Challenge winner.",
    url: "https://github.com/bernaferrari/RegexLearner",
    note: "WWDC20",
  },
];

/** Everything else worth a look, on /projects. */
export const others: Project[] = [
  {
    name: "Diagonal Wipe Icon",
    summary: "iPhone-style icon transitions in one file, for Compose and Flutter.",
    url: "https://bernaferrari.github.io/diagonal-wipe-icon/",
    note: "Library",
  },
  {
    name: "CashBalancer",
    summary: "Balance money across assets and accounts.",
    url: "https://bernaferrari.github.io/CashBalancer/",
    note: "88 ★",
  },
  {
    name: "RandomColorScheme",
    summary: "Try different Flutter color schemes without the pain.",
    url: "https://bernaferrari.github.io/RandomColorScheme/",
    note: "77 ★",
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
    name: "multi-diff",
    summary: "Compare several diff files side by side.",
    url: "https://multi-diff.vercel.app",
    note: "Web",
  },
  {
    name: "text-to-files",
    summary: "Turn an AI chat answer into files with one paste.",
    url: "https://text-to-files.vercel.app",
    note: "Web",
  },
  {
    name: "default-opener",
    summary: "Take back control of your default apps on macOS.",
    url: "https://github.com/bernaferrari/default-opener",
    note: "macOS",
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
