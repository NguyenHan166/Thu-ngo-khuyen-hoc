import React from 'react';

export const OrnamentalCorner: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = '' }) => {
  const rotationClass = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute select-none pointer-events-none transform ${rotationClass} ${className}`}
      aria-hidden="true"
    >
      {/* Outer corner lines */}
      <path
        d="M2 42 L2 2 L42 2"
        stroke="#C99D4B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Inner corner lines */}
      <path
        d="M6 38 L6 6 L38 6"
        stroke="#D8BD81"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Decorative floral/leaf corner motif */}
      <path
        d="M10 10 C16 10 18 12 18 18 C18 12 20 10 26 10 C20 10 18 8 18 2 C18 8 16 10 10 10 Z"
        fill="#F1D58C"
        opacity="0.85"
      />
      <circle cx="10" cy="10" r="1.5" fill="#9B6B22" />
      <circle cx="6" cy="6" r="2" fill="#C99D4B" />
    </svg>
  );
};

export const OrnamentalDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`flex items-center justify-center gap-3 my-3 sm:my-4 select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-line-gold" />
      <div className="flex items-center gap-1.5 text-gold-700">
        <span className="text-[8px] transform rotate-45 inline-block opacity-60">◆</span>
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-gold-500">
          <path
            d="M12 0 C14 4 18 6 24 6 C18 6 14 8 12 12 C10 8 6 6 0 6 C6 6 10 4 12 0 Z"
            fill="currentColor"
            opacity="0.75"
          />
        </svg>
        <span className="text-[8px] transform rotate-45 inline-block opacity-60">◆</span>
      </div>
      <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-line-gold" />
    </div>
  );
};
