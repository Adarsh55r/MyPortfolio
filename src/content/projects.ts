export type Category = "AI" | "Automation" | "ML" | "Web";

export type Project = {
  slug: string;
  title: string;
  category: Category;
  year: string;
  summary: string;
  overview: string;
  problem?: string;
  /** How it works, step by step. */
  steps?: string[];
  highlights: string[];
  stack: string[];
  metric?: { value: string; label: string };
  github: string;
  live?: string;
  featured?: boolean;
  /** Tailwind gradient classes for the cover. */
  accent: string;
  icon: "file-text" | "receipt" | "youtube" | "message" | "heart" | "files" | "cloud" | "credit-card" | "grid";
};

const gh = (repo: string) => `https://github.com/Adarsh55r/${repo}`;

export const projects: Project[] = [
  {
    slug: "draftbid-ai",
    title: "DraftBid AI",
    category: "AI",
    year: "2026",
    summary:
      "An AI SaaS that helps small and mid-sized businesses win RFPs — upload a tender, get a compliance checklist and a draft proposal.",
    overview:
      "DraftBid AI is a B2B SaaS for teams that respond to RFPs, public-sector tenders and security questionnaires. You upload the document; it extracts every requirement into a compliance checklist, drafts answers grounded in your own content library, and exports a ready-to-edit Word proposal.",
    problem:
      "Responding to an RFP means hours of reading dense documents, tracking dozens of mandatory requirements and re-writing the same answers. Small businesses lose bids simply because they can't keep up.",
    steps: [
      "Upload an RFP, tender or security questionnaire.",
      "The LLM extracts requirements into a structured compliance checklist.",
      "Answers are drafted from the company's own answer library.",
      "The team reviews, edits and exports a Word proposal.",
    ],
    highlights: [
      "Next.js 15 App Router product with Clerk authentication",
      "Postgres + Prisma data model for documents, libraries and drafts",
      "AI evaluation scripts to keep output quality measurable",
      "Sentry monitoring and Vitest test suite",
    ],
    stack: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL", "Prisma", "Clerk", "Tailwind CSS", "Sentry", "Vitest"],
    github: gh("RFP-automation"),
    live: "https://www.draftbidai.com/",
    featured: true,
    accent: "from-violet-600/40 via-fuchsia-500/25 to-pink-500/40",
    icon: "file-text",
  },
  {
    slug: "invoice-automation",
    title: "Invoice Automation Pipeline",
    category: "Automation",
    year: "2026",
    summary:
      "A self-hosted pipeline that reads invoice PDFs, extracts fields with an LLM, validates them and routes uncertain ones to a human.",
    overview:
      "An end-to-end invoice processing system built on n8n. It accepts text or scanned PDFs, runs OCR when needed, extracts structured fields with an LLM, applies business validation rules, blocks duplicates, and either auto-posts the invoice or asks a person to approve it by email.",
    problem:
      "Manual invoice entry is slow and error-prone, but fully automatic extraction can't be trusted blindly. The goal was automation with guard-rails.",
    steps: [
      "Invoice PDF arrives — text-based or scanned.",
      "A FastAPI OCR service (PyMuPDF + Tesseract) extracts the text.",
      "GPT-4o-mini turns the text into structured invoice fields.",
      "Rule checks validate totals, dates and required fields.",
      "A unique hash in Postgres blocks duplicate invoices.",
      "Clean invoices auto-post; uncertain ones go to Gmail for Approve / Reject.",
    ],
    highlights: [
      "39 of 40 synthetic test invoices extracted fully correctly",
      "Human-in-the-loop approvals via Gmail “send and wait”",
      "Idempotent de-duplication with a UNIQUE hash constraint",
      "Runs fully self-hosted with Docker",
    ],
    stack: ["n8n", "OpenAI", "FastAPI", "Tesseract OCR", "PyMuPDF", "PostgreSQL", "Docker"],
    metric: { value: "97.5%", label: "invoices fully correct" },
    github: gh("Invoice-automation"),
    featured: true,
    accent: "from-emerald-500/35 via-teal-500/20 to-cyan-500/40",
    icon: "receipt",
  },
  {
    slug: "youtube-web-summarizer",
    title: "YouTube & Web Summarizer",
    category: "AI",
    year: "2026",
    summary:
      "Paste a YouTube or web URL and get a concise summary — written in the content's own language — powered by LangChain and Groq.",
    overview:
      "A Streamlit app that summarises YouTube videos from their transcripts, or any blog/web page from its text. It uses LangChain loaders to fetch content and a Groq-hosted open-weight model for fast, low-cost summarisation that answers in the source language.",
    steps: [
      "User pastes a YouTube or website URL.",
      "LangChain loads the transcript (YouTube) or page text (WebBaseLoader).",
      "A Groq-hosted LLM summarises it in the content's language.",
    ],
    highlights: [
      "Handles both video transcripts and web articles",
      "Multilingual output that matches the source",
      "URL validation and graceful error handling",
    ],
    stack: ["Python", "LangChain", "Groq", "Streamlit", "BeautifulSoup"],
    github: gh("YT_Video_URL_summary"),
    featured: true,
    accent: "from-red-500/35 via-orange-500/20 to-amber-400/35",
    icon: "youtube",
  },
  {
    slug: "qa-chatbot",
    title: "Q&A Chatbot — Gemini & Ollama",
    category: "AI",
    year: "2026",
    summary:
      "A conversational Q&A assistant with two interchangeable backends: Google Gemini in the cloud or local open models through Ollama.",
    overview:
      "A Python Q&A chatbot built twice over the same interface — once on Google Gemini and once on local models served by Ollama — to compare hosted and private, on-device LLMs for question answering.",
    highlights: [
      "Swap between a hosted and a fully local LLM",
      "Explores cost, latency and privacy trade-offs",
    ],
    stack: ["Python", "Google Gemini", "Ollama"],
    github: gh("QA_chatBot_UsingGemini"),
    accent: "from-sky-500/35 via-indigo-500/20 to-violet-500/35",
    icon: "message",
  },
  {
    slug: "heart-disease-prediction",
    title: "Heart Disease Prediction",
    category: "ML",
    year: "2025",
    summary:
      "Compared six classifiers on the Cleveland heart dataset and deployed the best one (KNN) behind a Flask web app.",
    overview:
      "A classical machine-learning project: exploratory analysis of the Cleveland heart-disease dataset (297 patients, 13 features), a comparison of six classifiers, and a Flask app where users enter clinical values like cholesterol and resting ECG to get a risk prediction.",
    steps: [
      "Exploratory data analysis with pandas, matplotlib and seaborn.",
      "Scaled pipelines for LR, KNN, SVC, Decision Tree, Random Forest and AdaBoost.",
      "ROC and threshold analysis to pick the final model (KNN).",
      "Model served via a Flask web form.",
    ],
    highlights: ["Six-model comparison with ROC analysis", "Deployed as a Flask web app"],
    stack: ["Python", "scikit-learn", "pandas", "seaborn", "Flask"],
    github: gh("Heart-disease-predication"),
    accent: "from-rose-500/35 via-pink-500/20 to-fuchsia-500/35",
    icon: "heart",
  },
  {
    slug: "pdfsmint",
    title: "PDFsmint",
    category: "Web",
    year: "2026",
    summary: "A suite of online PDF tools built with Next.js, TypeScript and Tailwind, with SEO-focused pages.",
    overview: "PDFsmint is a web PDF toolkit built on the Next.js App Router, deployed on Vercel.",
    highlights: ["Next.js App Router with SEO-focused tool pages", "Deployed on Vercel"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: gh("PDFsmint"),
    live: "https://pdf-tools-phi-one.vercel.app",
    accent: "from-amber-400/35 via-orange-500/20 to-rose-500/35",
    icon: "files",
  },
  {
    slug: "weather-app",
    title: "Weather App",
    category: "Web",
    year: "2024",
    summary: "Real-time weather and forecasts for any city using the OpenWeather API, with a responsive UI.",
    overview:
      "A dynamic weather app that retrieves real-time data from the OpenWeather API, with careful API parsing and error handling, and a responsive layout across devices.",
    highlights: ["OpenWeather API integration", "Responsive across screen sizes", "Robust error handling"],
    stack: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
    github: gh("WeatherApp"),
    live: "https://adarsh55r.github.io/WeatherApp/",
    accent: "from-cyan-400/35 via-sky-500/20 to-blue-500/35",
    icon: "cloud",
  },
  {
    slug: "razorpay-clone",
    title: "Razorpay Clone",
    category: "Web",
    year: "2024",
    summary: "A Tailwind CSS recreation of a payment-gateway landing page with simulated payment interactions.",
    overview:
      "A front-end clone of a payment-gateway marketing site built with HTML, Tailwind CSS and JavaScript, focused on responsive layout and simulated payment interactions.",
    highlights: ["Utility-first, responsive Tailwind layout", "Interactive JavaScript payment simulation"],
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    github: gh("RozarpayClone"),
    accent: "from-blue-500/35 via-indigo-500/20 to-sky-400/35",
    icon: "credit-card",
  },
  {
    slug: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    category: "Web",
    year: "2024",
    summary: "Two-player browser game with automatic win/draw detection, turn display and reset.",
    overview: "A two-player Tic-Tac-Toe game with win and draw detection, a current-turn indicator and a reset option.",
    highlights: ["Win / draw detection", "Clean, minimal UI"],
    stack: ["JavaScript", "HTML", "CSS"],
    github: gh("Tic-Tac-Toe"),
    accent: "from-slate-400/30 via-violet-500/20 to-slate-500/30",
    icon: "grid",
  },
];

export const categories: ("All" | Category)[] = ["All", "AI", "Automation", "ML", "Web"];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
