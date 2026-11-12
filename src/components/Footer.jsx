import React from 'react';
import { ArrowUp, Terminal, Github, Linkedin, Code, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070714] border-t border-white/10 pt-12 pb-8 text-text-muted text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-brand p-[1px]">
              <div className="w-full h-full bg-[#14142E] rounded-[7px] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-highlight" />
              </div>
            </div>
            <div>
              <span className="font-heading font-bold text-sm text-white tracking-tight">
                MEHWISH <span className="text-gradient">ALAM</span>
              </span>
              <p className="text-[11px] text-text-muted">
                B.Tech CSE (AI/ML) • DY Patil University (RAIT)
              </p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface hover:bg-surface-hover text-text-muted hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface hover:bg-surface-hover text-text-muted hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface hover:bg-surface-hover text-text-muted hover:text-white transition-colors"
              aria-label="LeetCode Profile"
            >
              <Code className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-primary/20 text-primary-light hover:bg-primary hover:text-white transition-colors"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-text-subtle text-[11px]">
          <p>© {new Date().getFullYear()} Mehwish Alam. Built with React, Vite & Tailwind CSS.</p>
          <p>Designed for SDE & Machine Learning Engineering opportunities.</p>
        </div>
      </div>
    </footer>
  );
}

