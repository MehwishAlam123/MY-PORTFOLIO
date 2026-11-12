import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { educations } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-semibold text-secondary uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-secondary" />
            <span>Academic Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Education & <span className="text-gradient">Milestones</span>
          </h2>
          <p className="text-text-muted mt-3 text-base">
            Academic qualifications and university specialization in AI & ML.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-3xl mx-auto relative border-l border-white/10 ml-4 sm:ml-8 space-y-10">
          {educations.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Marker icon */}
              <div className="absolute -left-[15px] top-1.5 w-7 h-7 rounded-full bg-[#14142E] border-2 border-primary group-hover:border-highlight flex items-center justify-center transition-colors">
                <GraduationCap className="w-3.5 h-3.5 text-highlight" />
              </div>

              {/* Card */}
              <div className="glass-panel p-6 rounded-card hover:border-white/20 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-primary/20 text-primary-light border border-primary/30">
                      {edu.period}
                    </span>
                    {edu.cgpa && (
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                        {edu.cgpa}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-text-muted flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-highlight" />
                    <span>{edu.location}</span>
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-white mt-1">
                  {edu.degree}
                </h3>
                <h4 className="text-sm font-semibold text-primary-light mt-0.5">
                  {edu.institution}
                </h4>
                <p className="text-xs sm:text-sm text-text-muted mt-3 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

