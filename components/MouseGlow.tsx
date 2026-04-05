"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function MouseGlow() {
  const raf = useRef<number>(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const onMove = useCallback((e: MouseEvent) => {
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    });
  }, []);

  const onLeave = useCallback(() => setVisible(false), []);

  useEffect(() => {
    window.addEventListener("mousemove", onMove, { passive: true });
    document.body.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [onMove, onLeave]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(106,0,241,0.07)_0%,transparent_65%)] opacity-0 transition-opacity duration-500"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: visible ? 1 : 0,
          willChange: "left, top, opacity",
        }}
      />
    </div>
  );
}
