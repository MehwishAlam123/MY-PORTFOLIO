import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Code2, Brain, Eye, Globe, Wrench } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Brain: Brain,
  Eye: Eye,
  Globe: Globe,
  Wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-[#09091A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-secondary" />
            <span>Technical Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Core <span className="text-gradient">Technologies</span> & Skills
          </h2>
          <p className="text-text-muted mt-3 text-base">
            Categorized technical stack across machine learning, systems, and full-stack development.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-panel rounded-card p-6 flex flex-col justify-between hover:border-primary/40 transition-all group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary-light group-hover:scale-110 group-hover:text-highlight transition-all">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-heading font-bold text-white">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group/badge relative px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-hover border border-white/5 hover:border-primary/40 transition-all text-xs"
                      >
                        <span className="font-semibold text-white group-hover/badge:text-highlight transition-colors">
                          {skill.name}
                        </span>
                        {skill.desc && (
                          <span className="block text-[10px] text-text-muted/80 mt-0.5">
                            {skill.desc}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

