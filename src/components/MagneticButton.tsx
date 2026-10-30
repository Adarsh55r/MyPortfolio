import { motion, useMotionValue, useSpring } from "framer-motion";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost";
};

const styles = {
  primary:
    "bg-gradient-brand text-white shadow-lg shadow-pink/25 hover:shadow-pink/50",
  ghost:
    "border border-line bg-surface/60 text-fg backdrop-blur hover:border-violet/60 hover:bg-surface-2",
};

/** A link-button that is gently pulled toward the cursor. */
export function MagneticButton({ children, variant = "primary", className = "", ...rest }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 15 });
  const sy = useSpring(y, { stiffness: 250, damping: 15 });

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-[box-shadow,background-color,border-color] duration-300 ${styles[variant]} ${className}`}
      {...(rest as object)}
    >
      {children}
    </motion.a>
  );
}
