import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { MouseEvent } from "react";
import { profile, projects, type Project } from "../data/portfolio";
import { GithubIcon } from "./Icons";
import { Reveal, Section } from "./Section";

function ProjectCard({ project }: { project: Project }) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="spotlight group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/70 backdrop-blur transition-shadow duration-500 hover:shadow-2xl hover:shadow-violet/20"
    >
      <div className={`relative grid h-48 place-items-center overflow-hidden bg-gradient-to-br ${project.accent}`}>
        <div className="bg-grid absolute inset-0 opacity-60" />
        <span className="relative text-7xl drop-shadow-2xl transition duration-500 group-hover:-rotate-6 group-hover:scale-125">
          {project.emoji}
        </span>
        <ArrowUpRight className="absolute right-4 top-4 text-fg/60 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs font-medium text-muted">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="relative z-10 inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-semibold transition hover:border-violet/60 hover:bg-surface-2"
          >
            <GithubIcon className="h-4 w-4" /> Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-brand relative z-10 inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-pink/30"
            >
              <ExternalLink size={15} /> Live demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Browse my recent" title={<>Featured <span className="text-gradient">Projects</span></>}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12 text-center">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-fg"
        >
          See more on GitHub
          <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </Reveal>
    </Section>
  );
}
