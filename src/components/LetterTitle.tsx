import React from 'react';
import { letterContent } from '../content/letter';
import { OfficialHeader } from './OfficialHeader';
import { OpenBookIllustration } from './OpenBookIllustration';

interface LetterTitleProps {
  className?: string;
}

export const LetterTitle: React.FC<LetterTitleProps> = ({ className = '' }) => {
  return (
    <div className={`text-center pt-1 sm:pt-2 pb-1 ${className}`}>
      {/* Top Banner: Motto */}
      <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 mb-2.5 rounded-full bg-red-900/10 border border-gold-500/30 text-red-900 shadow-sm">
        <span className="font-serif italic text-xs sm:text-sm font-semibold tracking-wide text-red-900">
          {letterContent.motto}
        </span>
      </div>

      {/* Official Authorities */}
      <OfficialHeader variant="letter" className="mb-3" />

      {/* Small Book Symbol in paper */}
      <div className="flex justify-center my-1.5 opacity-90">
        <OpenBookIllustration size="sm" withGlow={false} />
      </div>

      {/* Document Main Heading */}
      <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-[42px] text-red-900 tracking-tight leading-tight mb-1">
        {letterContent.mainTitle}
      </h1>

      {/* Subtitle */}
      <p className="font-serif italic font-medium text-base sm:text-lg md:text-xl text-gold-700 mb-1">
        {letterContent.subTitle}
      </p>

      {/* Fund Name */}
      <h2 className="font-serif font-bold text-lg sm:text-xl md:text-2xl text-red-950 uppercase tracking-wide px-2 max-w-2xl mx-auto leading-snug">
        {letterContent.fundName}
      </h2>

      {/* Underline ornament */}
      <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-2.5 rounded-full" />
    </div>
  );
};
