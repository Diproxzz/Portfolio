import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles, Bot, BrainCircuit, Terminal } from 'lucide-react';
import ProfilePhoto from './ProfilePhoto';
import ResumeModal from './ResumeModal';
import BioModal from './BioModal';

const typingTitles = [
  'Quality Engineer',
  'AI/ML Enthusiast',
  'Generative AI Developer'
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [bioOpen, setBioOpen] = useState(false);

  useEffect(() => {
    const fullText = typingTitles[titleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.substring(0, prev.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
      }, 80);
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % typingTitles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Top Column: Profile Photo (Clickable to open Bio Modal) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2"
          >
            <ProfilePhoto imageSrc="/profile.png" onClickBio={() => setBioOpen(true)} />
          </motion.div>

          {/* Right / Text Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-mono mb-6 shadow-sm shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Transitioning Quality Engineer → AI/ML Engineer</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-fluid-h1 font-heading font-extrabold text-white tracking-tight leading-tight">
              Hello, I'm{' '}
              <span className="gradient-text-cyan">Dipro Chowdhury</span>
            </h1>

            {/* Animated Typing Headline */}
            <div className="h-12 sm:h-14 mt-2 flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-slate-200 flex items-center gap-2">
                <BrainCircuit className="w-6 h-6 text-cyan-400 shrink-0" />
                <span className="text-cyan-400">{currentText}</span>
                <span className="w-0.5 h-7 bg-cyan-400 animate-pulse ml-0.5 inline-block" />
              </span>
            </div>

            {/* Bio Summary with Antigravity & Cursor Highlight */}
            <p className="mt-4 text-fluid-sub text-slate-300 max-w-2xl leading-relaxed font-normal">
              Software engineer with industry experience as a Quality Engineer at{' '}
              <strong className="text-white font-semibold">LTIMindtree (LTM)</strong>, where hands-on work with Generative AI tools —{' '}
              <span className="text-cyan-300 font-medium">Microsoft Copilot Studio</span> and{' '}
              <span className="text-cyan-300 font-medium">Synthesia</span> — sparked a drive to transition into AI-focused roles. Independently builds agentic AI applications using{' '}
              <span className="text-cyan-300 font-medium">Google Antigravity IDE</span> and{' '}
              <span className="text-cyan-300 font-medium">Cursor AI Code Editor</span>.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-6 py-3.5 rounded-xl font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center gap-2 min-h-[44px]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => setResumeOpen(true)}
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-300 flex items-center gap-2 min-h-[44px]"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3.5 rounded-xl font-semibold text-cyan-400 bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-800/60 hover:border-cyan-500 transition-all duration-300 flex items-center gap-2 min-h-[44px]"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Social Links & Location */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-400">
              <a
                href="https://linkedin.com/in/dipro-chowdhury10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-cyan-400 transition-colors p-1"
                aria-label="LinkedIn Profile"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center border border-slate-700">
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="font-mono text-xs">dipro-chowdhury10</span>
              </a>

              <a
                href="https://github.com/Diproxzz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-cyan-400 transition-colors p-1"
                aria-label="GitHub Profile"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center border border-slate-700">
                  <Github className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="font-mono text-xs">Diproxzz</span>
              </a>

              <a
                href="mailto:diprochowdhury123@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-cyan-400 transition-colors p-1"
                aria-label="Send Email"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center border border-slate-700">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="font-mono text-xs">diprochowdhury123@gmail.com</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Profile Bio Lightbox Modal */}
      <BioModal isOpen={bioOpen} onClose={() => setBioOpen(false)} />
    </section>
  );
}
