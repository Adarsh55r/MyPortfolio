import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Download, MapPin } from "lucide-react";
import profileImg from "../assets/profile.webp";
import { profile } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { MagneticButton } from "./MagneticButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const chips = [
  { label: "⚛️ React", className: "-left-6 top-10 sm:-left-10" },
  { label: "☕ Spring Boot", className: "-right-4 top-1/3 sm:-right-12" },
  { label: "🟢 Node.js", className: "bottom-8 -left-2 sm:-left-8" },
];

export function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-svh max-w-6xl flex-col-reverse items-center justify-center gap-14 px-4 pb-16 pt-32 sm:px-6 md:flex-row md:justify-between md:gap-10"
    >
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl text-center md:text-left">
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to opportunities
        </motion.div>

        <motion.h1 variants={item} className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Hi, I'm <span className="text-gradient animate-shine">{profile.name}</span>
        </motion.h1>

        <motion.p variants={item} className="mt-5 font-display text-2xl font-medium text-muted sm:text-3xl">
          I'm a{" "}
          <span className="text-fg">
            {role}
            <span className="ml-0.5 inline-block w-[3px] animate-pulse bg-pink align-middle">&nbsp;</span>
          </span>
        </motion.p>

        <motion.p variants={item} className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          {profile.tagline}
        </motion.p>

        <motion.p variants={item} className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted">
          <MapPin size={15} className="text-pink" /> {profile.location}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <MagneticButton href="#projects">
            View my work <ArrowUpRight size={16} />
          </MagneticButton>
          <MagneticButton href={profile.resume} target="_blank" rel="noreferrer" variant="ghost">
            <Download size={16} /> Resume
          </MagneticButton>
          <div className="ml-1 flex gap-2">
            {[
              { href: profile.socials.github, label: "GitHub", Icon: GithubIcon },
              { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface/60 text-muted transition duration-300 hover:-translate-y-1 hover:border-violet/60 hover:text-fg"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative shrink-0"
      >
        <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]">
          <div className="absolute -inset-1.5 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#8b5cf6,#ec4899,#22d3ee,#8b5cf6)] blur-[2px]" />
          <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-violet/30 to-pink/30 blur-3xl" />
          <img
            src={profileImg}
            alt={`Portrait of ${profile.name}`}
            className="relative h-full w-full rounded-full border-4 border-bg object-cover object-top"
            fetchPriority="high"
          />
          {chips.map((c, i) => (
            <motion.span
              key={c.label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { delay: 0.8 + i * 0.15 },
                scale: { delay: 0.8 + i * 0.15 },
                y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
              }}
              className={`absolute whitespace-nowrap rounded-full border border-line bg-surface/80 px-3 py-1.5 text-xs font-semibold shadow-lg backdrop-blur-md sm:text-sm ${c.className}`}
            >
              {c.label}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition hover:text-fg md:block"
      >
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="block">
          <ChevronDown />
        </motion.span>
      </a>
    </section>
  );
}
