import React from 'react';
import { letterContent } from '../content/letter';

interface LetterClosingProps {
  className?: string;
}

export const LetterClosing: React.FC<LetterClosingProps> = ({ className = '' }) => {
  return (
    <div className={`mt-5 sm:mt-6 text-center text-ink-900 ${className}`}>
      {/* Thank you note */}
      <p className="font-serif italic font-bold text-lg sm:text-xl md:text-2xl text-red-900 tracking-wide">
        {letterContent.closing}
      </p>
    </div>
  );
};
