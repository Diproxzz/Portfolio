import React, { useState } from 'react';
import { Bot, Sparkles, RefreshCw } from 'lucide-react';
import AILogoEmblem from './AILogoEmblem';

/**
 * ProfilePhoto Component
 * Renders Dipro Chowdhury's portrait image with proper orientation framing,
 * responsive aspect ratio, and glowing tech border aura.
 */
export default function ProfilePhoto({ imageSrc = '/profile.png' }) {
  const [imgError, setImgError] = useState(false);
  const [objectFitStyle, setObjectFitStyle] = useState('cover'); // 'cover' or 'contain'

  const toggleFitMode = () => {
    setObjectFitStyle((prev) => (prev === 'cover' ? 'contain' : 'cover'));
  };

  return (
    <div className="relative group w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] mx-auto transition-transform duration-500 hover:scale-[1.01]">
      {/* Outer animated ambient gradient glow */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-400 blur-xl opacity-70 group-hover:opacity-100 transition duration-700 animate-pulse" />
      
      {/* Main Container Frame */}
      <div className="relative w-full h-full rounded-3xl bg-[#0f172a] border border-cyan-500/40 overflow-hidden shadow-2xl flex flex-col items-center justify-center p-2.5 backdrop-blur-xl">
        {imageSrc && !imgError ? (
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#1e293b]/90 via-[#080c14] to-[#080c14] flex items-center justify-center">
            {/* Main Portrait Image with Proper Framing & Orientation */}
            <img
              src={imageSrc}
              alt="Dipro Chowdhury — AI/ML Engineer"
              onError={() => setImgError(true)}
              className={`w-full h-full rounded-2xl transition-all duration-500 ${
                objectFitStyle === 'cover'
                  ? 'object-cover object-[center_12%] scale-[1.02] group-hover:scale-105'
                  : 'object-contain p-2'
              }`}
            />

            {/* Ambient vignette bottom gradient for polished integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Quick Fit Mode Toggle Button */}
            <button
              onClick={toggleFitMode}
              title="Toggle image framing view (Cover / Contain)"
              className="absolute top-3 right-3 p-2 rounded-xl bg-[#080c14]/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 hover:text-white hover:border-cyan-400 transition-all opacity-80 group-hover:opacity-100 min-h-[36px] min-w-[36px] flex items-center justify-center shadow-lg"
              aria-label="Toggle image framing mode"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>

            {/* Micro Tech Floating Badge */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-[#080c14]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-cyan-500/40 shadow-xl text-xs font-mono text-slate-200">
              <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Dipro Chowdhury
              </span>
              <span className="px-2 py-0.5 rounded-md bg-cyan-950/80 text-cyan-400 border border-cyan-800 text-[10px]">
                AI/ML Engineer
              </span>
            </div>
          </div>
        ) : (
          /* Fascinating AI Neural Core Fallback */
          <div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#1e293b] to-[#080c14] border border-slate-700/60 flex flex-col items-center justify-center p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <AILogoEmblem size="xl" className="mb-4" />
              
              <h3 className="font-heading font-extrabold text-2xl text-white">
                Dipro Chowdhury
              </h3>
              <span className="text-xs font-mono text-cyan-400 mt-1 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
                AI/ML & Generative AI Engineer
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
