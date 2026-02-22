"use client";

import React from "react";
import { ProfileSocialLinks } from "./social-links";

export function LicenseCard({
  name = "Bernardo Ferrari",
  avatarUrl,
  bio,
}: {
  name?: string;
  avatarUrl?: string;
  bio?: React.ReactNode;
}) {
  return (
    <section className="relative w-full max-w-[760px]">
      <div className="pointer-events-none absolute -top-8 -left-10 h-28 w-28 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-8 right-0 h-24 w-24 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
        <div className="shrink-0">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-800 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.5)] bg-zinc-100 dark:bg-zinc-900">
            {avatarUrl && (
              <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
            )}
          </div>
        </div>

        <div className="w-full text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {name}
          </h2>
          <p className="mt-2 text-[11px] uppercase tracking-[0.16em] font-medium text-zinc-500 dark:text-zinc-400">
            Design Engineer
          </p>
          <div className="mt-4 text-sm md:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-xl">
            {bio}
          </div>
          <div className="mt-6 pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <ProfileSocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
