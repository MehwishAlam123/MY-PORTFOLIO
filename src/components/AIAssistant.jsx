import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, X, Send, Volume2, VolumeX, RotateCcw, 
  MessageSquare, Bot, User, CornerDownLeft, ChevronDown 
} from 'lucide-react';
import { personalInfo, aiAssistantKB } from '../data/portfolioData';

export default function AIAssistant({ isOpen, setIsOpen, autoSpeakTrigger }) {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'ai',
      text: aiAssistantKB.textGreeting,
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showGreetingBubble, setShowGreetingBubble] = useState(true);
  const messagesEndRef = useRef(null);

  // Auto scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowGreetingBubble(false);
    }
  }, [messages, isOpen]);

  // Web Speech API synthesis helper
  const speakText = (text) => {
    if (isMuted || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      // Clean markdown tags for natural speech
      const clean = text
        .replace(/[*_#`]/g, '')
        .replace(/https?:\/\/\S+/g, '')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/[•]/g, '');

      const utterance = new SpeechSynthesisUtterance(clean);
      utterance.rate = 1.0;
      utterance.pitch = 1.05;

      // Try selecting an English female / friendly voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferred = voices.find(
        (v) => v.lang.startsWith('en') && (v.name.includes('Female') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Google UK English Female') || v.name.includes('Zira'))
      ) || voices.find((v) => v.lang.startsWith('en'));

      if (preferred) utterance.voice = preferred;
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn("Speech synthesis error:", err);
    }
  };

  // Triggered when Hero "Meet my AI Assistant" button is clicked
  useEffect(() => {
    if (autoSpeakTrigger > 0) {
      setIsOpen(true);
      setShowGreetingBubble(false);
      speakText(aiAssistantKB.voiceGreeting);
    }
  }, [autoSpeakTrigger]);

  // Answer matching using portfolio knowledge base
  const generateResponse = (query) => {
    const cleanQuery = query.toLowerCase();

    for (const item of aiAssistantKB.responses) {
      if (item.keywords.some((kw) => cleanQuery.includes(kw))) {
        return item.reply;
      }
    }

    return `I can help with Mehwish's profile! She is a 2nd year B.Tech student in CSE (AI/ML) at RAIT Nerul with an 8.66 CGPA. Try asking about her **Knee MRI deep learning model**, **Tic-Tac-Toe Minimax AI**, **InAmigos internship**, or **internship availability**!`;
  };

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const replyText = generateResponse(query);
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);

      if (!isMuted) {
        speakText(replyText);
      }
    }, 450);
  };

  const handleReset = () => {
    window.speechSynthesis?.cancel();
    setMessages([
      {
        id: Date.now().toString(),
        sender: 'ai',
        text: "Conversation reset! 👋 What would you like to know about Mehwish's portfolio?",
        time: 'Just now'
      }
    ]);
  };

  const toggleMute = () => {
    if (!isMuted) {
      window.speechSynthesis?.cancel();
    }
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Initial Greeting Bubble Popup on Load (Bottom-Right) */}
      {showGreetingBubble && !isOpen && (
        <div className="fixed bottom-24 right-5 z-40 max-w-xs animate-in fade-in slide-in-from-bottom-3 duration-500">
          <div className="relative bg-[#14142E] border border-white/15 p-3.5 rounded-2xl shadow-2xl text-xs text-white">
            <button
              onClick={() => setShowGreetingBubble(false)}
              className="absolute top-2 right-2 text-text-muted hover:text-white"
              aria-label="Dismiss greeting"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-start gap-2.5 pr-3">
              <span className="text-base">👋</span>
              <p className="leading-relaxed">
                Hi, welcome to Mehwish Alam's portfolio! I'm her AI assistant. Ask me about her projects, skills or internship availability.
              </p>
            </div>
            <button
              onClick={() => {
                setIsOpen(true);
                setShowGreetingBubble(false);
              }}
              className="mt-2.5 w-full py-1.5 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/30 text-highlight font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>Chat with AI</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Avatar Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setShowGreetingBubble(false);
          }}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-brand p-[2px] shadow-glow-brand hover:scale-110 transition-transform group"
          aria-label="Open AI Portfolio Assistant"
        >
          <div className="w-full h-full rounded-full overflow-hidden relative bg-[#14142E]">
            <img
              src={personalInfo.avatar}
              alt="Mehwish Alam AI Copilot"
              className="w-full h-full object-cover object-center"
            />
            {/* Online Green Indicator */}
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#14142E]" />
          </div>
          {/* Sparkle badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white shadow-md">
            <Sparkles className="w-3 h-3 text-highlight animate-spin-slow" />
          </div>
        </button>
      )}

      {/* Main Chat Drawer / Window */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 z-50 w-[92vw] sm:w-[420px] h-[580px] max-h-[85vh] bg-[#14142E] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="p-3.5 bg-surface/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-primary/50">
                <img
                  src={personalInfo.avatar}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#14142E]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-heading font-bold text-white">
                    Mehwish <span className="text-gradient">AI</span> Copilot
                  </h4>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-primary/20 text-highlight">
                    KB v2.0
                  </span>
                </div>
                <span className="text-[10px] text-text-muted flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Portfolio Knowledge Base
                </span>
              </div>
            </div>

            {/* Actions: Mute / Reset / Close */}
            <div className="flex items-center gap-1">
              <button
                onClick={toggleMute}
                className={`p-1.5 rounded-lg transition-colors ${
                  isMuted ? 'text-secondary hover:bg-white/5' : 'text-highlight hover:bg-white/5'
                }`}
                title={isMuted ? "Unmute voice" : "Mute voice"}
                aria-label={isMuted ? "Unmute voice" : "Mute voice"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                onClick={handleReset}
                className="p-1.5 rounded-lg text-text-muted hover:text-white hover:bg-white/5 transition-colors"
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  window.speechSynthesis?.cancel();
                  setIsOpen(false);
                }}
                className="p-1.5 rounded-lg text-text-muted hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Close assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#0B0B1E]/80">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 max-w-[85%] ${
                  msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                }`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5 text-highlight" />
                  </div>
                )}

                <div>
                  <div
                    className={`p-3 rounded-2xl text-xs sm:text-[13px] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-brand text-white rounded-tr-none shadow-md font-medium'
                        : 'bg-surface text-text border border-white/10 rounded-tl-none'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">
                      {msg.text.split('\n').map((line, i) => (
                        <p key={i} className={i > 0 ? 'mt-1.5' : ''}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] text-text-subtle mt-1 block px-1">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-text-muted text-xs">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5 text-highlight animate-pulse" />
                </div>
                <div className="bg-surface px-3 py-2 rounded-xl border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-highlight animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-highlight animate-bounce delay-100" />
                  <span className="w-1.5 h-1.5 rounded-full bg-highlight animate-bounce delay-200" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick-Reply Chips */}
          <div className="px-3 py-2 bg-surface/50 border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
            {aiAssistantKB.quickChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(chip.query)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-surface hover:bg-white/10 border border-white/10 text-[11px] text-text-muted hover:text-white transition-colors shrink-0"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Input Row */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-surface border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, skills, experience..."
              className="flex-1 bg-black/40 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-text-subtle focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 rounded-xl btn-gradient text-white disabled:opacity-40 disabled:hover:scale-100 hover:scale-105 transition-all"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}

