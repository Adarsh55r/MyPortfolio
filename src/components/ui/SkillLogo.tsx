import type { Skill } from "@/content/skills";

/** Brand logo when we have one, otherwise a gradient monogram. */
export function SkillLogo({ skill, size = 40 }: { skill: Skill; size?: number }) {
  if (skill.icon) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={skill.icon}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        className={`object-contain ${skill.invert ? "invert light:invert-0" : ""}`}
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
      className="grid place-items-center rounded-xl bg-gradient-to-br from-violet/25 to-pink/25 font-display font-bold text-fg ring-1 ring-line"
    >
      {skill.name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2)}
    </span>
  );
}
