"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { upwork } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";

export function UpworkSection() {
  return (
    <section
      id="upwork"
      className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Upwork
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted on platform
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard className="relative overflow-hidden p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-primary">
                  <BadgeCheck className="h-5 w-5" aria-hidden />
                  <span className="text-sm font-semibold">{upwork.headline}</span>
                </div>
                <p className="mt-4 text-base leading-relaxed text-zinc-400">
                  {upwork.summary}
                </p>
              </div>
              <a
                href={upwork.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-[#7c3aed] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
              >
                View profile
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {upwork.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-center"
                >
                  <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-white sm:text-xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
