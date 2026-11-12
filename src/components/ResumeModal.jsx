import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Briefcase, GraduationCap, Mail, Phone, MapPin, ExternalLink, Code2, Award, ArrowLeft } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
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

  const handlePrint = () => {
    window.print();
  };

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
          {/* Modal Top Navigation & Control Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-[#080c14]/95 sticky top-0 z-30 backdrop-blur-md">
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-white border border-cyan-500/30 transition-all font-medium text-xs sm:text-sm min-h-[40px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </button>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700 min-h-[40px]"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / Save PDF</span>
                <span className="sm:hidden">Print</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Close resume preview"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document Body */}
          <div className="p-6 sm:p-10 overflow-y-auto font-sans text-slate-200 space-y-6 print:p-0 print:text-black">
            {/* Header with Profile Picture Thumbnail */}
            <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl font-heading font-extrabold text-white">Dipro Chowdhury</h1>
                <p className="text-cyan-400 font-mono text-base font-semibold mt-1">Quality Engineer → AI/ML & Generative AI Engineer</p>
                
                <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Kolkata, India</span>
                  <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-cyan-400" /> +91 6290090297</span>
                  <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-cyan-400" /> diprochowdhury123@gmail.com</span>
                  <span className="flex items-center gap-1"><ExternalLink className="w-3.5 h-3.5 text-cyan-400" /> linkedin.com/in/dipro-chowdhury10</span>
                </div>
              </div>

              {/* Profile Avatar Thumbnail */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-900 border-2 border-cyan-500/40 p-0.5 overflow-hidden shadow-lg shrink-0">
                {!avatarError ? (
                  <img
                    src="/profile.png"
                    alt="Dipro Chowdhury"
                    onError={() => setAvatarError(true)}
                    className="w-full h-full object-cover object-top rounded-xl"
                  />
                ) : (
                  <div className="w-full h-full bg-[#080c14] rounded-xl flex items-center justify-center font-bold text-cyan-400 text-lg">
                    DC
                  </div>
                )}
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono mb-2 flex items-center gap-2">
                Professional Summary
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Software engineer with industry experience as a Quality Engineer at LTIMindtree (LTM), where hands-on work with Generative AI tools — Microsoft Copilot Studio and Synthesia — sparked a drive to transition into AI-focused roles. Certified in Google AI, Google Data Analytics, Vanderbilt Prompt Engineering, freeCodeCamp, and Ardent Computech AI/ML Industrial Internship. Brings a solid foundation in Machine Learning, Python, and deep learning, demonstrated through independently built projects in NLP, intelligent assistants, and recommendation systems.
              </p>
            </div>

            {/* Industry Certifications */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" /> Professional Certifications & Credentials
              </h2>
              <div className="grid gap-2.5 sm:grid-cols-2 text-xs">
                <div className="p-3 bg-[#080c14]/50 border border-slate-800 rounded-xl">
                  <h4 className="font-bold text-white">Google AI Professional Certificate</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">Google • 7 Courses Specialization (Jun 2026)</p>
                </div>
                <div className="p-3 bg-[#080c14]/50 border border-slate-800 rounded-xl">
                  <h4 className="font-bold text-white">Google Data Analytics Professional Certificate</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">Google • 9 Courses Specialization (Jun 2026)</p>
                </div>
                <div className="p-3 bg-[#080c14]/50 border border-slate-800 rounded-xl">
                  <h4 className="font-bold text-white">Prompt Engineering for ChatGPT</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">Vanderbilt University CS Dept. (Jun 2026)</p>
                </div>
                <div className="p-3 bg-[#080c14]/50 border border-slate-800 rounded-xl">
                  <h4 className="font-bold text-white">AI & Machine Learning Industrial Internship</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">Ardent Computech • Movie Recommendation System (Sep 2023)</p>
                </div>
                <div className="p-3 bg-[#080c14]/50 border border-slate-800 rounded-xl">
                  <h4 className="font-bold text-white">Responsive Web Design Certification</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">freeCodeCamp • 300 Hours Verified (Apr 2023)</p>
                </div>
                <div className="p-3 bg-[#080c14]/50 border border-slate-800 rounded-xl">
                  <h4 className="font-bold text-white">Smart India Hackathon (SIH 2023)</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">FIEM • Certificate of Participation (Sep 2023)</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Work Experience
              </h2>
              <div className="bg-[#080c14]/50 border border-slate-800 p-4 rounded-xl">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="font-bold text-white text-base">Quality Engineer</h3>
                    <p className="text-xs text-slate-400">LTIMindtree (LTM) • Kolkata, India</p>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-800/40">
                    Sep 2025 – Present
                  </span>
                </div>
                <ul className="mt-3 space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>Designed and built internal enterprise accelerators including a Business Requirement Document (BRD) Generator and an automated PowerPoint Presentation Generator via vibe-coding to expedite client delivery.</li>
                  <li>Completed 2.5-month training in Automation Testing (Java, Selenium, Cucumber), contributing to test design/execution for TATA 1mg and Alfred Health platforms in Agile sprints.</li>
                  <li>Independently explored Generative AI, building and deploying AI chatbots with Microsoft Copilot Studio for automated query handling and workflow integration.</li>
                  <li>Leveraged modern AI development environments including Google Antigravity & Cursor AI code editor for vibe coding, Agentic AI, and rapid prototyping.</li>
                  <li>Created AI-generated training/stakeholder videos using Synthesia avatar technology.</li>
                </ul>
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Key AI & Agentic Solutions
              </h2>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="p-3 bg-[#080c14]/50 border border-slate-800 rounded-xl">
                  <h4 className="font-bold text-white text-xs">AI BRD & PPT Generators</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Enterprise vibe-coded generators automating requirement specs & slide deck creation.</p>
                  <p className="text-[10px] font-mono text-cyan-400 mt-2">Vibe Coding, GenAI, LLM</p>
                </div>
                <div className="p-3 bg-[#080c14]/50 border border-slate-800 rounded-xl">
                  <h4 className="font-bold text-white text-xs">Malicious URL Detector</h4>
                  <p className="text-[11px] text-slate-400 mt-1">LSTM RNN & Deep Learning model delivering 99% accuracy in phishing URL detection.</p>
                  <p className="text-[10px] font-mono text-cyan-400 mt-2">Python, PyTorch/TF, LSTM</p>
                </div>
                <div className="p-3 bg-[#080c14]/50 border border-slate-800 rounded-xl">
                  <h4 className="font-bold text-white text-xs">EchoGenius Voice Assistant</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Modular AI voice assistant with 98% command recognition & NLP pipeline.</p>
                  <p className="text-[10px] font-mono text-cyan-400 mt-2">Python, NLP, Speech API</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono mb-2">
                Technical Skills & Tools
              </h2>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><strong className="text-white">Agentic & LLMs:</strong> LangGraph, LangChain, FastAPI, RAG, Vectorless RAG, LangSmith, MCP, LLM Gateway, Guardrails, Deep Agents</div>
                <div><strong className="text-white">AI/ML:</strong> LSTM RNN, NLP, Deep Learning, Recommendation Systems, Feature Engineering</div>
                <div><strong className="text-white">GenAI & Tools:</strong> Google Antigravity, Cursor, Vibe Coding, MS Copilot Studio, Synthesia</div>
                <div><strong className="text-white">Languages & QA:</strong> Python, Java, SQL, Selenium, Cucumber (BDD), TestNG, Maven</div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono mb-2 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education
              </h2>
              <p className="text-xs text-slate-300">
                <strong className="text-white">B.Tech Computer Science & Engineering</strong> — Future Institute of Engineering & Management (2021–2025) • <span className="text-cyan-400 font-mono">CGPA: 8.79</span><br />
                Higher Secondary (CISCE): 90.67% | Secondary (CISCE): 88.60%
              </p>
            </div>

            {/* Bottom Close Action Footer */}
            <div className="pt-6 border-t border-slate-800 flex justify-end">
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
