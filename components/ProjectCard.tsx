"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Project } from "@/lib/data";
import { ExternalLink, GitBranch } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  onOpen: () => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const tiltTransform = useMotionTemplate`perspective(1000px) rotateX(${my}deg) rotateY(${mx}deg)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x * 6);
    my.set(-y * 6);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      layout
      style={{ transform: tiltTransform, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-shadow duration-300 hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(106,0,241,0.2)]"
    >
      <button
        type="button"
        onClick={onOpen}
        className="block w-full cursor-pointer text-left"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
            {project.tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className="rounded-md bg-black/50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-zinc-200 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-zinc-400">
            {project.description}
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-zinc-500">
            {(project.liveUrl || project.repoUrl) && (
              <span className="inline-flex items-center gap-1">
                {project.liveUrl && (
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                )}
                {!project.liveUrl && project.repoUrl && (
                  <GitBranch className="h-3.5 w-3.5" aria-hidden />
                )}
                View details
              </span>
            )}
          </div>
        </div>
      </button>
    </motion.article>
  );
}
