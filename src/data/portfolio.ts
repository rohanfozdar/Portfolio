import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";

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
      "Built an ERCOT electricity spot price forecaster using XGBoost trained on 9 data sources across 2016–2024, achieving 58.8% spike rate accuracy vs. the day-ahead market's 28.9%, detecting grid stress events up to 144 hours ahead.\n\nExtending the architecture with IBM Research's Tiny Time Mixers (TTM), combining zero-shot temporal reasoning with domain-specific sentiment features to improve extreme price variation prediction.",
    result:
      "Currently in testing — set to conclude June 2026.",
    link: { label: "View project", href: "#" },
  },
  {
    id: "promotion-gauger",
    title: "Promotion Gauger",
    year: "2026",
    cover: project2,
    tags: ["NLP", "Sentiment", "RoBERTa"],
    problem:
      "For case prep at the Knox Consulting Club, too much time was being spent summarizing the advertisement impact of specific promotions. The senate had cut our budget, leaving us understaffed.",
    build:
      "A sentiment intelligence tool that takes any promotion as a keyword and pulls live data from Google News and Amazon Reviews, auto-syncing every 30 minutes.\n\nBuilt on a RoBERTa transformer fine-tuned on retail language, every source is scored across three axes: price perception, brand sentiment, and urgency.",
    result:
      "Any club member can type a promotion name and get evidence-backed sentiment scores, with source links and axis breakdowns ready to drop directly into case analysis.",
    link: { label: "View project", href: "https://promotion-gauger-gpizk83vr88fbfv8ijlaho.streamlit.app/" },
  },
  {
    id: "autosearch",
    title: "AutoSearch",
    year: "2026",
    cover: project3,
    tags: ["Vector Brain", "FAISS", "Cosine similarity"],
    problem:
      "I was frustrated with looking for jobs on LinkedIn. After 400 applications and only 20 follow-throughs, I decided I needed a platform that ranked listings by ATS scores.",
    build:
      "Shipped an end-to-end job search platform with a REST API ingestion pipeline, RAG-style semantic scoring using FAISS vector search and sentence-transformers, and an ATS scoring microservice to surface better-fit roles.\n\nEngineered an LLM-based ranking engine using PyMuPDF resume parsing, overlapping text chunking, cosine similarity matching against a FAISS vector store, and NLP-based job classification across 50+ listings per query.",
    result:
      "A fully functioning job search platform that pulls postings through API and ranks them according to resume match.",
    link: { label: "View project", href: "https://job-finder-ajfw57yx2-rohanfozdars-projects.vercel.app/" },
  },
  {
    id: "binomial-options-pricer",
    title: "Binomial Options Pricer",
    year: "2025",
    cover: project4,
    tags: ["Quant", "Finance", "Visualization"],
    problem:
      "I wanted to help my tutees understand how Implied Volatility changes can be interpreted in the market.",
    build:
      "An options pricing tool using Binomial branching with live data from YFinance for comparison, providing valuations across all possible strikes and expirations for greater accuracy.\n\nIntegrated automated risk-free rate calculations by pulling US Treasury yields based on expiration to improve accuracy over traditional measures.\n\nImplemented a 3D IV surface visualization allowing users to analyze trends across different strikes and expirations, with a module explaining how shifts in IV trends reflect market sentiment and supply & demand imbalances.",
    result:
      "Increased enrollment in Financial Mathematics (Math 227) by 30%. Received the Richter Grant funding from the Department of Mathematics at Knox.",
    link: { label: "View project", href: "https://rohanfozdar.github.io/options-pricer/" },
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
    date: "Nov 2025 — Jan 2026",
    title: "Quantitative Analytics Intern",
    org: "Monarch Networth Capital Ltd.",
    bullets: [
      "Designed a momentum trading strategy on NSE ETFs using time trend derivatives. Backtest achieved 45% returns & 3.43 Sharpe (BankNifty over 1 year).",
      "Formulated a moving average strategy using CMP against MA to quantify trends. Backtest achieved 3100% returns & 2.86 Sharpe (Nifty over 25 years).",
    ],
  },
  {
    date: "Mar 2024 — Present",
    title: "Mathematics Teaching Assistant",
    org: "Knox College Department of Mathematics",
    bullets: [
      "Developed class material and led recitation sessions for Calculus I–III, Discrete Math, Linear Algebra, Foundations of Analysis, Methods of Proof, Differential Equations, Mathematical Statistics, and Financial Math.",
      "Graded homework and exams and collaborated with other TAs to host tutoring sessions for the department.",
    ],
  },
  {
    date: "Jun 2023 — Aug 2023",
    title: "AI Intern",
    org: "MeasureOne",
    bullets: [
      "Fine-tuned early versions of ChatGPT using prompt–completion pairs to match client-specific data tables and generate specialized parser code.",
      "Designed a preprocessing pipeline that normalized heterogeneous transcript formats and engineered structured prompts — reducing manual engineering workload by 25%.",
    ],
  },
];

export const skills = [
  "JavaScript",
  "Python",
  "PowerBI",
  "R",
  "SQL",
  "C++",
  "Excel",
  "Matplotlib",
  "NumPy",
  "Pandas",
  "Java",
  "TensorFlow",
  "Tableau",
  "Matlab",
  "PyTorch",
  "FastAPI",
  "LangChain",
  "HuggingFace",
  "Snowflake",
];

export const socials = [
  { label: "Email", href: "mailto:rohan.fozdar@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rohan-fozdar/" },
  { label: "GitHub", href: "https://github.com/rohanfozdar" },
  { label: "X", href: "https://x.com/fozdar_rohan" },
];