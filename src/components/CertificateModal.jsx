import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Award, CheckCircle2, BookOpen, ArrowLeft, ExternalLink } from 'lucide-react';

export default function CertificateModal({ certificate, isOpen, onClose }) {
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

  if (!isOpen || !certificate) return null;

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
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-[#080c14]/95 sticky top-0 z-30 backdrop-blur-md">
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-white border border-cyan-500/30 transition-all font-medium text-xs sm:text-sm min-h-[40px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                {certificate.issuer}
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Close certificate preview"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Title */}
            <div>
              <h3 className="text-2xl font-heading font-extrabold text-white">{certificate.title}</h3>
              <p className="text-xs font-mono text-cyan-400 mt-1">{certificate.issuer} • {certificate.type}</p>
            </div>

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

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-2 min-h-[44px]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Portfolio</span>
              </button>

              {certificate.verifyUrl && (
                <a
                  href={certificate.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center gap-2 min-h-[44px]"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  <span>Verify Credential Online</span>
                </a>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
