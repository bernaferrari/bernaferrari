import type { BlogPost } from "@/components/blog-card";

export const blogPosts: BlogPost[] = [
  // Regular posts
  {
    title: "5 Tiny CLI Tricks You (Probably) Didn't Know",
    description:
      "A lightning-round of command-line nuggets to level-up your dev workflow.",
    href: "/n/1",
    date: "Dec 2024",
    readTime: "3 min read",
    category: "post",
  },
  {
    title: "6 Sneaky JavaScript Patterns to Cut Boilerplate",
    description:
      "Reduce repetition and write cleaner JS with these elegant patterns.",
    href: "/n/2",
    date: "Dec 2024",
    readTime: "4 min read",
    category: "post",
  },
  {
    title: "6 CSS Patterns to Cut Boilerplate",
    description: "Modern CSS techniques that eliminate unnecessary code.",
    href: "/n/3",
    date: "Dec 2024",
    readTime: "3 min read",
    category: "post",
  },

  // Contributions - blog entries about OSS contributions
  {
    title: "Engineering Log: Optimizing java-diff-utils for Kotlin",
    description:
      "A technical look at optimizing a 10-year-old library: primitive collections, concurrency trade-offs, and profiling.",
    href: "/n/c1",
    date: "Dec 2024",
    readTime: "8 min read",
    category: "contribution",
    project: "java-diff-utils",
  },
  {
    title: "Adding HSLuv Color Space to Flutter",
    description:
      "How I contributed perceptually uniform color manipulation to the Flutter ecosystem.",
    href: "/n/c2", // Replace with actual contribution post
    date: "Nov 2024",
    readTime: "5 min read",
    category: "contribution",
    project: "Flutter",
  },
  {
    title: "Fixing Dark Mode Elevation in Material Components",
    description:
      "A journey through Material Design specs to fix surface overlay calculations.",
    href: "/n/c3", // Replace with actual contribution post
    date: "Oct 2024",
    readTime: "6 min read",
    category: "contribution",
    project: "material-components-android",
  },
];

// Helper to filter posts by category
export const getPosts = () =>
  blogPosts.filter((p) => p.category === "post" || !p.category);
export const getContributions = () =>
  blogPosts.filter((p) => p.category === "contribution");
export const getAllPosts = () => blogPosts;
