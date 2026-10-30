"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

// A looping, illustrative run of the invoice pipeline (see /projects/invoice-automation).
const steps = [
  { label: "Ingest", detail: "invoice_0423.pdf · scanned" },
  { label: "OCR", detail: "Tesseract · 2 pages · 1.2s" },
  { label: "LLM extract", detail: "gpt-4o-mini → 14 fields" },
  { label: "Validate", detail: "totals ✓ dates ✓ vendor ✓" },
  { label: "Dedupe", detail: "hash 9f3a… unique" },
  { label: "Post", detail: "auto-approved · ₹48,250.00" },
];

export function PipelineCard() {
  const [done, setDone] = useState(0);

  useEffect(() => {
    const finished = done >= steps.length;
    const t = setTimeout(() => setDone(finished ? 0 : done + 1), finished ? 2600 : 900);
    return () => clearTimeout(t);
  }, [done]);

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="bg-gradient-brand absolute -inset-4 rounded-[2rem] opacity-30 blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/80 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-muted">invoice-pipeline.run</span>
          <span className="ml-auto rounded-full bg-emerald-400/15 px-2 py-0.5 font-mono text-[10px] text-emerald-400">live</span>
        </div>

        <ol className="space-y-1 p-4 font-mono text-[13px]">
          {steps.map((s, i) => {
            const state = i < done ? "done" : i === done ? "running" : "queued";
            return (
              <li
                key={s.label}
                className={`flex items-center gap-3 rounded-xl px-3 py-2 transition-colors duration-300 ${
                  state === "running" ? "bg-surface-2" : ""
                }`}
              >
                <span
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border transition ${
                    state === "done"
                      ? "border-emerald-400/40 bg-emerald-400/15 text-emerald-400"
                      : state === "running"
                        ? "border-violet/50 text-violet"
                        : "border-line text-muted/50"
                  }`}
                >
                  {state === "done" ? <Check size={13} /> : state === "running" ? <Loader2 size={13} className="animate-spin" /> : <span className="text-[10px]">{i + 1}</span>}
                </span>
                <span className={state === "queued" ? "text-muted/60" : "text-fg"}>{s.label}</span>
                <AnimatePresence>
                  {state !== "queued" && (
                    <motion.span
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="ml-auto truncate text-xs text-muted"
                    >
                      {s.detail}
                    </motion.span>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ol>

        <div className="border-t border-line px-4 pb-14 pt-3">
          <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
            <motion.div
              className="bg-gradient-brand h-full rounded-full"
              animate={{ width: `${(Math.min(done, steps.length) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="mt-2 flex justify-between font-mono text-[11px] text-muted">
            <span>{done >= steps.length ? "✓ completed · human review skipped" : "processing…"}</span>
            <span>{Math.min(done, steps.length)}/{steps.length}</span>
          </p>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-line bg-surface/90 p-2 pr-4 shadow-xl backdrop-blur-xl sm:-left-10"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={profile.photo} alt={profile.name} width={44} height={44} className="h-11 w-11 rounded-xl object-cover object-top" />
        <div>
          <p className="text-sm font-semibold">{profile.name}</p>
          <p className="text-xs text-muted">{profile.title}</p>
        </div>
      </motion.div>
    </div>
  );
}
