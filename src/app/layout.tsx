import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Background } from "@/components/layout/Background";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "@/components/layout/Providers";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { profile, siteUrl } from "@/content/profile";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-jb", display: "swap" });

const description = `${profile.name} — ${profile.title}. ${profile.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name} — ${profile.title}`, template: `%s · ${profile.name}` },
  description,
  keywords: ["AI Engineer", "LLM", "Generative AI", "Next.js", "Full-Stack Developer", "Automation", profile.name],
  authors: [{ name: profile.name, url: siteUrl }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: siteUrl, siteName: profile.name, title: `${profile.name} — ${profile.title}`, description },
  twitter: { card: "summary_large_image", title: `${profile.name} — ${profile.title}`, description },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07070d" },
    { media: "(prefers-color-scheme: light)", color: "#f7f7fb" },
  ],
};

// Runs before paint so the saved theme never flashes.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||(!t&&matchMedia("(prefers-color-scheme: light)").matches))document.documentElement.classList.add("light")}catch(e){}`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Patna", addressCountry: "IN" },
  alumniOf: "Lok Nayak Jai Prakash Institute of Technology",
  sameAs: [profile.socials.github, profile.socials.linkedin],
  knowsAbout: ["Large Language Models", "Generative AI", "Machine Learning", "Workflow Automation", "Next.js", "Python"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body>
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Background />
          <Navbar />
          <main id="main" className="overflow-x-clip">
            {children}
          </main>
          <Footer />
          <CommandPalette />
        </Providers>
      </body>
    </html>
  );
}
