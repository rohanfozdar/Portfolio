import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { Project } from "@/data/portfolio";
import { ArrowUpRight, X } from "lucide-react";

type Props = { project: Project | null; onClose: () => void };

const Section = ({ label, title, body }: { label: string; title: string; body: string }) => (
  <div className="glass rounded-2xl p-6 md:p-7">
    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/50 mb-2">{label}</p>
    <h4 className="display text-xl md:text-2xl font-semibold tracking-tight mb-3">{title}</h4>
    <div className="text-foreground/75 leading-relaxed whitespace-pre-line">{body}</div>
  </div>
);

const CaseStudy = ({ project, onClose }: Props) => (
  <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
    <DialogContent className="max-w-3xl p-0 border-0 bg-transparent shadow-none [&>button]:hidden max-h-[90vh] overflow-y-auto">
      {project && (
        <div className="glass-strong rounded-3xl overflow-hidden animate-fade-up">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
            <button
              onClick={onClose}
              className="glass absolute top-4 right-4 rounded-full p-2 hover:scale-105 transition-transform"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-6 md:p-10 space-y-5">
            <div>
              <p className="text-xs text-foreground/50 mb-2">{project.tags.join(" · ")} · {project.year}</p>
              <h2 className="display text-3xl md:text-5xl font-bold tracking-tight">{project.title}</h2>
            </div>
            <Section label="01 — The Problem" title="Where it hurt" body={project.problem} />
            <Section label="02 — What I Built" title="The response" body={project.build} />
            <Section label="03 — What Happened" title="The outcome" body={project.result} />
            {project.link && (
              <a
                href={project.link.href}
                target="_blank"
                rel="noreferrer"
                className="glass-strong inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium hover:scale-[1.02] transition-transform"
              >
                {project.link.label}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      )}
    </DialogContent>
  </Dialog>
);

export default CaseStudy;
