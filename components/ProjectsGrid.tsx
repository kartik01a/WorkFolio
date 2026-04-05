"use client";

import { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/lib/data";

const ProjectModal = dynamic(
  () =>
    import("@/components/ProjectModal").then((m) => ({
      default: m.ProjectModal,
    })),
  { ssr: false }
);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ProjectsGrid() {
  const [selected, setSelected] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <section
      id="projects"
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
            Work
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Selected projects
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-zinc-400">
            Real-world builds focused on performance, clarity, and measurable
            outcomes — click a card for the full story.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard
                project={project}
                onOpen={() => setSelected(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={closeModal} />
    </section>
  );
}
