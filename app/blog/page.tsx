import { Metadata } from "next";
// import { BlogGrid } from "@/components/blog-card";
// import { getPosts, getContributions } from "@/lib/posts";
// import { NewsletterSignup } from "@/components/newsletter-signup";

export const metadata: Metadata = {
  title: "Blog",
  description: "Posts and contributions by Bernardo Ferrari",
};

export default function BlogPage() {
  // const posts = getPosts();
  // const contributions = getContributions();

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-zinc-400 max-w-xl">
          Thoughts on design, code, and everything in between.
        </p>
      </div>

      <p className="text-sm text-gray-500 dark:text-zinc-500 mb-6">
        This section is temporarily paused and will be back soon.
      </p>

      {/* Posts (paused - bring back soon) */}
      {/* <BlogGrid posts={posts} title="Posts" /> */}

      {/* Contributions (paused - bring back soon) */}
      {/* {contributions.length > 0 && (
        <div className="mt-4">
          <BlogGrid posts={contributions} title="Open Source Contributions" />
        </div>
      )} */}

      {/* Newsletter (paused - bring back soon) */}
      {/* <NewsletterSignup /> */}
    </div>
  );
}
