import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle, Layers, ArrowUpRight } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#14142E] border border-white/15 rounded-card overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Modal Banner */}
        <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-black shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14142E] via-transparent to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/20 border border-primary/40 text-highlight inline-block mb-1.5">
              {project.subtitle}
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          <p className="text-sm text-text-muted leading-relaxed">
            {project.description}
          </p>

          {/* Key Engineering Innovations */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-secondary" />
              <span>Key Innovations & Highlights</span>
            </h4>
            <div className="space-y-2.5">
              {project.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-muted bg-surface/50 p-3 rounded-lg border border-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-text-muted border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-surface/60 border-t border-white/10 flex items-center justify-between gap-4 shrink-0">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Repository</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-surface hover:bg-surface-hover border border-white/10 text-xs font-semibold text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

