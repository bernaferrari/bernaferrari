export interface Project {
  title: string;
  description: string;
  url: string;
  stars?: string;
  tech: string[];
  emoji?: string;
}

export const featuredProjects: Project[] = [
  {
    title: "FigmaToCode",
    description:
      "Generate responsive pages and apps on HTML, Tailwind, Flutter and SwiftUI.",
    url: "https://github.com/bernaferrari/FigmaToCode",
    stars: "4.6k",
    tech: ["TypeScript", "Figma", "React"],
    emoji: "🎨",
  },
  {
    title: "Color Studio",
    description: "Build coherent and accessible themes with the right colors.",
    url: "https://github.com/bernaferrari/color-studio",
    stars: "435",
    tech: ["Flutter", "Dart", "Material"],
    emoji: "🎯",
  },
  {
    title: "ChangeDetection",
    description:
      "Automatically track website changes on Android in background.",
    url: "https://github.com/bernaferrari/ChangeDetection",
    stars: "740",
    tech: ["Kotlin", "Android", "MVVM"],
    emoji: "🔍",
  },
  {
    title: "EmojiSlider",
    description: "A slider widget rich in emoji and highly customisable.",
    url: "https://github.com/bernaferrari/EmojiSlider",
    stars: "611",
    tech: ["Kotlin", "Android", "UI"],
    emoji: "🤯",
  },
  {
    title: "GradleKotlinConverter",
    description:
      "Convert from Groovy to Kotlin DSL for Gradle, focused on Android.",
    url: "https://github.com/bernaferrari/GradleKotlinConverter",
    stars: "947",
    tech: ["TypeScript", "Gradle"],
    emoji: "🔄",
  },
  {
    title: "CashBalancer",
    description: "Balance money across different assets and accounts easily.",
    url: "https://github.com/bernaferrari/CashBalancer",
    stars: "85",
    tech: ["Flutter", "iOS", "Android"],
    emoji: "💰",
  },
];

export const additionalProjects: Project[] = [
  {
    title: "SDKMonitor",
    description:
      "App to display and monitor the targetSDK from installed apps.",
    url: "https://github.com/bernaferrari/SDKMonitor",
    stars: "260",
    tech: ["Kotlin", "Android"],
    emoji: "📱",
  },
  {
    title: "fast-kotlin-diff-utils",
    description:
      "High-performance text diff library with 5x speedup over java-diff-utils.",
    url: "https://github.com/bernaferrari/fast-kotlin-diff-utils",
    stars: "New",
    tech: ["Kotlin", "Multiplatform"],
    emoji: "⚡",
  },
];
