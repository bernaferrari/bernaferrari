"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/#research" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-tight"
          aria-current={pathname === "/" ? "page" : undefined}
        >
          Bernardo Ferrari
        </Link>

        <nav aria-label="Main" className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 sm:flex">
            {nav.map((item) => {
              const active = item.href === pathname;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() =>
                      posthog.capture("nav_item_clicked", {
                        nav_item_name: item.label,
                        nav_item_path: item.href,
                      })
                    }
                    className={`rounded-md px-3 py-1.5 text-sm transition-colors duration-150 ${
                      active ? "text-foreground" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/projects"
            className="rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground sm:hidden"
          >
            Projects
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
