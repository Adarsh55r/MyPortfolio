"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, GraduationCap, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { achievements, bio, focusAreas, profile } from "@/content/profile";

function LocalTime() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(t);
  }, []);
  const fmt = (opts: Intl.DateTimeFormatOptions) =>
    now ? new Intl.DateTimeFormat("en-IN", { timeZone: profile.timezone, ...opts }).format(now) : "--:--";
  return (
    <>
      <p className="font-display text-4xl font-bold tabular-nums">{fmt({ hour: "2-digit", minute: "2-digit", hour12: true })}</p>
      <p className="mt-1 text-sm text-muted">{fmt({ weekday: "long" })} · IST (UTC+5:30)</p>
    </>
  );
}

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title={
        <>
          Engineer first. <span className="text-gradient">AI-native</span> by choice.
        </>
      }
      intro="From classical ML to LLM-powered products — a builder who ships the whole thing."
    >
      <div className="grid auto-rows-[minmax(0,auto)] gap-4 md:grid-cols-6">
        <Reveal className="md:col-span-4 md:row-span-2">
          <SpotlightCard className="h-full p-7 sm:p-9">
            <Sparkles className="mb-6 text-pink" />
            <div className="space-y-4 text-base leading-relaxed text-muted sm:text-[17px]">
              {bio.map((p, i) => (
                <p key={i} className={i === 0 ? "text-lg text-fg sm:text-xl" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={0.05} className="md:col-span-2 md:row-span-2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="group relative h-full min-h-80 overflow-hidden rounded-3xl border border-line"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.photoCasual}
              alt="Adarsh sitting on a bench by a misty river valley"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
            <p className="absolute bottom-4 left-5 text-sm font-medium text-white">Off-screen: mountains & long walks.</p>
          </motion.div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <SpotlightCard className="h-full p-6">
            <Clock size={18} className="mb-4 text-cyan" />
            <LocalTime />
            <p className="mt-3 text-xs text-muted">Based in {profile.location} — happy to work across time zones.</p>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <Link href={profile.currently.href} className="group block h-full">
            <SpotlightCard className="h-full p-6 transition group-hover:-translate-y-1">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted">
                <span className="h-2 w-2 animate-pulse rounded-full bg-pink" /> {profile.currently.label}
              </p>
              <p className="mt-4 flex items-center gap-1 font-display text-2xl font-bold">
                {profile.currently.title}
                <ArrowUpRight size={20} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </p>
              <p className="mt-1 text-sm text-muted">{profile.currently.note}</p>
            </SpotlightCard>
          </Link>
        </Reveal>

        <Reveal delay={0.2} className="md:col-span-2">
          <SpotlightCard className="h-full p-6">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-muted">Focus areas</p>
            <ul className="flex flex-wrap gap-2">
              {focusAreas.map((f) => (
                <li key={f} className="rounded-full border border-line bg-surface-2 px-3 py-1.5 text-xs font-medium transition hover:border-violet/50 hover:text-violet">
                  {f}
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-4">
          <SpotlightCard className="grid h-full grid-cols-3 divide-x divide-line p-6">
            {achievements.map((a) => (
              <div key={a.label} className="px-3 text-center first:pl-0 last:pr-0">
                <p className="text-gradient font-display text-2xl font-bold sm:text-4xl">{a.value}</p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{a.label}</p>
              </div>
            ))}
          </SpotlightCard>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <SpotlightCard className="flex h-full items-start gap-4 p-6">
            <span className="bg-gradient-brand grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white">
              <GraduationCap size={20} />
            </span>
            <div>
              <p className="font-display font-semibold">B.Tech, CSE</p>
              <p className="text-sm text-muted">LNJPIT Chapra · 2019 – 2023</p>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </Section>
  );
}
