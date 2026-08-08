import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, ShieldCheck, Mic, Film, CheckCircle2, Cpu, BarChart2 } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#080c14]/90 sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                {project.metric}
              </span>
              <h3 className="text-lg font-heading font-bold text-slate-100">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">Project Overview</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Architecture Highlights */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4" /> Key Architecture & Features
              </h4>
              <div className="grid gap-2.5">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#080c14]/60 border border-slate-800 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics & Performance */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 flex items-center justify-between">
              <div>
                <span className="text-xs text-cyan-400 font-mono block">Performance Benchmark</span>
                <span className="text-xl font-heading font-bold text-white mt-0.5 block">{project.metricLabel}</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-mono font-extrabold text-cyan-300">{project.metric}</span>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-cyan-300 border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>View GitHub Repository</span>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
