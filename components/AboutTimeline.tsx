"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const row = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function AboutTimeline() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Journey
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How I got here
          </h2>
          <p className="mt-3 text-zinc-400">
            A short story — learning, building, and shipping for real clients.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-white/20 to-transparent md:left-[15px]"
            aria-hidden
          />
          <ul className="space-y-8">
            {timeline.map((step, i) => (
              <motion.li key={step.title} variants={row} className="relative pl-10 md:pl-12">
                <span
                  className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-black/60 shadow-[0_0_12px_rgba(106,0,241,0.35)] md:top-2 md:h-8 md:w-8"
                  aria-hidden
                >
                  <span className="h-2 w-2 rounded-full bg-primary md:h-2.5 md:w-2.5" />
                </span>
                <GlassCard className="p-6 transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_12px_40px_rgba(106,0,241,0.12)]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {step.period}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {step.description}
                  </p>
                  <span className="mt-4 inline-block text-xs text-zinc-500">
                    Step {i + 1} of {timeline.length}
                  </span>
                </GlassCard>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
