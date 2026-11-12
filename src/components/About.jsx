import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, University, Mail, Github, Award, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Driven by Curiosity, <span className="text-gradient">Engineered with Code</span>
          </h2>
          <p className="text-text-muted mt-3 text-base">
            A look into my engineering focus, core values, and technical strengths.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Bio (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel rounded-card p-6 sm:p-8 space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface text-xs font-semibold text-highlight border border-white/5">
              <University className="w-3.5 h-3.5" />
              <span>RAIT Nerul, DY Patil University • Batch 2029</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white leading-snug">
              Transforming complex algorithms into reliable, human-centric software
            </h3>

            {personalInfo.aboutPitch.map((para, idx) => (
              <p key={idx} className="text-text-muted text-sm sm:text-base leading-relaxed">
                {para}
              </p>
            ))}

            {/* Quick Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider block">Location</span>
                <span className="text-xs font-semibold text-white flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-secondary" /> Navi Mumbai
                </span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider block">Degree</span>
                <span className="text-xs font-semibold text-white flex items-center gap-1 mt-1">
                  <Award className="w-3.5 h-3.5 text-highlight" /> B.Tech AI/ML
                </span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider block">LeetCode</span>
                <span className="text-xs font-semibold text-white flex items-center gap-1 mt-1">
                  30+ Solved
                </span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider block">GitHub</span>
                <a
                  href={personalInfo.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-primary-light hover:text-white transition-colors flex items-center gap-1 mt-1"
                >
                  <Github className="w-3.5 h-3.5" /> MehwishAlam123
                </a>
              </div>
            </div>
          </motion.div>

          {/* Core Strengths (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {personalInfo.strengths.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel p-5 rounded-card relative overflow-hidden group hover:border-primary/40 transition-all"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary-light shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-all">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-white group-hover:text-highlight transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-text-muted mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

