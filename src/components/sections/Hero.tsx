"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { useTypewriter } from "@/lib/useTypewriter";
import { PipelineCard } from "./PipelineCard";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const quickStats = [
  { value: "97.5%", label: "LLM extraction accuracy" },
  { value: `${projects.length}`, label: "Projects shipped" },
  { value: "2×", label: "GATE CSE qualified" },
];

export function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-svh max-w-6xl items-center gap-14 px-4 pb-16 pt-32 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="mb-7 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to AI &amp; full-stack roles
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted">
            <MapPin size={13} className="text-pink" /> {profile.location}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
        >
          I build <span className="text-gradient animate-shine">AI products</span> that do real work.
        </motion.h1>

        <motion.p variants={item} className="mt-6 min-h-[2lh] font-display text-xl text-muted sm:min-h-0 sm:text-2xl">
          Hi, I&apos;m {profile.firstName} —{" "}
          <span className="text-fg">
            {role}
            <span className="ml-0.5 inline-block w-[3px] animate-pulse bg-pink align-middle">&nbsp;</span>
          </span>
        </motion.p>

        <motion.p variants={item} className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
          <MagneticButton href="#work">
            See my work <ArrowUpRight size={16} />
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Let&apos;s talk
          </MagneticButton>
          <div className="ml-1 flex gap-2">
            {[
              { href: profile.socials.github, label: "GitHub", Icon: GithubIcon },
              { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface/60 text-muted transition duration-300 hover:-translate-y-1 hover:border-violet/60 hover:text-fg"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.dl variants={item} className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
          {quickStats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-2xl font-bold sm:text-3xl">{s.value}</dd>
              <dd className="mt-1 text-xs text-muted">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <PipelineCard />
      </motion.div>
    </section>
  );
}
