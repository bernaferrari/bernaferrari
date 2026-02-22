"use client";

import { motion } from "framer-motion";
import posthog from "posthog-js";
import { Publication } from "@/lib/publications";

interface PublicationCardProps {
  publication: Publication;
  index: number;
}

function PublicationCard({ publication, index }: PublicationCardProps) {
  const handleClick = () => {
    posthog.capture("publication_clicked", {
      publication_title: publication.title,
      publication_venue: publication.venue,
      publication_year: publication.year,
      publication_citations: publication.citations,
      publication_url: publication.url,
    });
  };

  return (
    <motion.a
      href={publication.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group block px-2 py-3 transition-[padding,background-color] duration-200 hover:px-3 hover:bg-gray-50/80 dark:hover:bg-zinc-900/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-zinc-700"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 dark:text-zinc-100 transition-colors line-clamp-2 text-sm">
            {publication.title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-zinc-500 mt-1 truncate">
            {publication.venue} · {publication.year}
          </p>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-zinc-500 shrink-0">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          <span>{publication.citations}</span>
        </div>
      </div>
    </motion.a>
  );
}

interface PublicationGridProps {
  publications: Publication[];
  title?: string;
}

export function PublicationGrid({
  publications,
  title = "Publications",
}: PublicationGridProps) {
  return (
    <section className="py-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <div className="divide-y divide-gray-100 dark:divide-zinc-800">
        {publications.map((pub, i) => (
          <PublicationCard key={pub.title} publication={pub} index={i} />
        ))}
      </div>
    </section>
  );
}
