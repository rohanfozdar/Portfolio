import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export type Project = {
  id: string;
  title: string;
  year: string;
  cover: string;
  problem: string;
  build: string;
  result: string;
  link?: { label: string; href: string };
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "ercot-forecaster",
    title: "ERCOT Electricity Forecaster",
    year: "2026",
    cover: project1,
    tags: ["Forecasting", "Energy", "ML"],
    problem:
      "A tornado hit my university twice in one week, knocking out power across half the campus for days. For the first time I saw the engine production plant outside campus go dark — not obnoxiously lit up like usual. It hit me that electricity fluctuations like this must cost manufacturers serious money in regions where they happen often.",
    build:
      "An ERCOT electricity spike-rate forecaster that predicts price and load volatility windows so industrial users can hedge or shift load.\n\n• [bullet points regarding technicals to be added]",
    result:
      "Currently in testing — set to conclude June 2026.",
    link: { label: "View project", href: "#" },
  },
  {
    id: "promotion-gauger",
    title: "Promotion Gauger",
    year: "2025",
    cover: project2,
    tags: ["NLP", "Sentiment", "RoBERTa"],
    problem:
      "For case prep at the Knox Consulting Club, too much time was being spent summarizing the advertisement impact of specific promotions. The senate had cut our budget, leaving us understaffed.",
    build:
      "A sentiment intelligence tool that takes any promotion as a keyword and pulls live data from Google News and Amazon Reviews, auto-syncing every 30 minutes.\n\nBuilt on a RoBERTa transformer fine-tuned on retail language, every source is scored across three axes: price perception, brand sentiment, and urgency.",
    result:
      "Any club member can type a promotion name and get evidence-backed sentiment scores, with source links and axis breakdowns ready to drop directly into case analysis.",
    link: { label: "View project", href: "#" },
  },
  {
    id: "autosearch",
    title: "AutoSearch",
    year: "2024",
    cover: project3,
    tags: ["RAG", "FAISS", "LLM"],
    problem:
      "I was frustrated with looking for jobs on LinkedIn. After 400 applications and only 20 follow-throughs, I decided I needed a platform that ranked listings by ATS scores.",
    build:
      "Shipped an end-to-end job search platform with a REST API ingestion pipeline, RAG-style semantic scoring using FAISS vector search and sentence-transformers, and an ATS scoring microservice to surface better-fit roles.\n\nEngineered an LLM-based ranking engine using PyMuPDF resume parsing, overlapping text chunking, cosine similarity matching against a FAISS vector store, and NLP-based job classification across 50+ listings per query.",
    result:
      "A fully functioning job search platform that pulls postings through API and ranks them according to resume match.",
    link: { label: "View project", href: "#" },
  },
  {
    id: "binomial-options-pricer",
    title: "Binomial Options Pricer",
    year: "2023",
    cover: project4,
    tags: ["Quant", "Finance", "Visualization"],
    problem:
      "I wanted to help my tutees understand how Implied Volatility changes can be interpreted in the market.",
    build:
      "An options pricing tool using Binomial branching with live data from YFinance for comparison, providing valuations across all possible strikes and expirations for greater accuracy.\n\nIntegrated automated risk-free rate calculations by pulling US Treasury yields based on expiration to improve accuracy over traditional measures.\n\nImplemented a 3D IV surface visualization allowing users to analyze trends across different strikes and expirations, with a module explaining how shifts in IV trends reflect market sentiment and supply & demand imbalances.",
    result:
      "Increased enrollment in Financial Mathematics (Math 227) by 30%. Received the Richter Grant funding from the Department of Mathematics at Knox.",
    link: { label: "View project", href: "#" },
  },
];

export type Role = {
  date: string;
  title: string;
  org: string;
  bullets: string[];
};

export const roles: Role[] = [
  {
    date: "2024 — Present",
    title: "Product Designer & Engineer",
    org: "Independent",
    bullets: [
      "Designed and shipped four end-to-end products across iOS, web, and macOS.",
      "Led brand, UX, and engineering for each — from blank page to App Store.",
    ],
  },
  {
    date: "2022 — 2024",
    title: "Product Design Intern",
    org: "Notable Studio",
    bullets: [
      "Drove the redesign of a B2B analytics dashboard used by 40k+ teams.",
      "Built the team's first design-system contribution workflow.",
    ],
  },
  {
    date: "2021 — 2024",
    title: "B.S. Human–Computer Interaction",
    org: "University",
    bullets: ["Graduated with honors. Thesis on ambient computing interfaces."],
  },
];

export const skills = [
  "Product Design",
  "Figma",
  "Swift / SwiftUI",
  "React / TypeScript",
  "Design Systems",
  "Prototyping",
  "Brand",
  "Motion",
];

export const socials = [
  { label: "Email", href: "mailto:hello@rohanfozdar.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "X", href: "https://x.com" },
];