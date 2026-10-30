export type Skill = { name: string; icon?: string; invert?: boolean };

const s = (name: string, icon?: string, invert?: boolean): Skill => ({
  name,
  icon: icon && `/stack/${icon}`,
  invert,
});

export const skillGroups: { title: string; blurb: string; skills: Skill[] }[] = [
  {
    title: "AI & Machine Learning",
    blurb: "Models, frameworks and providers I build with.",
    skills: [
      s("Python", "python.png"),
      s("OpenAI"),
      s("Gemini"),
      s("Groq"),
      s("Ollama"),
      s("LangChain"),
      s("scikit-learn"),
      s("pandas"),
      s("Streamlit"),
      s("n8n"),
    ],
  },
  {
    title: "Backend & Data",
    blurb: "APIs, services and storage.",
    skills: [
      s("FastAPI"),
      s("Flask"),
      s("Node.js", "NodeJs.svg"),
      s("Express", "Express.png", true),
      s("PostgreSQL"),
      s("Prisma"),
      s("MongoDB", "MongoDB.svg"),
      s("SQL", "sql.png"),
      s("Java", "java.png"),
      s("Spring Boot", "spring_boot.png"),
    ],
  },
  {
    title: "Frontend",
    blurb: "Interfaces that feel fast and look sharp.",
    skills: [
      s("Next.js", "Next.svg", true),
      s("React", "React.png"),
      s("TypeScript", "Typescript.svg"),
      s("JavaScript", "Javascript.svg"),
      s("Tailwind CSS", "Tailwind.png"),
      s("Redux", "Redux.svg"),
      s("HTML", "HTML.png"),
      s("CSS", "CSS.png"),
    ],
  },
  {
    title: "DevOps & Tools",
    blurb: "Shipping it, and keeping it running.",
    skills: [
      s("Docker", "Docker.svg"),
      s("Git", "Git.svg"),
      s("GitHub", "Github.svg", true),
      s("Vercel", "Vercel.svg", true),
      s("Kubernetes", "K8s.svg"),
      s("Bash", "Bash.svg"),
      s("C++", "cpp.png"),
    ],
  },
];

export const allSkills = skillGroups.flatMap((g) => g.skills);
