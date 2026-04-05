import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { MouseGlow } from "@/components/MouseGlow";
import { site } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pageTitle = `${site.name} — ${site.title}`;

export const metadata: Metadata = {
  title: {
    default: pageTitle,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: pageTitle,
    description: site.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full overflow-x-hidden bg-[#030014] font-sans text-zinc-100">
        <LenisProvider>
          <AnimatedBackground />
          <MouseGlow />
          <div className="relative z-10">{children}</div>
        </LenisProvider>
      </body>
    </html>
  );
}
