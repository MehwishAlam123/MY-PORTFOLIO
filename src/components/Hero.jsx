import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Send, Sparkles, Volume2, Code, Brain, ChevronRight, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onMeetAI }) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-glow pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-white/10 shadow-sm text-xs font-medium text-text-muted">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-highlight font-heading">
                {personalInfo.headline}
              </p>
            </div>

            {/* Role & Tagline */}
            <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Second-year <strong className="text-white">B.Tech in Computer Science & Engineering (AI/ML)</strong> at{' '}
              <strong className="text-white">DY Patil University (RAIT)</strong>. Bridging applied deep learning, medical image analysis, and modern web software engineering.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 shadow-glow-brand"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-surface hover:bg-surface-hover text-white border border-white/10 hover:border-primary/50 transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-highlight" />
                <span>Contact Me</span>
              </a>

              {/* Special Meet AI Voice Assistant Button */}
              <button
                onClick={onMeetAI}
                className="px-5 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 text-white border border-primary/40 hover:border-secondary/60 transition-all flex items-center gap-2.5 group shadow-glow-primary hover:scale-105"
                title="Opens the AI assistant and speaks her introduction"
              >
                <Volume2 className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform animate-pulse" />
                <span>Meet my AI Assistant</span>
                <Sparkles className="w-3.5 h-3.5 text-highlight" />
              </button>
            </div>

            {/* 3 Metric Stat Cards */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              {personalInfo.stats.slice(0, 3).map((stat, idx) => (
                <div key={idx} className="text-left bg-surface/40 rounded-xl p-3 border border-white/5">
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-white mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-text-muted truncate">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Visual Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square">
              {/* Pulsing ring aura */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-30 blur-2xl animate-pulse-glow" />

              {/* Main Avatar Card */}
              <div className="relative w-full h-full rounded-3xl p-3 bg-[#14142E] border border-white/15 shadow-2xl shadow-primary/20">
                <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B1E] via-transparent to-transparent opacity-60" />

                  {/* Status Pill on Avatar */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#0B0B1E]/90 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full flex items-center gap-2 whitespace-nowrap shadow-lg">
                    <Brain className="w-3.5 h-3.5 text-secondary animate-pulse" />
                    <span className="text-xs font-semibold text-white tracking-wide">
                      AI & SDE Engineer In Making
                    </span>
                  </div>
                </div>

                {/* Floating Chips */}
                <div className="hidden sm:flex absolute -top-4 -left-6 bg-surface/90 backdrop-blur-md border border-white/10 p-2.5 rounded-xl shadow-lg items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <Code className="w-4 h-4 text-highlight" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Python, C & Java</div>
                    <div className="text-[10px] text-text-muted">DSA & OOP Core</div>
                  </div>
                </div>

                <div className="hidden sm:flex absolute -bottom-4 -right-4 bg-surface/90 backdrop-blur-md border border-white/10 p-2.5 rounded-xl shadow-lg items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                    <Award className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">CGPA: 8.66</div>
                    <div className="text-[10px] text-text-muted">RAIT DY Patil Nerul</div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

