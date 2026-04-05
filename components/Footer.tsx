import { site } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-black/40 py-10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-zinc-500 sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <p>
          © {year} {site.name}. Crafted with Next.js & Tailwind.
        </p>
        <p className="text-zinc-600">
          Performance-first • Accessible • Production-ready
        </p>
      </div>
    </footer>
  );
}
