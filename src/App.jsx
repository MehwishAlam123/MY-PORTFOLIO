import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

export default function App() {
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);
  const [autoSpeakTrigger, setAutoSpeakTrigger] = useState(0);

  const handleMeetAI = () => {
    setIsAIAssistantOpen(true);
    setAutoSpeakTrigger((prev) => prev + 1);
  };

  const handleOpenAI = () => {
    setIsAIAssistantOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/30 selection:text-white flex flex-col relative font-sans antialiased">
      {/* Sticky Navigation */}
      <Navbar onOpenAI={handleOpenAI} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onMeetAI={handleMeetAI} />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Assistant Widget with Web Speech API Audio & Knowledge Base */}
      <AIAssistant
        isOpen={isAIAssistantOpen}
        setIsOpen={setIsAIAssistantOpen}
        autoSpeakTrigger={autoSpeakTrigger}
      />
    </div>
  );
}

