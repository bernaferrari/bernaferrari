"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Link
        href={post.href}
        className="group block rounded-xl glass card-hover overflow-hidden"
      >
        {/* Optional Image */}
        {post.image && (
          <div className="aspect-[2/1] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-zinc-400 line-clamp-2">
                {post.description}
              </p>
              {(post.date || post.readTime) && (
                <div className="flex items-center gap-3 mt-3 text-xs text-gray-500 dark:text-zinc-500">
                  {post.date && <span>{post.date}</span>}
                  {post.date && post.readTime && <span>•</span>}
                  {post.readTime && <span>{post.readTime}</span>}
                </div>
              )}
            </div>
            {!post.image && (
              <svg
                className="w-5 h-5 text-gray-400 dark:text-zinc-600 group-hover:text-purple-500 group-hover:translate-x-1 transition-all shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

interface BlogGridProps {
  posts: BlogPost[];
  title?: string;
}

export function BlogGrid({ posts, title = "Latest Posts" }: BlogGridProps) {
  return (
    <section className="py-8">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white"
      >
        {title}
      </motion.h2>
      <div className="space-y-4">
        {posts.map((post, i) => (
          <BlogCard key={post.href} post={post} index={i} />
        ))}
      </div>
    </section>
  );
}
