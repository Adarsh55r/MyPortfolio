"use client";

import { useEffect, useRef } from "react";

/** Fixed aurora blobs + grid, plus a soft glow that follows the cursor. */
export function Background() {
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      glow.current?.style.setProperty("transform", `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] animate-blob rounded-full bg-violet/25 blur-3xl light:bg-violet/20" />
      <div className="absolute -right-24 top-1/3 h-[24rem] w-[24rem] animate-blob rounded-full bg-pink/20 blur-3xl [animation-delay:-6s] light:bg-pink/15" />
      <div className="absolute -bottom-40 left-1/3 h-[26rem] w-[26rem] animate-blob rounded-full bg-cyan/15 blur-3xl [animation-delay:-12s]" />
      <div
        ref={glow}
        className="absolute left-0 top-0 hidden h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgb(139_92_246/0.12),transparent_60%)] transition-transform duration-200 ease-out md:block"
      />
    </div>
  );
}
