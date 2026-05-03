
# Portfolio Redesign — rohanfozdar.com

A light, minimal, Apple-inspired site built around translucent "liquid glass" surfaces. Every section sits over a soft, subtly animated gradient backdrop so the frosted glass effect reads clearly. Generous whitespace, restrained motion, refined typography.

## Page structure (single scrolling page)

```text
┌─────────────────────────────────────┐
│  Sticky glass nav (Work · Resume ·  │
│  About · Contact)                   │
├─────────────────────────────────────┤
│  HERO                               │
│  Name, one-line positioning,        │
│  subtle animated gradient orbs      │
│  behind glass                       │
├─────────────────────────────────────┤
│  ABOUT (short, 2–3 sentences)       │
├─────────────────────────────────────┤
│  SELECTED WORK                      │
│  Liquid-glass card grid             │
│  Each card: cover, title, the       │
│  "problem" one-liner                │
│  → click expands to case study      │
├─────────────────────────────────────┤
│  RESUME                             │
│  Liquid-glass, but a *timeline*     │
│  layout (vertical rail, role        │
│  cards) — visually distinct from    │
│  the project grid                   │
├─────────────────────────────────────┤
│  CONTACT                            │
│  Email + socials in a single        │
│  glass pill row                     │
└─────────────────────────────────────┘
```

## Visual language

- Background: off-white (`#fafaf7`-ish) with two or three slow-drifting blurred color orbs (soft peach, mint, lavender) so the glass blur has something to refract.
- Glass surfaces: white at ~55% opacity, `backdrop-blur-2xl`, hairline 1px inner border, soft layered shadow, ~24px radius, faint specular highlight on the top edge.
- Type: large display sans for headings (e.g. Inter Tight or Geist), regular Inter for body. Tight tracking, generous leading.
- Motion: `fade-in` + `scale-in` on scroll-in, gentle hover lift + brightness shift on cards. No bouncy or flashy animation.
- Fully responsive; cards collapse to single column on mobile, hero text scales down.

## Projects — story arc

Card grid (2 columns desktop, 1 mobile). Each card surfaces just enough to hook:

- Cover image / abstract visual
- Project name
- One-line "Problem" tag (e.g. *"I kept losing track of climbing sessions…"*)

Clicking a card opens an expandable case study (modal/drawer with the same liquid-glass treatment) structured as a story arc:

1. The Problem — what was friction in your life
2. The Insight — what you noticed
3. What I Built — screenshots/visuals + short description
4. The Result — outcome, what you learned, link to live/repo

Smooth shared-element-style expansion so it feels like the card grows into the case study.

## Resume — differentiated glass layout

Same glass material, different structure so it doesn't read as "another project":

- Vertical timeline rail down the center (or left on desktop)
- Each role/education entry is a small glass chip attached to the rail with date, title, org, 1–2 bullet highlights
- Skills shown as a row of small glass pills below the timeline
- "Download PDF" button as a primary glass button at the top right of the section

## Content I'll need from you (can stub with placeholders for now)

- Headline + 2–3 sentence about blurb
- Project list: name, cover image, problem, insight, build, result, links
- Resume entries (roles, dates, bullets) + PDF file
- Contact links (email, LinkedIn, GitHub, X, etc.)

I'll ship with believable placeholders so you can see the design, then swap content in.

## Technical notes

- Single `Index.tsx` composed of section components: `Nav`, `Hero`, `About`, `Work`, `ProjectCaseStudy` (Dialog/Drawer), `Resume`, `Contact`.
- Design tokens added to `index.css` (glass background, orb colors, radii, shadows) and exposed through Tailwind so the look is consistent and easy to retune.
- Reusable `<GlassCard />` primitive (variants: `project`, `timeline`, `pill`, `button`).
- Project + resume data lives in typed arrays in `src/data/` for easy editing.
- Animated background orbs done with pure CSS (blurred divs + slow keyframe drift) — no heavy libraries.
- Uses existing shadcn `Dialog` for case-study expansion, `lucide-react` for icons.
- Light mode only for v1 (matches the aesthetic); dark variant can come later.
