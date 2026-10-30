"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Mail, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { LinkedinIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { profile } from "@/content/profile";

const field =
  "w-full rounded-xl border border-line bg-surface-2/60 px-4 py-3 text-sm text-fg placeholder:text-muted/70 outline-none transition focus:border-violet focus:ring-4 focus:ring-violet/15";

const topics = ["AI / LLM product", "Workflow automation", "Full-time role", "Something else"];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [topic, setTopic] = useState(topics[0]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  // Static site, no backend: hand the message to the visitor's mail client.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `[${topic}] from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const cards = [
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { Icon: LinkedinIcon, label: "LinkedIn", value: "in/adarsh-yadav", href: profile.socials.linkedin },
    { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  ];

  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title={
        <>
          Have a workflow that should <span className="text-gradient">run itself</span>?
        </>
      }
      intro="Whether it's an AI product idea, an automation problem or a role on your team — I'd love to hear about it."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="flex flex-col gap-3">
          {cards.map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface/60 p-4 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-violet/50 hover:shadow-lg hover:shadow-violet/10"
            >
              <span className="bg-gradient-brand grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white transition group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">{label}</span>
                <span className="block truncate font-medium">{value}</span>
              </span>
            </a>
          ))}
          <button onClick={copyEmail} className="mt-1 inline-flex items-center gap-2 self-start text-sm font-medium text-muted transition hover:text-fg">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={String(copied)} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </motion.span>
            </AnimatePresence>
            {copied ? "Email copied!" : "Copy email address"}
          </button>
          <p className="mt-auto rounded-2xl border border-dashed border-line p-4 text-sm text-muted">
            ⚡ I usually reply within a day. Based in India (IST) and comfortable working async with global teams.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur sm:p-8">
            <fieldset>
              <legend className="mb-3 text-sm font-medium">What&apos;s it about?</legend>
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTopic(t)}
                    aria-pressed={topic === t}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                      topic === t ? "border-violet bg-violet/15 text-fg" : "border-line text-muted hover:text-fg"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Name</span>
                <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Email</span>
                <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-sm font-medium">Message</span>
              <textarea name="message" required rows={5} placeholder="Tell me what you're building…" className={`${field} resize-none`} />
            </label>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-gradient-brand group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white shadow-lg shadow-pink/25 transition-shadow hover:shadow-pink/50"
            >
              Send message
              <Send size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-1" />
            </motion.button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
