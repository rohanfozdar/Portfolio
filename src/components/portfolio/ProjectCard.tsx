import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

type Props = { project: Project; onOpen: () => void };

const ProjectCard = ({ project, onOpen }: Props) => (
  <button
    onClick={onOpen}
    className="glass group relative overflow-hidden rounded-3xl text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={project.cover}
        alt={`${project.title} cover`}
        loading="lazy"
        width={1024}
        height={768}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="p-6 md:p-7">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="display text-2xl md:text-3xl font-semibold tracking-tight">{project.title}</h3>
          <p className="text-xs text-foreground/50 mt-1">{project.tags.join(" · ")} · {project.year}</p>
        </div>
        <div className="glass-pill rounded-full p-2 transition-transform group-hover:rotate-45">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
      <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
        <span className="text-foreground/50">The problem — </span>
        {project.problem}
      </p>
    </div>
  </button>
);

export default ProjectCard;
