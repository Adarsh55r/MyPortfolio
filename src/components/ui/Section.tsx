import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
};

/** Page section with a numbered, left-aligned editorial heading. */
export function Section({ id, index, eyebrow, title, intro, children }: Props) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 md:py-28">
      <Reveal className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            <span className="text-pink">{index}</span>
            <span className="h-px w-8 bg-line" />
            {eyebrow}
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
        </div>
        {intro && <p className="max-w-md text-muted md:text-right">{intro}</p>}
      </Reveal>
      {children}
    </section>
  );
}
