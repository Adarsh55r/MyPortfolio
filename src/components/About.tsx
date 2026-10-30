import { animate, motion, useInView } from "framer-motion";
import { GraduationCap, School } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import aboutImg from "../assets/about.webp";
import { about } from "../data/portfolio";
import { Reveal, Section } from "./Section";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <Section id="about" eyebrow="Get to know me" title={<>About <span className="text-gradient">Me</span></>}>
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <motion.div
            whileHover={{ rotate: -1.5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative"
          >
            <div className="bg-gradient-brand absolute -inset-3 rotate-3 rounded-[2rem] opacity-60 blur-xl" />
            <img
              src={aboutImg}
              alt="Adarsh sitting on a bench by a misty river valley"
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-[2rem] border border-line object-cover"
            />
          </motion.div>
        </Reveal>

        <div>
          <Reveal className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
            {about.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-line bg-surface/60 p-4 text-center backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet/50"
              >
                <div className="text-gradient font-display text-2xl font-bold sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-muted sm:text-sm">{s.label}</div>
              </div>
            ))}
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {about.education.map((e, i) => {
              const Icon = e.kind === "college" ? GraduationCap : School;
              return (
                <Reveal key={e.title} delay={0.15 + i * 0.1}>
                  <div className="group h-full rounded-2xl border border-line bg-surface/60 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-pink/50 hover:shadow-xl hover:shadow-pink/10">
                    <div className="bg-gradient-brand mb-4 grid h-11 w-11 place-items-center rounded-xl text-white transition group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display font-semibold">{e.title}</h3>
                    <p className="mt-1 text-sm text-muted">{e.place}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
