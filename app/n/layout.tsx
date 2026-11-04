import { BlogHeader } from "@/components/blog-header";

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-10 pb-8">
      <BlogHeader />
      <article className="space-y-5">{children}</article>
    </div>
  );
}
