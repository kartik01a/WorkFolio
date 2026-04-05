import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

const AboutTimeline = dynamic(
  () =>
    import("@/components/AboutTimeline").then((m) => ({
      default: m.AboutTimeline,
    })),
  { loading: () => <SectionFallback label="Journey" /> }
);

const SkillsGrid = dynamic(
  () =>
    import("@/components/SkillsGrid").then((m) => ({ default: m.SkillsGrid })),
  { loading: () => <SectionFallback label="Skills" /> }
);

const ProjectsGrid = dynamic(
  () =>
    import("@/components/ProjectsGrid").then((m) => ({
      default: m.ProjectsGrid,
    })),
  { loading: () => <SectionFallback label="Projects" /> }
);

const UpworkSection = dynamic(
  () =>
    import("@/components/UpworkSection").then((m) => ({
      default: m.UpworkSection,
    })),
  { loading: () => <SectionFallback label="Upwork" /> }
);

const ContactForm = dynamic(
  () =>
    import("@/components/ContactForm").then((m) => ({ default: m.ContactForm })),
  { loading: () => <SectionFallback label="Contact" /> }
);

function SectionFallback({ label }: { label: string }) {
  return (
    <div
      className="flex min-h-[28vh] items-center justify-center px-4 py-16"
      aria-hidden
    >
      <div className="h-px w-24 animate-pulse rounded-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <span className="sr-only">Loading {label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutTimeline />
        <SkillsGrid />
        <ProjectsGrid />
        <UpworkSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
