"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, LayoutGroup } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { name: "Home", path: "/" },
  // { name: "Blog", path: "/blog" }, // Paused for now
  { name: "Projects", path: "/projects" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-6 flex justify-center pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-3">
        <LayoutGroup>
          <ul className="flex items-center gap-1 p-1.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg shadow-purple-500/5 ring-1 ring-black/5 dark:ring-white/5">
            {navItems.map((item) => {
              // const isBlog = item.path === "/blog";
              // const isReading = pathname?.startsWith("/n/");
              const isActive =
                pathname === item.path ||
                (item.path !== "/" && pathname?.startsWith(item.path));
              //  ||
              // (isBlog && isReading);

              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 block ${
                      isActive
                        ? "text-purple-600 dark:text-purple-300"
                        : "text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-full shadow-sm -z-10 border border-gray-100 dark:border-zinc-700/50"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </LayoutGroup>

        <ThemeToggle />
      </nav>
    </header>
  );
}
