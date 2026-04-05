"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/data";
import { cn } from "@/lib/cn";

const links = [
  { href: "#about", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#upwork", label: "Upwork" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled
          ? "border-b border-white/10 bg-black/40 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group relative font-semibold tracking-tight text-white"
        >
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent transition-opacity group-hover:opacity-90">
            {site.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </span>
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 group-hover:w-full" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline text-sm font-medium text-zinc-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-xl bg-gradient-to-r from-primary to-[#8B5CF6] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Hire me
        </a>

        <button
          type="button"
          className="inline-flex rounded-lg border border-white/10 p-2 text-zinc-200 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-b border-white/10 bg-black/80 px-4 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-1 text-zinc-200"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-2 block rounded-xl bg-primary px-4 py-2 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
