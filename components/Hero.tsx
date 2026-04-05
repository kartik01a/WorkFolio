"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-center px-4 pb-24 pt-28 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-blue-500/15 blur-[90px]" />
      </div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-4xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-400 backdrop-blur-sm"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Open to freelance & contracts
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block">{site.name}</span>
          <span className="mt-2 block bg-gradient-to-r from-[#c4b5fd] via-primary to-[#60a5fa] bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
            {site.title}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-[#7c3aed] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            View projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(106,0,241,0.15)]"
          >
            Hire me
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2">
          <motion.div
            className="h-2 w-1 rounded-full bg-white/50"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
