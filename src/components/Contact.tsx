import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Mail, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { profile } from "../data/portfolio";
import { LinkedinIcon } from "./Icons";
import { Reveal, Section } from "./Section";

const field =
  "w-full rounded-xl border border-line bg-surface-2/60 px-4 py-3 text-sm text-fg placeholder:text-muted/70 outline-none transition focus:border-violet focus:ring-4 focus:ring-violet/15";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  // No backend: hand the message to the visitor's mail client.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Portfolio enquiry from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const cards = [
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { Icon: LinkedinIcon, label: "LinkedIn", value: "adarsh-yadav", href: profile.socials.linkedin },
    { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  ];

  return (
    <Section id="contact" eyebrow="Get in touch" title={<>Let's build something <span className="text-gradient">great</span></>}>
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="space-y-4">
          <p className="mb-6 text-muted">
            Have a project, an opportunity or just want to say hi? My inbox is always open — I'll get back to you as soon as I can.
          </p>
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
                <span className="block text-xs uppercase tracking-wider text-muted">{label}</span>
                <span className="block truncate font-medium">{value}</span>
              </span>
            </a>
          ))}
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-fg"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={String(copied)} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </motion.span>
            </AnimatePresence>
            {copied ? "Email copied!" : "Copy email address"}
          </button>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Name</span>
                <input name="name" required placeholder="Your name" className={field} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Email</span>
                <input name="email" type="email" required placeholder="you@example.com" className={field} />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-sm font-medium">Message</span>
              <textarea name="message" required rows={5} placeholder="Tell me about your project…" className={`${field} resize-none`} />
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
