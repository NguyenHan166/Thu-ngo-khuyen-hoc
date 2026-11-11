import React from 'react';

interface OpenBookIllustrationProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  withGlow?: boolean;
}

export const OpenBookIllustration: React.FC<OpenBookIllustrationProps> = ({
  size = 'md',
  className = '',
  withGlow = true,
}) => {
  const dimensions = {
    sm: { width: 72, height: 48 },
    md: { width: 140, height: 96 },
    lg: { width: 220, height: 148 },
  }[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      aria-hidden="true"
    >
      {/* Radiant glow behind the book */}
      {withGlow && (
        <div className="absolute inset-0 bg-gold-glow/25 rounded-full blur-2xl transform scale-125" />
      )}

      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 200 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 transition-transform duration-300"
      >
        <defs>
          <linearGradient id="bookCoverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C99D4B" />
            <stop offset="50%" stopColor="#F1D58C" />
            <stop offset="100%" stopColor="#9B6B22" />
          </linearGradient>

          <linearGradient id="pageGradLeft" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF9E6" />
            <stop offset="60%" stopColor="#F1D58C" />
            <stop offset="100%" stopColor="#D8BD81" />
          </linearGradient>

          <linearGradient id="pageGradRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9E6" />
            <stop offset="60%" stopColor="#F1D58C" />
            <stop offset="100%" stopColor="#D8BD81" />
          </linearGradient>

          <radialGradient id="sunburst" cx="50%" cy="85%" r="65%">
            <stop offset="0%" stopColor="#FFD979" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#F1D58C" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F1D58C" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Sunburst / knowledge light rays rising from the book */}
        <g opacity="0.85">
          {/* Center vertical ray */}
          <line x1="100" y1="12" x2="100" y2="44" stroke="#FFD979" strokeWidth="2.5" strokeLinecap="round" />
          {/* Angled rays */}
          <line x1="72" y1="20" x2="82" y2="48" stroke="#F1D58C" strokeWidth="2" strokeLinecap="round" />
          <line x1="128" y1="20" x2="118" y2="48" stroke="#F1D58C" strokeWidth="2" strokeLinecap="round" />
          <line x1="48" y1="36" x2="68" y2="56" stroke="#F1D58C" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="152" y1="36" x2="132" y2="56" stroke="#F1D58C" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="30" y1="60" x2="55" y2="70" stroke="#C99D4B" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="170" y1="60" x2="145" y2="70" stroke="#C99D4B" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Under-shadow of the open book */}
        <ellipse cx="100" cy="120" rx="72" ry="10" fill="#200306" opacity="0.45" />

        {/* Bottom hard cover pages */}
        <path
          d="M100 115 C70 102 34 105 18 111 L22 84 C38 78 72 75 100 88 C128 75 162 78 178 84 L182 111 C166 105 130 102 100 115 Z"
          fill="url(#bookCoverGrad)"
          stroke="#9B6B22"
          strokeWidth="1.2"
        />

        {/* Middle page layers */}
        <path
          d="M100 112 C72 100 38 103 24 107 L26 82 C40 78 72 75 100 86 C128 75 160 78 174 82 L176 107 C162 103 128 100 100 112 Z"
          fill="#EBD096"
          opacity="0.8"
        />

        {/* Main Left Page */}
        <path
          d="M100 109 C72 96 36 99 26 103 L28 66 C38 62 72 58 100 70 Z"
          fill="url(#pageGradLeft)"
          stroke="#C99D4B"
          strokeWidth="1.5"
        />

        {/* Left page text lines (subtle abstract golden engraving) */}
        <path
          d="M44 72 C58 70 76 72 90 77 M42 81 C56 79 76 81 90 86 M40 90 C56 88 74 90 88 95"
          stroke="#9B6B22"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Main Right Page */}
        <path
          d="M100 109 C128 96 164 99 174 103 L172 66 C162 62 128 58 100 70 Z"
          fill="url(#pageGradRight)"
          stroke="#C99D4B"
          strokeWidth="1.5"
        />

        {/* Right page text lines (subtle abstract golden engraving) */}
        <path
          d="M110 77 C124 72 142 70 156 72 M110 86 C124 81 144 79 158 81 M112 95 C126 90 144 88 160 90"
          stroke="#9B6B22"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Book spine center ridge */}
        <path
          d="M100 70 L100 113"
          stroke="#710C18"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M100 70 L100 112"
          stroke="#F1D58C"
          strokeWidth="1"
          strokeLinecap="round"
        />

        {/* Small rising sparks/stars */}
        <circle cx="86" cy="34" r="1.5" fill="#FFF9E6" />
        <circle cx="114" cy="34" r="1.5" fill="#FFF9E6" />
        <circle cx="100" cy="24" r="2" fill="#FFF9E6" />
        <circle cx="60" cy="46" r="1.2" fill="#FFD979" />
        <circle cx="140" cy="46" r="1.2" fill="#FFD979" />
      </svg>
    </div>
  );
};
