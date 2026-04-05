"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { site } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status !== "sent") return;
    const t = window.setTimeout(() => setStatus("idle"), 5000);
    return () => window.clearTimeout(t);
  }, [status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setError(null);
    setStatus("sending");

    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const text = await res.text();
      let data: { error?: string } = {};
      try {
        data = text ? (JSON.parse(text) as { error?: string }) : {};
      } catch {
        /* non-JSON body (e.g. proxy HTML error page) */
      }
      if (!res.ok) {
        if (res.status === 404) {
          setError("Contact service is unavailable. Please email directly.");
        } else {
          setError(data.error ?? "Could not send. Try again later.");
        }
        setStatus("idle");
        return;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setError("Network error. Check your connection and try again.");
      setStatus("idle");
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something
          </h2>
          <p className="mt-3 text-zinc-400">
            Tell me about your product, timeline, and goals — I&apos;ll reply within
            one business day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
        >
          <GlassCard className="p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
              <a
                href={`mailto:${site.email}`}
                className="link-underline inline-flex items-center gap-2 font-medium text-zinc-300 hover:text-white"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden />
                {site.emailLabel}
              </a>
              <span className="hidden sm:inline text-zinc-600">·</span>
              <div className="flex gap-4">
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-zinc-300 hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-zinc-300 hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href={site.social.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-zinc-300 hover:text-white"
                >
                  Upwork
                </a>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-zinc-500"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none ring-primary/40 transition-shadow focus:border-primary/40 focus:ring-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-zinc-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none ring-primary/40 transition-shadow focus:border-primary/40 focus:ring-2"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-zinc-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none ring-primary/40 transition-shadow focus:border-primary/40 focus:ring-2"
                  placeholder="Project scope, stack, deadlines…"
                />
              </div>
              {error && (
                <p className="text-center text-sm text-red-400/95" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-[#7c3aed] py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.01] disabled:opacity-70 sm:w-auto sm:px-10 cursor-pointer"
              >
                {status === "sent" ? (
                  "Message sent"
                ) : status === "sending" ? (
                  "Sending…"
                ) : (
                  <>
                    Send message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
              {status === "sent" && (
                <p className="text-center text-sm text-emerald-400/90">
                  Thanks — your message was sent. I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
