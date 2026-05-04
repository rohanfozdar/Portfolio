import { useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import CaseStudy from "./CaseStudy";

const Work = () => {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <section id="work" className="px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/50 mb-3">Selected work</p>
            <h2 className="display text-4xl md:text-6xl font-bold tracking-tight">Things I've Built</h2>
          </div>
          <p className="hidden md:block max-w-xs text-sm text-foreground/60"></p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>
      <CaseStudy project={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default Work;
