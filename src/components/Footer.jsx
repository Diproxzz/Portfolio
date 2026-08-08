import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05080f] border-t border-slate-800/80 pt-12 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <span className="font-heading font-extrabold text-xl text-white tracking-tight flex items-center justify-center md:justify-start gap-1.5">
              Dipro Chowdhury
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </span>
            <p className="text-xs font-mono text-cyan-400 mt-0.5">
              Quality Engineer → AI/ML & Generative AI Engineer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/dipro-chowdhury10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-cyan-500/20 hover:text-cyan-300 transition-all border border-slate-700/60 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Diproxzz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-cyan-500/20 hover:text-cyan-300 transition-all border border-slate-700/60 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:diprochowdhury123@gmail.com"
              className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-cyan-500/20 hover:text-cyan-300 transition-all border border-slate-700/60 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all ml-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex items-center justify-center sm:justify-between text-xs text-slate-500 font-mono">
          <p>© 2026 Dipro Chowdhury. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
