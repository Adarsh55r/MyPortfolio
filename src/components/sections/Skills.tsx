import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SkillLogo } from "@/components/ui/SkillLogo";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { allSkills, skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <Section
      id="stack"
      index="05"
      eyebrow="Toolkit"
      title={
        <>
          The <span className="text-gradient">stack</span> behind the work.
        </>
      }
    >
      <div className="relative -mx-4 mb-12 overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] sm:mx-0">
        <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {[...allSkills, ...allSkills].map((s, i) => (
            <div key={i} aria-hidden={i >= allSkills.length} className="flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pl-1.5 pr-4 backdrop-blur">
              <SkillLogo skill={s} size={26} />
              <span className="whitespace-nowrap text-sm font-medium">{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.08} className="h-full">
            <SpotlightCard className="h-full p-6 sm:p-7">
              <div className="mb-6 flex items-baseline justify-between">
                <h3 className="font-display text-xl font-semibold">{g.title}</h3>
                <span className="font-mono text-xs text-muted">{g.skills.length}</span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li
                    key={s.name}
                    className="group flex items-center gap-2 rounded-xl border border-line bg-surface-2/60 py-1.5 pl-1.5 pr-3 text-sm transition duration-300 hover:-translate-y-1 hover:border-violet/50 hover:shadow-lg hover:shadow-violet/10"
                  >
                    <SkillLogo skill={s} size={28} />
                    <span className="text-muted transition group-hover:text-fg">{s.name}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted">{g.blurb}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
