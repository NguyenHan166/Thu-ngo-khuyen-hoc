import React from 'react';

export const DecorativeBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0"
    >
      {/* Vibrant velvet crimson red gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6B0D18] via-[#8E1423] to-[#5C0A14] opacity-95" />

      {/* Radiant warm gold ambient glow in center */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[900px] h-[700px] bg-[radial-gradient(circle,rgba(255,217,121,0.22)_0%,rgba(201,157,75,0.08)_45%,rgba(142,20,35,0)_70%)] animate-breathing-glow" />

      {/* Subtle traditional diamond pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="traditional-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 40 20 L 20 40 L 0 20 Z"
              fill="none"
              stroke="#F1D58C"
              strokeWidth="1"
            />
            <circle cx="20" cy="20" r="1.5" fill="#F1D58C" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#traditional-grid)" />
      </svg>

      {/* Corner ornamental borders */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-24 h-24 border-t-2 border-l-2 border-gold-500/40" />
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-24 h-24 border-t-2 border-r-2 border-gold-500/40" />
      <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-24 h-24 border-b-2 border-l-2 border-gold-500/40" />
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-24 h-24 border-b-2 border-r-2 border-gold-500/40" />
    </div>
  );
};
