export const siteUrl = "https://dev-adarshy.in";

export const profile = {
  name: "Adarsh Yadav",
  firstName: "Adarsh",
  title: "AI Engineer & Full-Stack Developer",
  roles: ["AI Engineer", "LLM App Developer", "Full-Stack Developer", "Automation Builder"],
  headline: "I build AI products that do real work.",
  tagline:
    "LLM applications, document intelligence and workflow automation — shipped end-to-end with Next.js, Python and solid engineering.",
  location: "Patna, India",
  timezone: "Asia/Kolkata",
  email: "adarshyadav55r@gmail.com",
  phone: "+91 9546584672",
  resume: "/Adarsh_Yadav_Resume.pdf",
  photo: "/profile.webp",
  photoCasual: "/about.webp",
  socials: {
    github: "https://github.com/Adarsh55r",
    linkedin: "https://www.linkedin.com/in/adarsh-yadav-9103ab214/",
  },
  currently: {
    label: "Currently building",
    title: "DraftBid AI",
    href: "/projects/draftbid-ai/",
    note: "AI that drafts winning RFP responses",
  },
};

export const bio = [
  "I'm Adarsh — a software engineer who turns large language models into dependable products. My work sits where AI meets real business workflows: reading documents, extracting what matters, and automating the busywork around it.",
  "My path into AI started with a machine-learning internship, building predictive and classification models. Since then I've moved from classical ML to LLM-powered systems — LangChain summarisers, Gemini and Ollama chatbots, an LLM + OCR invoice pipeline, and DraftBid AI, a SaaS that drafts RFP responses.",
  "I care about the unglamorous parts that make AI usable in production: validation, human-in-the-loop review, evaluation, and clean full-stack engineering around the model.",
];

export const focusAreas = ["LLM apps", "Document AI", "Workflow automation", "AI SaaS", "Evaluation"];

export const achievements = [
  { value: "GATE", label: "CSE qualified · 2023 & 2024" },
  { value: "8.1", label: "B.Tech CGPA" },
  { value: "97.5%", label: "Invoice extraction accuracy" },
];

export const services = [
  {
    icon: "bot",
    title: "LLM applications",
    body: "Chatbots, summarisers and assistants on OpenAI, Gemini, Groq or local models via Ollama — with LangChain where it helps, and plain code where it doesn't.",
  },
  {
    icon: "scan",
    title: "Document intelligence",
    body: "OCR + LLM extraction pipelines that turn PDFs, invoices and tenders into structured, validated data — with humans in the loop for the uncertain cases.",
  },
  {
    icon: "workflow",
    title: "Workflow automation",
    body: "n8n and FastAPI services that wire AI into email, databases and approvals, so repetitive back-office work runs itself.",
  },
  {
    icon: "layers",
    title: "Full-stack AI products",
    body: "Production Next.js apps with auth, Postgres, testing and monitoring — the product around the model, not just the prompt.",
  },
] as const;

export const experience = [
  {
    period: "2025 — Present",
    role: "Independent AI Engineer",
    org: "Building AI products & automation",
    points: [
      "Building DraftBid AI — a Next.js + OpenAI SaaS that turns RFPs into compliance checklists and draft proposals.",
      "Designed an LLM + OCR invoice pipeline (n8n, FastAPI, Postgres) with validation, de-duplication and human approval.",
      "Shipped LLM tools with LangChain, Groq, Gemini and Ollama, plus PDFsmint, a web PDF toolkit.",
    ],
    tags: ["Next.js", "OpenAI", "LangChain", "n8n", "FastAPI"],
  },
  {
    period: "2024",
    role: "Software Engineering Virtual Experience",
    org: "JPMorgan Chase & Co. · Forage",
    points: ["Completed the JPMC software engineering tasks: interfacing with a stock-price data feed and visualising it."],
    tags: ["Python", "TypeScript", "Data feeds"],
  },
  {
    period: "Dec 2022 — Feb 2023",
    role: "Machine Learning Intern",
    org: "Polytrophic Services Pvt. Ltd.",
    points: [
      "Developed models for predictive analysis and data classification on real-world projects.",
      "Worked on improving model accuracy and optimising data pipelines.",
    ],
    tags: ["Python", "scikit-learn", "pandas"],
  },
  {
    period: "2019 — 2023",
    role: "B.Tech, Computer Science & Engineering",
    org: "Lok Nayak Jai Prakash Institute of Technology, Chapra",
    points: [
      "Graduated with a CGPA of 8.1; qualified GATE CSE in 2023 and 2024.",
      "Completed a 4-week C & C++ programming summer training at IIT Kanpur, rated 'Very Good'.",
    ],
    tags: ["DSA", "DBMS", "OS", "Networks"],
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
