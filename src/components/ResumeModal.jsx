import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Briefcase, GraduationCap, Mail, Phone, MapPin, ExternalLink, Code2, Award } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const [avatarError, setAvatarError] = useState(false);
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
        >
          {/* Modal Header Controls */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#080c14]/90 sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
              <h3 className="text-lg font-heading font-bold text-slate-100">Dipro_Chowdhury_Resume.pdf</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700"
              >
                <Printer className="w-3.5 h-3.5" />
                Print / Save
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close resume modal"
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
                Software engineer with industry experience as a Quality Engineer at LTIMindtree (LTM), where hands-on work with Generative AI tools — Microsoft Copilot Studio and Synthesia — sparked a drive to transition into AI-focused roles. Certified in Google AI, Google Data Analytics, and Vanderbilt Prompt Engineering. Brings a solid foundation in Machine Learning, Python, and deep learning, demonstrated through independently built projects in NLP, intelligent assistants, and recommendation systems.
              </p>
            </div>

            {/* Industry Certifications */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" /> Professional Certifications
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
                  <h4 className="font-bold text-white">AI & Machine Learning Certification</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">Ardent Computech Pvt. Ltd.</p>
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
                  <li>Completed 2.5-month training in Automation Testing (Java, Selenium, Cucumber), contributing to test design/execution for TATA 1mg and Alfred Health platforms in Agile sprints.</li>
                  <li>Independently explored Generative AI, building and deploying AI chatbots with Microsoft Copilot Studio for automated query handling and workflow integration.</li>
                  <li>Created AI-generated training/stakeholder videos using Synthesia avatar technology.</li>
                </ul>
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Key AI/ML Projects
              </h2>
              <div className="grid gap-3 sm:grid-cols-3">
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
                <div className="p-3 bg-[#080c14]/50 border border-slate-800 rounded-xl">
                  <h4 className="font-bold text-white text-xs">Movie Recommendation Engine</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Content-based filtering using TMDB metadata, CountVectorizer & cosine similarity.</p>
                  <p className="text-[10px] font-mono text-cyan-400 mt-2">Python, Scikit-learn, TMDB</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono mb-2">
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><strong className="text-white">Languages:</strong> Python, Java, C, HTML, CSS, SQL</div>
                <div><strong className="text-white">AI/ML:</strong> LSTM RNN, NLP, Deep Learning, Feature Engineering</div>
                <div><strong className="text-white">GenAI Tools:</strong> MS Copilot Studio, Synthesia, Prompt Engineering</div>
                <div><strong className="text-white">Testing & Analytics:</strong> Selenium, Cucumber (BDD), Tableau, TestNG, Maven</div>
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
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
