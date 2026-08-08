import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Award, CheckCircle2, BookOpen } from 'lucide-react';

export default function CertificateModal({ certificate, isOpen, onClose }) {
  if (!isOpen || !certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0f172a] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#080c14]/90 sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                {certificate.issuer}
              </span>
              <h3 className="text-lg font-heading font-bold text-slate-100">{certificate.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Image Preview Card */}
            {certificate.image && (
              <div className="relative w-full rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl group">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                />
              </div>
            )}

            {/* Overview & Scope */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">Certification Summary</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{certificate.description}</p>
            </div>

            {/* Courses / Skills List */}
            {certificate.courses && certificate.courses.length > 0 && (
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" /> Curriculum & Completed Modules ({certificate.courses.length} Courses)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {certificate.courses.map((course, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#080c14]/60 border border-slate-800 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certificate Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cyan-400" />
                Issued by: <strong className="text-white">{certificate.issuer}</strong> ({certificate.platform})
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-cyan-400" />
                Completion Date: <strong className="text-cyan-300">{certificate.date}</strong>
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
