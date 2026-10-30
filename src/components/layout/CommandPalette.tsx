"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Copy, CornerDownLeft, Download, FolderGit2, Hash, Mail, Moon, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { navLinks, profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { useApp } from "./Providers";

type Item = { id: string; group: string; label: string; hint?: string; icon: ReactNode; run: () => void };

export function CommandPalette() {
  const { paletteOpen: open, setPaletteOpen: setOpen, toggleTheme } = useApp();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo<Item[]>(() => {
    const go = (href: string) => () => router.push(href);
    const open = (href: string) => () => window.open(href, "_blank", "noopener");
    return [
      ...navLinks.map((l) => ({ id: `s-${l.id}`, group: "Sections", label: l.label, icon: <Hash size={16} />, run: go(`/#${l.id}`) })),
      ...projects.map((p) => ({
        id: `p-${p.slug}`,
        group: "Projects",
        label: p.title,
        hint: p.category,
        icon: <FolderGit2 size={16} />,
        run: go(`/projects/${p.slug}/`),
      })),
      { id: "a-email", group: "Actions", label: "Copy email address", icon: <Copy size={16} />, run: () => navigator.clipboard?.writeText(profile.email) },
      { id: "a-mail", group: "Actions", label: "Send an email", icon: <Mail size={16} />, run: () => (window.location.href = `mailto:${profile.email}`) },
      { id: "a-theme", group: "Actions", label: "Toggle light / dark theme", icon: <Moon size={16} />, run: toggleTheme },
      { id: "a-cv", group: "Actions", label: "Download résumé", icon: <Download size={16} />, run: open(profile.resume) },
      { id: "l-gh", group: "Links", label: "GitHub", icon: <GithubIcon className="h-4 w-4" />, run: open(profile.socials.github) },
      { id: "l-li", group: "Links", label: "LinkedIn", icon: <LinkedinIcon className="h-4 w-4" />, run: open(profile.socials.linkedin) },
    ];
  }, [router, toggleTheme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? items.filter((i) => `${i.label} ${i.group} ${i.hint ?? ""}`.toLowerCase().includes(q)) : items;
  }, [items, query]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setCursor(0);
    requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  useEffect(() => setCursor(0), [query]);

  const select = (item?: Item) => {
    if (!item) return;
    setOpen(false);
    item.run();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter") {
      select(filtered[cursor]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  let lastGroup = "";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start justify-center bg-black/50 px-4 pt-[12vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={onKeyDown}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search size={18} className="text-muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections, projects, actions…"
                className="h-14 flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
              />
              <kbd className="rounded-md border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted">ESC</kbd>
            </div>
            <ul className="max-h-[50vh] overflow-y-auto p-2">
              {filtered.length === 0 && <li className="px-3 py-8 text-center text-sm text-muted">No results for “{query}”.</li>}
              {filtered.map((item, i) => {
                const header = item.group !== lastGroup ? item.group : null;
                lastGroup = item.group;
                return (
                  <li key={item.id}>
                    {header && <p className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-widest text-muted">{header}</p>}
                    <button
                      onMouseEnter={() => setCursor(i)}
                      onClick={() => select(item)}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                        i === cursor ? "bg-surface-2 text-fg" : "text-muted"
                      }`}
                    >
                      <span className={i === cursor ? "text-pink" : ""}>{item.icon}</span>
                      <span className="flex-1">{item.label}</span>
                      {item.hint && <span className="font-mono text-[10px] uppercase text-muted">{item.hint}</span>}
                      {i === cursor ? <CornerDownLeft size={14} /> : <ArrowRight size={14} className="opacity-0" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
