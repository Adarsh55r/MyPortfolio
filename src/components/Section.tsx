import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-14 text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-pink">{eyebrow}</p>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

/** Fades + lifts its children in when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
