import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Copy, Check, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Internship Opportunity',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.cleanPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending or mailto link
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
      
      // Also open user's default email client pre-filled
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formState.subject} from ${formState.name}`
      )}&body=${encodeURIComponent(
        `Hi Mehwish,\n\nName: ${formState.name}\nEmail: ${formState.email}\nSubject: ${formState.subject}\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoUrl;

      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: '', email: '', subject: 'Internship Opportunity', message: '' });
      }, 4000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#09091A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-secondary" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Let's Connect & <span className="text-gradient">Build Together</span>
          </h2>
          <p className="text-text-muted mt-3 text-base">
            Actively seeking SDE and Machine Learning internship opportunities.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-panel p-5 rounded-card flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary-light flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider block">Email</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-white hover:text-highlight transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-surface hover:bg-surface-hover text-text-muted hover:text-white transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-5 rounded-card flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider block">Phone / WhatsApp</span>
                  <a
                    href={`tel:${personalInfo.cleanPhone}`}
                    className="text-sm font-semibold text-white hover:text-highlight transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-surface hover:bg-surface-hover text-text-muted hover:text-white transition-colors"
                title="Copy phone to clipboard"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-5 rounded-card flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-highlight/20 text-highlight flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider block">Current Location</span>
                <span className="text-sm font-semibold text-white">
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Socials Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <a
                href={personalInfo.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-3.5 rounded-xl text-center group hover:border-primary/50 transition-all"
              >
                <Github className="w-5 h-5 text-white mx-auto group-hover:text-highlight transition-colors" />
                <span className="text-[11px] font-semibold text-text-muted group-hover:text-white mt-1.5 block">
                  GitHub
                </span>
              </a>

              <a
                href={personalInfo.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-3.5 rounded-xl text-center group hover:border-primary/50 transition-all"
              >
                <Linkedin className="w-5 h-5 text-white mx-auto group-hover:text-highlight transition-colors" />
                <span className="text-[11px] font-semibold text-text-muted group-hover:text-white mt-1.5 block">
                  LinkedIn
                </span>
              </a>

              <a
                href={personalInfo.socials.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-3.5 rounded-xl text-center group hover:border-primary/50 transition-all"
              >
                <Code className="w-5 h-5 text-white mx-auto group-hover:text-highlight transition-colors" />
                <span className="text-[11px] font-semibold text-text-muted group-hover:text-white mt-1.5 block">
                  LeetCode
                </span>
              </a>
            </div>

          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-card">
            <h3 className="text-xl font-heading font-bold text-white mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mb-6">
              Drop a note regarding internship roles, collaborations, or technical questions.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-text-muted mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-white/10 text-white placeholder-text-subtle text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-text-muted mb-1.5">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. sarah@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-white/10 text-white placeholder-text-subtle text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-text-muted mb-1.5">
                  Opportunity Type
                </label>
                <select
                  id="subject"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-white/10 text-white text-sm focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="Internship Opportunity">💼 SDE / Machine Learning Internship</option>
                  <option value="Research & Projects">🤝 Research & Project Collaboration</option>
                  <option value="Mentorship & Networking">☕ Tech Chat & Mentorship</option>
                  <option value="General Inquiry">💬 General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-text-muted mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Share details about your team, internship role, or project..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-white/10 text-white placeholder-text-subtle text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gradient w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : isSubmitted ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Message Prepared! Opening Mail App...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

