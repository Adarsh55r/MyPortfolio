"use client";

import type { HTMLAttributes, MouseEvent } from "react";

/** Card whose border lights up under the pointer (see the `spotlight` utility). */
export function SpotlightCard({ className = "", onMouseMove, ...rest }: HTMLAttributes<HTMLDivElement>) {
  const track = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
    onMouseMove?.(e);
  };
  return (
    <div
      onMouseMove={track}
      className={`spotlight rounded-3xl border border-line bg-surface/60 backdrop-blur ${className}`}
      {...rest}
    />
  );
}
