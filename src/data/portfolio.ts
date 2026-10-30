// All site content lives here, so updating the portfolio never means touching components.

const stack = import.meta.glob<string>("../assets/stack/*", {
  eager: true,
  import: "default",
});
const icon = (file: string) => stack[`../assets/stack/${file}`];

export const profile = {
  name: "Adarsh Yadav",
  firstName: "Adarsh",
  roles: ["Full Stack Developer", "Web Developer", "Backend Developer", "Problem Solver"],
  tagline:
    "I build fast, accessible and beautifully crafted web applications — from pixel-perfect interfaces to robust Java & Node.js backends.",
  location: "Patna, Bihar, India",
  email: "adarshyadav55r@gmail.com",
  phone: "+91 9546584672",
  resume: "/Adarsh_Yadav_Resume.pdf",
  socials: {
    github: "https://github.com/Adarsh55r",
    linkedin: "https://www.linkedin.com/in/adarsh-yadav-9103ab214/",
  },
};

export const about = {
  paragraphs: [
    "Hello! I'm Adarsh, a dedicated and enthusiastic software developer with a strong passion for creating efficient and robust applications.",
    "As a fresher, I bring a blend of academic knowledge and hands-on skills in coding, problem-solving and collaboration. I work across C/C++, Python, Java and JavaScript, with experience in developing web applications, designing databases and debugging software.",
    "I communicate clearly, love solving hard problems, and care about writing clean code that meets industry standards.",
  ],
  stats: [
    { value: 25, suffix: "+", label: "Technologies" },
    { value: 3, suffix: "+", label: "Projects shipped" },
    { value: 100, suffix: "%", label: "Curiosity" },
  ],
  education: [
    {
      title: "B.Tech — Computer Science & Engineering",
      place: "Lok Nayak Jai Prakash Institute of Technology",
      kind: "college" as const,
    },
    {
      title: "Higher Secondary (12th) — BSEB",
      place: "Ram Krishna Dwarika College, Patna",
      kind: "school" as const,
    },
  ],
};

export type Skill = { name: string; icon: string; invert?: boolean };

export const skillGroups: { title: string; blurb: string; skills: Skill[] }[] = [
  {
    title: "Languages",
    blurb: "The fundamentals I think in.",
    skills: [
      { name: "C++", icon: icon("cpp.png") },
      { name: "Java", icon: icon("java.png") },
      { name: "Python", icon: icon("python.png") },
      { name: "JavaScript", icon: icon("Javascript.svg") },
      { name: "TypeScript", icon: icon("Typescript.svg") },
      { name: "SQL", icon: icon("sql.png") },
      { name: "Bash", icon: icon("Bash.svg") },
    ],
  },
  {
    title: "Frontend",
    blurb: "Interfaces that feel fast and look sharp.",
    skills: [
      { name: "HTML", icon: icon("HTML.png") },
      { name: "CSS", icon: icon("CSS.png") },
      { name: "React", icon: icon("React.png") },
      { name: "Next.js", icon: icon("Next.svg"), invert: true },
      { name: "Redux", icon: icon("Redux.svg") },
      { name: "Tailwind", icon: icon("Tailwind.png") },
      { name: "Bootstrap", icon: icon("Bootstrap.svg") },
      { name: "Material UI", icon: icon("MaterialUI.svg") },
      { name: "Chart.js", icon: icon("ChartJs.svg") },
    ],
  },
  {
    title: "Backend & Data",
    blurb: "APIs and services that scale.",
    skills: [
      { name: "Node.js", icon: icon("NodeJs.svg") },
      { name: "Express", icon: icon("Express.png"), invert: true },
      { name: "Spring Boot", icon: icon("spring_boot.png") },
      { name: "Hibernate", icon: icon("hibernet.png") },
      { name: "Maven", icon: icon("maven.png") },
      { name: "GraphQL", icon: icon("Graphql.svg") },
      { name: "MongoDB", icon: icon("MongoDB.svg") },
    ],
  },
  {
    title: "DevOps & Tools",
    blurb: "Shipping it, reliably.",
    skills: [
      { name: "Git", icon: icon("Git.svg") },
      { name: "GitHub", icon: icon("Github.svg"), invert: true },
      { name: "Docker", icon: icon("Docker.svg") },
      { name: "Kubernetes", icon: icon("K8s.svg") },
      { name: "Vercel", icon: icon("Vercel.svg"), invert: true },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  accent: string;
  emoji: string;
};

export const projects: Project[] = [
  {
    title: "Weather App",
    description:
      "Real-time weather for any city with current conditions, humidity and wind — powered by a public weather API with a clean, responsive UI.",
    tags: ["JavaScript", "REST API", "CSS"],
    github: "https://github.com/Adarsh55r/WeatherApp",
    live: "https://adarsh55r.github.io/WeatherApp/",
    accent: "from-cyan-400/30 via-sky-500/20 to-violet-500/30",
    emoji: "⛅",
  },
  {
    title: "Rock Paper Scissors",
    description:
      "A playful browser game against the computer with live score tracking, animated feedback and keyboard-friendly controls.",
    tags: ["JavaScript", "DOM", "Game logic"],
    github: "https://github.com/Adarsh55r",
    accent: "from-pink-500/30 via-rose-500/20 to-orange-400/30",
    emoji: "✊",
  },
  {
    title: "Quincy Music Player",
    description:
      "A sleek music player with playlist support, play/pause/seek controls and a progress bar — built with the HTML5 Audio API.",
    tags: ["JavaScript", "Audio API", "UI"],
    github: "https://github.com/Adarsh55r",
    accent: "from-violet-500/30 via-fuchsia-500/20 to-pink-500/30",
    emoji: "🎧",
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
