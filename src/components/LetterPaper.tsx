import React from 'react';
import { OrnamentalCorner, OrnamentalDivider } from './OrnamentalFrame';
import { LetterTitle } from './LetterTitle';
import { LetterBody } from './LetterBody';
import { DonationBlock } from './DonationBlock';
import { LetterClosing } from './LetterClosing';
import { ShareActions } from './ShareActions';

interface LetterPaperProps {
  onReturnToCover: () => void;
  onNotify?: (message: string) => void;
  className?: string;
}

export const LetterPaper: React.FC<LetterPaperProps> = ({
  onReturnToCover,
  onNotify,
  className = '',
}) => {
  return (
    <article
      className={`relative w-full max-w-[920px] mx-auto paper-pattern rounded-2xl md:rounded-3xl shadow-paper border border-gold-500/40 p-4 sm:p-6 md:p-10 lg:p-12 my-2 sm:my-4 md:my-6 transition-all duration-300 animate-in fade-in zoom-in-[0.98] print-page ${className}`}
    >
      {/* Delicate inner gold border framing */}
      <div className="absolute inset-2 sm:inset-3 border border-gold-500/25 rounded-xl md:rounded-2xl pointer-events-none select-none print:hidden" />

      {/* 4 Corner Ornaments */}
      <OrnamentalCorner position="top-left" className="top-2.5 left-2.5 sm:top-4 sm:left-4 print:hidden" />
      <OrnamentalCorner position="top-right" className="top-2.5 right-2.5 sm:top-4 sm:right-4 print:hidden" />
      <OrnamentalCorner position="bottom-left" className="bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 print:hidden" />
      <OrnamentalCorner position="bottom-right" className="bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 print:hidden" />

      {/* Letter Contents */}
      <div className="relative z-10">
        {/* Title & Official Headers */}
        <LetterTitle />

        {/* Delicate divider */}
        <OrnamentalDivider />

        {/* Full Text Body */}
        <LetterBody />

        {/* Divider before donation info */}
        <OrnamentalDivider />

        {/* Bank & Donation Information */}
        <DonationBlock onNotify={onNotify} />

        {/* Official Closing: Trân trọng cảm ơn! */}
        <LetterClosing />

        {/* Sharing and Action Buttons */}
        <ShareActions
          onReturnToCover={onReturnToCover}
          onNotify={onNotify}
          className="mt-6 print:hidden"
        />
      </div>
    </article>
  );
};
