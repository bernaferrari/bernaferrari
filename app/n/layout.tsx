import { BlogHeader } from "@/components/blog-header";

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogHeader />
      <article className="prose-container">{children}</article>
    </>
  );
}
