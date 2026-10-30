import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GithubIcon } from "@/components/ui/Icons";
import { ProjectIcon } from "@/components/ui/ProjectIcon";
import { Reveal } from "@/components/ui/Reveal";
import { getProject, projects } from "@/content/projects";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function ProjectPage({ params }: Params) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-5xl px-4 pb-24 pt-32 sm:px-6">
      <Link href="/#work" className="group mb-10 inline-flex items-center gap-2 text-sm text-muted transition hover:text-fg">
        <ArrowLeft size={16} className="transition group-hover:-translate-x-1" /> All projects
      </Link>

      <Reveal>
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
          <span className="text-pink">{project.category}</span>
          <span className="h-px w-8 bg-line" />
          {project.year}
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">{project.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{project.summary}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="bg-gradient-brand inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink/25 transition hover:shadow-pink/50">
              Visit live site <ArrowUpRight size={16} />
            </a>
          )}
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-6 py-3 text-sm font-semibold transition hover:border-violet/60">
            <GithubIcon className="h-4 w-4" /> Source code
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <div className={`relative grid h-64 place-items-center overflow-hidden rounded-3xl border border-line bg-gradient-to-br sm:h-80 ${project.accent}`}>
          <div className="bg-grid absolute inset-0" />
          <ProjectIcon name={project.icon} className="relative h-24 w-24 text-fg/90 drop-shadow-2xl" />
          {project.metric && (
            <div className="absolute bottom-6 right-6 rounded-2xl border border-white/20 bg-black/40 px-5 py-3 text-right text-white backdrop-blur">
              <p className="font-display text-3xl font-bold">{project.metric.value}</p>
              <p className="text-xs opacity-80">{project.metric.label}</p>
            </div>
          )}
        </div>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_280px]">
        <div className="space-y-12">
          <Reveal>
            <h2 className="mb-4 font-display text-2xl font-semibold">Overview</h2>
            <p className="leading-relaxed text-muted">{project.overview}</p>
          </Reveal>

          {project.problem && (
            <Reveal>
              <h2 className="mb-4 font-display text-2xl font-semibold">The problem</h2>
              <p className="leading-relaxed text-muted">{project.problem}</p>
            </Reveal>
          )}

          {project.steps && (
            <Reveal>
              <h2 className="mb-6 font-display text-2xl font-semibold">How it works</h2>
              <ol className="space-y-3">
                {project.steps.map((s, i) => (
                  <li key={s} className="flex items-start gap-4 rounded-2xl border border-line bg-surface/60 p-4 transition hover:border-violet/40">
                    <span className="bg-gradient-brand grid h-8 w-8 shrink-0 place-items-center rounded-lg font-mono text-xs font-bold text-white">{i + 1}</span>
                    <span className="pt-1 text-sm leading-relaxed">{s}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          )}

          <Reveal>
            <h2 className="mb-4 font-display text-2xl font-semibold">Highlights</h2>
            <ul className="space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-muted">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" /> {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Reveal className="rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Tech stack</h2>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <li key={t} className="rounded-full border border-line bg-surface-2 px-3 py-1.5 text-xs font-medium">
                  {t}
                </li>
              ))}
            </ul>
            <dl className="mt-6 space-y-3 border-t border-line pt-6 text-sm">
              <div className="flex justify-between"><dt className="text-muted">Category</dt><dd>{project.category}</dd></div>
              <div className="flex justify-between"><dt className="text-muted">Year</dt><dd>{project.year}</dd></div>
              <div className="flex justify-between"><dt className="text-muted">Status</dt><dd>{project.live ? "Live" : "Open source"}</dd></div>
            </dl>
          </Reveal>
        </aside>
      </div>

      <Link
        href={`/projects/${next.slug}/`}
        className="group mt-20 flex items-center justify-between rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-violet/50 sm:p-8"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Next project</p>
          <p className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{next.title}</p>
        </div>
        <ArrowRight className="transition group-hover:translate-x-2" />
      </Link>
    </article>
  );
}
