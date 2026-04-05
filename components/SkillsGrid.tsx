"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Box,
  Cloud,
  Code2,
  Database,
  Layers,
  LayoutGrid,
  Palette,
  Rocket,
  Server,
  Share2,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { skillGroups } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  layout: LayoutGrid,
  code: Code2,
  palette: Palette,
  sparkles: Sparkles,
  server: Server,
  database: Database,
  share: Share2,
  layers: Layers,
  cloud: Cloud,
  rocket: Rocket,
  box: Box,
  activity: Activity,
  cursor: WandSparkles,
};

const grid = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function SkillsGrid() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Skills
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tools I ship with
          </h2>
          <p className="mt-3 text-zinc-400">
            Grouped by discipline — from interface polish to production infra.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={card}>
              <GlassCard className="group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_48px_rgba(106,0,241,0.15)]">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((s) => {
                    const Icon = iconMap[s.icon] ?? Code2;
                    return (
                      <li
                        key={s.name}
                        className="flex items-center gap-3 rounded-xl border border-transparent px-2 py-2 transition-colors hover:border-white/10 hover:bg-white/[0.03]"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-primary ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="text-sm font-medium text-zinc-300">
                          {s.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
