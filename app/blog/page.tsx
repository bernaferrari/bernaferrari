import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Posts and contributions by Bernardo Ferrari",
};

// Posts are paused; bring back BlogGrid from components/blog-card with getPosts() when they return.
export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 pb-8 sm:pt-24">
      <h1 className="text-4xl font-medium tracking-[-0.03em] sm:text-5xl">Blog</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Writing is paused for now and will be back soon.
      </p>
    </div>
  );
}
