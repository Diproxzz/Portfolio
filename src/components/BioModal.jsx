import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Mail, Phone, ExternalLink, Linkedin, Github, GraduationCap, Briefcase, Award, Bot, Sparkles, ArrowLeft, Code2, Cpu } from 'lucide-react';

export default function BioModal({ isOpen, onClose }) {
  const [avatarError, setAvatarError] = useState(false);

  // Lock body scroll & listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md transition-all"
        aria-modal="true"
        role="dialog"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0f172a] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
        >
          {/* Header Controls Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-[#080c14]/95 sticky top-0 z-30 backdrop-blur-md">
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-white border border-cyan-500/30 transition-all font-medium text-xs sm:text-sm min-h-[40px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Profile Bio Brief
              </span>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Close bio modal"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            
            {/* Top Grid: Portrait Photo + Brief Bio Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-slate-800 pb-6">
              
              {/* High Resolution Portrait Preview */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-44 h-56 sm:w-52 sm:h-64 rounded-2xl bg-slate-900 border-2 border-cyan-500/50 p-1 overflow-hidden shadow-2xl group">
                  {!avatarError ? (
                    <img
                      src="/profile.png"
                      alt="Dipro Chowdhury"
                      onError={() => setAvatarError(true)}
                      className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#080c14] rounded-xl flex flex-col items-center justify-center font-bold text-cyan-400">
                      <Bot className="w-12 h-12 mb-2 text-cyan-400" />
                      <span>Dipro Chowdhury</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>
              </div>

              {/* Personal Details & Headline */}
              <div className="md:col-span-8 space-y-3 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Quality Engineer → AI/ML & GenAI Engineer</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">Dipro Chowdhury</h2>
                
                <p className="text-cyan-400 font-mono text-sm font-semibold">
                  Future Institute of Engineering & Management (B.Tech CSE '25 • 8.79 CGPA)
                </p>

                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  Software engineer with industry experience as a Quality Engineer at <strong>LTIMindtree (LTM)</strong>, where hands-on work with Generative AI tools — <strong>Microsoft Copilot Studio</strong> and <strong>Synthesia</strong> — sparked a drive to transition into AI-focused roles. Brings a foundation in Machine Learning, Python, and deep learning, demonstrated through independently built projects in NLP, intelligent assistants, and recommendation systems.
                </p>

                {/* Contact Meta Pills */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2 text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Kolkata, India</span>
                  <a href="tel:+916290090297" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"><Phone className="w-3.5 h-3.5 text-cyan-400" /> +91 6290090297</a>
                  <a href="mailto:diprochowdhury123@gmail.com" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"><Mail className="w-3.5 h-3.5 text-cyan-400" /> diprochowdhury123@gmail.com</a>
                </div>

                {/* Social Buttons */}
                <div className="flex items-center justify-center md:justify-start gap-2.5 pt-2">
                  <a
                    href="https://linkedin.com/in/dipro-chowdhury10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-500/20 text-xs font-mono text-slate-200 hover:text-cyan-300 border border-slate-700 transition-all flex items-center gap-1.5"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/Diproxzz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-500/20 text-xs font-mono text-slate-200 hover:text-cyan-300 border border-slate-700 transition-all flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Brief Bio Breakdown Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              
              {/* Left Bio Card: Professional Journey & AI Tools */}
              <div className="p-4 rounded-xl bg-[#080c14]/70 border border-slate-800 space-y-3">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-cyan-400" /> Experience & GenAI Focus
                </h3>
                <ul className="space-y-2 text-slate-300 list-disc list-inside leading-relaxed">
                  <li><strong>LTIMindtree (LTM):</strong> Quality Engineer working on automation testing (Selenium, Java, Cucumber) for TATA 1mg & Alfred Health.</li>
                  <li><strong>GenAI Innovation:</strong> Built automated AI chatbots using <strong>Microsoft Copilot Studio</strong> and AI videos with <strong>Synthesia</strong> avatar tech.</li>
                  <li><strong>AI IDEs & Tools:</strong> Experienced with <strong>Google Antigravity IDE</strong> and <strong>Cursor AI Code Editor</strong> for agentic vibe coding & rapid ML model deployment.</li>
                </ul>
              </div>

              {/* Right Bio Card: Key Achievements & Certifications */}
              <div className="p-4 rounded-xl bg-[#080c14]/70 border border-slate-800 space-y-3">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400" /> Key Credentials & Projects
                </h3>
                <ul className="space-y-2 text-slate-300 list-disc list-inside leading-relaxed">
                  <li><strong>Google AI:</strong> 7-Course Specialization Certificate</li>
                  <li><strong>Google Data Analytics:</strong> 9-Course Specialization Certificate</li>
                  <li><strong>Vanderbilt University:</strong> Prompt Engineering for ChatGPT</li>
                  <li><strong>Ardent Computech:</strong> AI & ML Industrial Internship (Movie Recommendation Engine)</li>
                  <li><strong>Key Models:</strong> Malicious URL Detector (99% accuracy) & EchoGenius Voice Assistant (98% recognition).</li>
                </ul>
              </div>

            </div>

            {/* Bottom Actions Footer */}
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:brightness-110 transition-all flex items-center gap-2 min-h-[44px]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Portfolio</span>
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
