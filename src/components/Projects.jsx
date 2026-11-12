import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Github, ExternalLink, Gamepad2, Info, ArrowUpRight, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import TicTacToeModal from './TicTacToeModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);

  return (
    <section id="projects" className="py-20 relative bg-[#09091A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-highlight/10 border border-highlight/20 text-xs font-semibold text-highlight uppercase tracking-wider mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Technical <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-text-muted mt-3 text-base">
            From multimodal medical deep learning to real-time hybrid game AI.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-card overflow-hidden flex flex-col group hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14142E] via-transparent to-transparent opacity-80" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#0B0B1E]/80 backdrop-blur-md border border-white/10 text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span>{project.status}</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-highlight font-mono">
                    {project.subtitle}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-primary-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-text-muted border border-white/5 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-white/5 text-text-muted">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-hover text-xs font-semibold text-white border border-white/10 flex items-center gap-1.5 transition-colors"
                      title="Architecture details"
                    >
                      <Info className="w-3.5 h-3.5 text-highlight" />
                      <span>Details</span>
                    </button>

                    {project.hasDemo && (
                      <button
                        onClick={() => setIsGameModalOpen(true)}
                        className="px-3 py-1.5 rounded-lg bg-secondary/15 hover:bg-secondary/25 text-xs font-semibold text-secondary border border-secondary/30 flex items-center gap-1.5 transition-colors"
                        title="Play AI Demo"
                      >
                        <Gamepad2 className="w-3.5 h-3.5" />
                        <span>Play Demo</span>
                      </button>
                    )}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface hover:bg-surface-hover text-text-muted hover:text-white border border-white/10 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <TicTacToeModal
        isOpen={isGameModalOpen}
        onClose={() => setIsGameModalOpen(false)}
      />
    </section>
  );
}

