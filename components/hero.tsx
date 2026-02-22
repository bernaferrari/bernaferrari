"use client";

import { motion } from "framer-motion";
import { LicenseCard } from "./license-card";

interface HeroProps {
  name?: string;
  avatarUrl?: string;
  children?: React.ReactNode;
}

export function Hero({
  name = "Bernardo Ferrari",
  avatarUrl = "https://github.com/bernaferrari.png",
  children,
}: HeroProps) {
  return (
    <section className="pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="w-full"
        >
          <LicenseCard name={name} avatarUrl={avatarUrl} bio={children} />
        </motion.div>
      </div>
    </section>
  );
}
