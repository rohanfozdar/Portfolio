import { Download } from "lucide-react";
import { roles, skills } from "@/data/portfolio";

const Resume = () => (
  <section id="resume" className="px-6 py-20 md:py-28">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-end justify-between mb-10 md:mb-14 gap-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/50 mb-3">Resume</p>
          <h2 className="display text-4xl md:text-6xl font-bold tracking-tight">The path so far.</h2>
        </div>
        <a
          href="/resume.pdf"
          download
          className="glass-strong inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium hover:scale-[1.02] transition-transform"
        >
          <Download className="w-4 h-4" />
          PDF
        </a>
      </div>
      <div className="relative pl-6 md:pl-10">
        <div className="absolute left-2 md:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-foreground/30 via-foreground/15 to-transparent" />
        <ol className="space-y-5">
          {roles.map((r, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[18px] md:-left-[30px] top-6 w-3 h-3 rounded-full glass-pill" />
              <div className="glass rounded-2xl p-5 md:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="display text-lg md:text-xl font-semibold tracking-tight">
                    {r.title}<span className="text-foreground/50"> — {r.org}</span>
                  </h3>
                  <p className="text-xs text-foreground/50">{r.date}</p>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/75 leading-relaxed">
                  {r.bullets.map((b, bi) => (
                    <li key={bi} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-foreground/30">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-10">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/50 mb-4">Toolkit</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="glass-pill rounded-full px-3.5 py-1.5 text-sm text-foreground/80">{s}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
