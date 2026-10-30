"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Search, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/content/profile";
import { useActiveSection } from "@/lib/useActiveSection";
import { useApp } from "./Providers";

const ids = ["home", ...navLinks.map((l) => l.id)];
const noIds: string[] = [];

export function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const active = useActiveSection(onHome ? ids : noIds);
  const { theme, toggleTheme, setPaletteOpen } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-3 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled || open ? "border-line bg-bg/75 shadow-xl shadow-black/10 backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <Link href="/" className="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight">
          <span className="bg-gradient-brand grid h-9 w-9 place-items-center rounded-xl text-sm text-white transition group-hover:rotate-6">
            AY
          </span>
          <span className="hidden sm:inline">
            {profile.firstName}
            <span className="text-gradient">.ai</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <Link
                href={`/#${l.id}`}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === l.id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setPaletteOpen(true)}
            className="hidden items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-2 text-xs text-muted transition hover:border-violet/50 hover:text-fg sm:flex"
            aria-label="Open command palette"
          >
            <Search size={14} /> <span className="font-mono">⌘K</span>
          </button>
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/60 text-muted transition hover:rotate-12 hover:text-fg"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <Link
            href="/#contact"
            className="bg-gradient-brand hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-pink/30 md:inline-block"
          >
            Let&apos;s talk
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/60 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-bg/90 p-3 backdrop-blur-xl lg:hidden"
          >
            {navLinks.map((l, i) => (
              <motion.div key={l.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                <Link
                  href={`/#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 font-medium transition hover:bg-surface-2 ${
                    active === l.id ? "text-fg" : "text-muted"
                  }`}
                >
                  {l.label}
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                </Link>
              </motion.div>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-brand mt-2 block rounded-xl px-4 py-3 text-center font-semibold text-white"
            >
              Download résumé
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
