import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { navLinks, profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="font-display text-2xl font-bold">
            {profile.firstName}
            <span className="text-gradient">.ai</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{profile.headline} {profile.tagline}</p>
        </div>
        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Navigate</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <Link href={`/#${l.id}`} className="text-muted transition hover:text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Connect</h3>
          <div className="flex gap-2">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:-translate-y-1 hover:text-fg">
              <GithubIcon className="h-4 w-4" />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:-translate-y-1 hover:text-fg">
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
          <a href={`mailto:${profile.email}`} className="mt-4 block text-sm text-muted transition hover:text-fg">
            {profile.email}
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between border-t border-line px-4 py-6 text-xs text-muted sm:px-6">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind CSS & Framer Motion.</p>
        <a href="#main" aria-label="Back to top" className="bg-gradient-brand grid h-9 w-9 shrink-0 place-items-center rounded-full text-white transition hover:-translate-y-1">
          <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}
