import { ArrowUp } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <a href="#home" className="font-display text-lg font-bold">
            {profile.firstName}
            <span className="text-gradient">.dev</span>
          </a>
          <p className="mt-1 text-sm text-muted">Full Stack Developer · Web Designer · Programmer</p>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="transition hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:-translate-y-1 hover:text-fg">
            <GithubIcon className="h-4 w-4" />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:-translate-y-1 hover:text-fg">
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href="#home" aria-label="Back to top" className="bg-gradient-brand grid h-10 w-10 place-items-center rounded-full text-white transition hover:-translate-y-1">
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}. Crafted with React, Tailwind CSS & Framer Motion.
      </p>
    </footer>
  );
}
