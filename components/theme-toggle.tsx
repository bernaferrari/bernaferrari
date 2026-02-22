"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import posthog from "posthog-js";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const handleToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    posthog.capture("theme_toggled", {
      previous_theme: theme,
      new_theme: newTheme,
    });
  };

  return (
    <button
      onClick={handleToggle}
      className="relative p-2 rounded-full bg-white/10 dark:bg-zinc-900/10 hover:bg-white/20 dark:hover:bg-zinc-900/20 backdrop-blur-md border border-white/20 dark:border-white/10 transition-colors w-9 h-9 flex items-center justify-center overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <svg
          className="absolute inset-0 w-5 h-5 text-yellow-400 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <svg
          className="absolute inset-0 w-5 h-5 text-zinc-900 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </button>
  );
}
