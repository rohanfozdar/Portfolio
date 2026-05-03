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
  insight: string;
  build: string;
  result: string;
  link?: { label: string; href: string };
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "session-tracker",
    title: "Belay",
    year: "2025",
    cover: project1,
    tags: ["Product Design", "iOS", "Swift"],
    problem:
      "I kept forgetting which routes I'd sent at the climbing gym, and existing trackers felt like data-entry chores.",
    insight:
      "Climbers don't want a spreadsheet — they want a journal. A session is an emotional arc, not a list of grades.",
    build:
      "A one-tap session logger with a beautiful timeline. Routes, attempts, and notes captured in seconds; weekly recaps surface patterns.",
    result:
      "Used by 200+ climbers in early beta. Featured in r/climbharder. People log 3× more sessions vs. their previous tool.",
    link: { label: "View case study", href: "#" },
  },
  {
    id: "study-os",
    title: "Marginal",
    year: "2024",
    cover: project2,
    tags: ["Web", "AI", "React"],
    problem:
      "Studying for finals meant juggling six tabs, three PDFs, and a notebook — and still missing the connections.",
    insight:
      "Notes are most valuable at the moment of confusion, not after. The reading surface itself should be the workspace.",
    build:
      "A reader that lets you margin-annotate any PDF or article, and an AI that quietly stitches your notes into a study graph.",
    result:
      "Saved my own GPA. 1.2k weekly active students at launch; average session 38 minutes.",
    link: { label: "Try it", href: "#" },
  },
  {
    id: "kitchen-os",
    title: "Mise",
    year: "2024",
    cover: project3,
    tags: ["Mobile", "Design Systems"],
    problem:
      "Cooking from a recipe with greasy hands and a phone that kept locking was, frankly, miserable.",
    insight:
      "Recipes aren't documents — they're choreography. The interface should follow your hands, not the other way around.",
    build:
      "A voice-first cooking companion with step-locked timers, ingredient-aware swaps, and a hands-free mode that actually works.",
    result:
      "Hit #14 in Food & Drink on the App Store. 4.8★ across 600+ reviews.",
    link: { label: "App Store", href: "#" },
  },
  {
    id: "calm-inbox",
    title: "Quiet",
    year: "2023",
    cover: project4,
    tags: ["Productivity", "macOS"],
    problem:
      "My inbox was the loudest room in my life — and the one I had the least control over.",
    insight:
      "The problem isn't volume; it's that everything is presented as equally urgent. Triage should be the default state.",
    build:
      "A minimal email client that batches, hides, and surfaces. Three modes: Now, Later, Never. That's it.",
    result:
      "Cut my own inbox time by 70%. Sold the prototype concept to a Series-B productivity startup.",
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