import { getPosts, getContributions } from "@/lib/posts";
import { existsSync } from "node:fs";
import { join } from "node:path";

const SITE_URL = "https://bernaferrari.com";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function parsePostDate(date?: string) {
  if (!date) return new Date(0);
  const parsed = Date.parse(`1 ${date}`);
  if (!Number.isNaN(parsed)) return new Date(parsed);
  const fallback = Date.parse(date);
  if (!Number.isNaN(fallback)) return new Date(fallback);
  return new Date(0);
}

function hasPageForHref(href: string) {
  const segments = href.replace(/^\/+/, "");
  if (!segments) return false;
  const mdxPath = join(process.cwd(), "app", segments, "page.mdx");
  const tsxPath = join(process.cwd(), "app", segments, "page.tsx");
  return existsSync(mdxPath) || existsSync(tsxPath);
}

export async function GET() {
  const posts = [...getPosts(), ...getContributions()]
    .filter((post) => hasPageForHref(post.href))
    .sort((a, b) => parsePostDate(b.date).getTime() - parsePostDate(a.date).getTime());

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Bernardo Ferrari</title>
    <link>${SITE_URL}</link>
    <description>Thoughts on design, code, and everything in between.</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts
      .map((post) => {
        const pubDate = parsePostDate(post.date).toUTCString();
        const title = escapeXml(post.title);
        const description = escapeXml(post.description);
        const link = `${SITE_URL}${post.href}`;
        return `
      <item>
        <title>${title}</title>
        <link>${link}</link>
        <description>${description}</description>
        <pubDate>${pubDate}</pubDate>
        <guid isPermaLink="true">${link}</guid>
      </item>
    `;
      })
      .join("")}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}
