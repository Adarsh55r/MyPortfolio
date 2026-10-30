"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { experience } from "@/content/profile";

export function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <Section
      id="experience"
      index="04"
      eyebrow="Journey"
      title={
        <>
          Experience &amp; <span className="text-gradient">education</span>.
        </>
      }
      intro="How I got from C++ and classical ML to shipping LLM products."
    >
      <ol ref={ref} className="relative ml-3 md:ml-[11.5rem]">
        <span className="absolute left-0 top-0 h-full w-px bg-line" />
        <motion.span style={{ scaleY }} className="bg-gradient-brand absolute left-0 top-0 h-full w-px origin-top" />

        {experience.map((e, i) => (
          <li key={e.role} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
            <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-gradient-to-br from-violet to-pink ring-4 ring-violet/15" />
            <Reveal delay={i * 0.05}>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-pink md:absolute md:-left-[11.5rem] md:top-1 md:w-40 md:text-right">
                {e.period}
              </p>
              <div className="group rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet/40 hover:shadow-xl hover:shadow-violet/10">
                <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                <p className="mt-0.5 text-sm text-muted">{e.org}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-pink" />
                      {p}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {e.tags.map((t) => (
                    <li key={t} className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
