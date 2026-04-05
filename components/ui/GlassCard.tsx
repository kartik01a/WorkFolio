import type { HTMLAttributes, ElementType } from "react";
import { cn } from "@/lib/cn";

type GlassCardProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
};

export function GlassCard({
  className,
  as: Tag = "div",
  ...props
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl",
        className
      )}
      {...props}
    />
  );
}
