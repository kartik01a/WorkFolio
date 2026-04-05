"use client";

export function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(106,0,241,0.35),transparent_55%),radial-gradient(ellipse_80%_50%_at_100%_50%,rgba(59,130,246,0.12),transparent_50%),radial-gradient(ellipse_60%_40%_at_0%_80%,rgba(236,72,153,0.1),transparent_45%)]" />
      <div
        className="absolute -left-1/4 top-1/4 h-[min(80vw,720px)] w-[min(80vw,720px)] animate-gradient-blob rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(106,0,241,0.35)_0deg,rgba(59,130,246,0.2)_120deg,rgba(236,72,153,0.15)_240deg,rgba(106,0,241,0.35)_360deg)] opacity-60 blur-3xl"
        style={{ willChange: "transform" }}
      />
      <div
        className="absolute -right-1/4 bottom-0 h-[min(70vw,600px)] w-[min(70vw,600px)] animate-gradient-blob-reverse rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,rgba(236,72,153,0.12)_0deg,rgba(106,0,241,0.25)_180deg,rgba(59,130,246,0.15)_360deg)] opacity-50 blur-3xl"
        style={{ willChange: "transform" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.85)_100%)]" />
    </div>
  );
}
