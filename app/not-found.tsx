import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      {/* Big 404 */}
      <h1 className="text-8xl md:text-9xl font-bold text-gray-200 dark:text-zinc-800 select-none">
        404
      </h1>

      {/* Message */}
      <div className="mt-4 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          Page not found
        </h2>
        <p className="text-gray-600 dark:text-zinc-400 max-w-md">
          Looks like you've wandered into uncharted territory. The page you're
          looking for doesn't exist or has been moved.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Go home
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-zinc-700 hover:border-purple-300 dark:hover:border-purple-700 text-gray-700 dark:text-zinc-300 font-medium text-sm transition-colors"
        >
          Read the blog
        </Link>
      </div>
    </div>
  );
}
