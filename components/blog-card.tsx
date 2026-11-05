import Link from "next/link";
import { Arrow } from "./work";

export interface BlogPost {
  title: string;
  description: string;
  href: string;
  date?: string;
  readTime?: string;
  image?: string;
  category?: "post" | "contribution";
  project?: string; // For contributions: which OSS project
}

/** One post: a row with the title, a line about it and the date, in the site's quiet style. */
export function BlogCard({ post }: { post: BlogPost }) {
  const meta = [post.date, post.readTime].filter(Boolean).join(" · ");

  return (
    <Link
      href={post.href}
      className="group grid gap-x-8 gap-y-1 border-t border-border py-6 sm:grid-cols-[minmax(0,1fr)_auto]"
    >
      <div className="min-w-0">
        <h3 className="flex items-center gap-1.5 text-lg font-medium tracking-tight">
          {post.title}
          <Arrow className="text-faint transition-colors group-hover:text-foreground" />
        </h3>
        <p className="mt-1 line-clamp-2 max-w-2xl text-muted">{post.description}</p>
      </div>
      {meta && <p className="text-sm text-faint tabular-nums sm:pt-1">{meta}</p>}
    </Link>
  );
}

export function BlogGrid({ posts, title = "Latest posts" }: { posts: BlogPost[]; title?: string }) {
  return (
    <section className="py-8">
      <h2 className="mb-2 text-sm font-medium text-muted">{title}</h2>
      <div className="border-b border-border">
        {posts.map((post) => (
          <BlogCard key={post.href} post={post} />
        ))}
      </div>
    </section>
  );
}
