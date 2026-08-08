import React from 'react';

/**
 * AILogoEmblem Component
 * A fascinating, futuristic glowing AI/ML Neural Core logo emblem
 * replacing simple text initials with dynamic glowing node geometry.
 */
export default function AILogoEmblem({ size = 'md', className = '' }) {
  const dimensions = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-24 h-24'
  }[size] || 'w-10 h-10';

  return (
    <div className={`relative flex items-center justify-center shrink-0 ${dimensions} ${className}`}>
      {/* Outer ambient aura glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 blur-sm opacity-60 animate-pulse" />
      
      {/* Emblem SVG Container */}
      <div className="relative w-full h-full rounded-xl bg-[#080c14] border border-cyan-500/50 p-1.5 flex items-center justify-center shadow-lg shadow-cyan-500/20 overflow-hidden group">
        {/* Futuristic Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:8px_8px] opacity-30" />

        {/* Dynamic Neural Circuit Geometry */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-cyan-400 group-hover:scale-110 transition-transform duration-300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hexagon Boundary */}
          <polygon
            points="50,8 88,28 88,72 50,92 12,72 12,28"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinejoin="round"
            className="opacity-80"
          />

          {/* Inner Tri-Axial Connection Lines */}
          <path d="M50 8 L50 42 M88 72 L58 55 M12 72 L42 55" stroke="#3b82f6" strokeWidth="3" opacity="0.9" />
          <path d="M50 42 L88 28 M50 42 L12 28 M50 42 L50 92" stroke="#00f2fe" strokeWidth="2.5" strokeDasharray="3 3" />

          {/* Central Pulsing Neural Core */}
          <circle cx="50" cy="50" r="12" fill="url(#coreGradient)" stroke="#00f2fe" strokeWidth="2" />

          {/* Orbiting Neural Nodes */}
          <circle cx="50" cy="8" r="5" fill="#00f2fe" />
          <circle cx="88" cy="28" r="5" fill="#3b82f6" />
          <circle cx="88" cy="72" r="5" fill="#00f2fe" />
          <circle cx="50" cy="92" r="5" fill="#3b82f6" />
          <circle cx="12" cy="72" r="5" fill="#00f2fe" />
          <circle cx="12" cy="28" r="5" fill="#3b82f6" />

          {/* Center Sparkle */}
          <circle cx="50" cy="50" r="4" fill="#ffffff" className="animate-ping" opacity="0.8" />

          <defs>
            <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00f2fe" />
              <stop offset="60%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
