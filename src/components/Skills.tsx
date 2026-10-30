import { motion } from "framer-motion";
import { skillGroups, type Skill } from "../data/portfolio";
import { Reveal, Section } from "./Section";

const all = skillGroups.flatMap((g) => g.skills);

function Logo({ skill, className = "" }: { skill: Skill; className?: string }) {
  return (
    <img
      src={skill.icon}
      alt=""
      loading="lazy"
      className={`object-contain ${skill.invert ? "invert light:invert-0" : ""} ${className}`}
    />
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="Explore my" title={<>Tech <span className="text-gradient">Stack</span></>}>
      {/* Infinite logo marquee */}
      <div className="relative -mx-4 mb-16 overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] sm:mx-0">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {[...all, ...all].map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-4 py-2 backdrop-blur"
            >
              <Logo skill={s} className="h-6 w-6" />
              <span className="whitespace-nowrap text-sm font-medium">{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.08}>
            <div
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
              className="spotlight h-full rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur sm:p-7"
            >
              <h3 className="font-display text-xl font-semibold">{g.title}</h3>
              <p className="mb-6 mt-1 text-sm text-muted">{g.blurb}</p>
              <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                {g.skills.map((s, i) => (
                  <motion.li
                    key={s.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ y: -6, scale: 1.06 }}
                    className="group flex flex-col items-center gap-2 rounded-2xl border border-transparent p-3 transition-colors hover:border-line hover:bg-surface-2"
                  >
                    <Logo
                      skill={s}
                      className="h-10 w-10 transition duration-300 group-hover:drop-shadow-[0_0_14px_rgb(236_72_153/0.55)]"
                    />
                    <span className="text-center text-xs font-medium text-muted transition group-hover:text-fg">
                      {s.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
