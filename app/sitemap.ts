import { MetadataRoute } from "next";
import { getPosts, getContributions } from "@/lib/posts";

const SITE_URL = "https://bernaferrari.com"; // Replace with your domain

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = [...getPosts(), ...getContributions()];

  const routes = ["", "/blog", "/projects"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const postRoutes = posts.map((post) => ({
    url: `${SITE_URL}${post.href}`,
    lastModified: new Date().toISOString().split("T")[0], // Ideally use post date
  }));

  return [...routes, ...postRoutes];
}
