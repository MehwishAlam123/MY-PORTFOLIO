import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle, ChevronRight, Award, Trophy } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-semibold text-secondary uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-secondary" />
            <span>Work & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Practical <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-text-muted mt-3 text-base">
            Internships, technical committee leadership, and competitive hackathons.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-6 md:pl-8 group"
            >
              {/* Marker Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#14142E] border-2 border-primary group-hover:border-secondary flex items-center justify-center shadow-glow-primary transition-colors">
                {exp.type === 'Internship' ? (
                  <Briefcase className="w-3.5 h-3.5 text-highlight" />
                ) : exp.type === 'Leadership' ? (
                  <Award className="w-3.5 h-3.5 text-secondary" />
                ) : (
                  <Trophy className="w-3.5 h-3.5 text-primary-light" />
                )}
              </div>

              {/* Time Indicator on left for desktop */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-28">
                <span className="text-xs font-mono font-semibold text-text-muted group-hover:text-highlight transition-colors">
                  {exp.period}
                </span>
              </div>

              {/* Card */}
              <div className="glass-panel p-6 sm:p-7 rounded-card hover:border-white/20 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-highlight">
                        {exp.badge}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-primary-light mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  {/* Mobile Date */}
                  <div className="md:hidden text-xs font-mono text-text-muted flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mt-4 text-sm text-text-muted">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-5 mt-5 border-t border-white/5">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-2.5 py-1 rounded-md bg-surface text-text-muted font-medium border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

