import { Bot, Layers, ScanText, Workflow } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { services } from "@/content/profile";

const icons = { bot: Bot, scan: ScanText, workflow: Workflow, layers: Layers };

export function Services() {
  return (
    <Section
      id="services"
      index="02"
      eyebrow="What I do"
      title={
        <>
          From prompt to <span className="text-gradient">production</span>.
        </>
      }
      intro="The model is the easy part. I build the pipeline, product and guard-rails around it."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal key={s.title} delay={i * 0.08} className="h-full">
              <SpotlightCard className="group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1.5">
                <div className="mb-8 flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-surface-2 text-fg transition duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-violet group-hover:to-pink group-hover:text-white">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
