"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { GithubIcon } from "@/components/ui/Icons";
import { ProjectIcon } from "@/components/ui/ProjectIcon";
import { Section } from "@/components/ui/Section";
import { profile } from "@/content/profile";
import { categories, projects, type Project } from "@/content/projects";

function ProjectCard({ project, wide, full }: { project: Project; wide: boolean; full: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className={`spotlight group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/70 backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-violet/15 ${
        wide ? "md:flex-row" : full ? "lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative grid shrink-0 place-items-center overflow-hidden bg-gradient-to-br ${project.accent} ${
          wide ? "h-52 md:h-auto md:w-[45%]" : full ? "h-44 lg:h-auto lg:w-[30%]" : "h-44"
        }`}
      >
        <div className="bg-grid absolute inset-0 opacity-70" />
        <ProjectIcon
          name={project.icon}
          className="relative h-16 w-16 text-fg/90 drop-shadow-2xl transition duration-500 group-hover:-rotate-6 group-hover:scale-125"
        />
        {project.metric && (
          <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 font-mono text-[11px] text-white backdrop-blur">
            {project.metric.value} {project.metric.label}
          </span>
        )}
        {project.live && (
          <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 font-mono text-[10px] uppercase text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted">
          <span className="text-pink">{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="mt-3 flex items-start justify-between gap-3 font-display text-xl font-semibold sm:text-2xl">
          {project.title}
          <ArrowUpRight className="mt-1 shrink-0 text-muted transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" size={20} />
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, wide ? 6 : 4).map((t) => (
            <li key={t} className="rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[11px] font-medium text-muted">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export function Work() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section
      id="work"
      index="03"
      eyebrow="Selected work"
      title={
        <>
          Things I&apos;ve <span className="text-gradient">built</span>.
        </>
      }
      intro="AI products, automation pipelines and the web foundations they grew from. Click any project for the case study."
    >
      <div role="tablist" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => {
          const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={`relative rounded-full border px-4 py-2 text-sm font-medium transition ${
                filter === c ? "border-transparent text-white" : "border-line text-muted hover:text-fg"
              }`}
            >
              {filter === c && (
                <motion.span layoutId="filter-pill" className="bg-gradient-brand absolute inset-0 -z-10 rounded-full" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
              )}
              {c} <span className="ml-1 font-mono text-[11px] opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => {
            const wide = filter === "All" && i === 0;
            // With the wide first card, a count divisible by 3 leaves one orphan: stretch it.
            const full = filter === "All" && i === shown.length - 1 && shown.length % 3 === 0;
            return (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={wide ? "md:col-span-2" : full ? "lg:col-span-3" : ""}
              >
                <ProjectCard project={p} wide={wide} full={full} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <div className="mt-12 text-center">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-muted transition hover:border-violet/50 hover:text-fg"
        >
          <GithubIcon className="h-4 w-4" /> More on GitHub
          <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </Section>
  );
}
