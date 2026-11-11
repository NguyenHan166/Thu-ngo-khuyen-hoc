import React from 'react';
import { MailOpen } from 'lucide-react';
import { letterContent } from '../content/letter';
import { OfficialHeader } from './OfficialHeader';
import { OpenBookIllustration } from './OpenBookIllustration';

interface CoverSceneProps {
  onOpenLetter: () => void;
}

export const CoverScene: React.FC<CoverSceneProps> = ({
  onOpenLetter,
}) => {
  return (
    <section
      aria-label="Bìa thư ngỏ Quỹ Khuyến học xã Minh Thái"
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center p-3.5 sm:p-5 md:p-6 z-10 select-none animate-in fade-in duration-300"
    >
      {/* Decorative Book/Cover Card Container with brighter crimson tone */}
      <div
        className="relative w-full max-w-[650px] bg-gradient-to-b from-[#A31627] via-[#820E1C] to-[#911222] border-2 border-[#E5B85C]/75 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl shadow-black/50 text-center transition-all duration-300 scale-100 opacity-100"
      >
        {/* Inner thin gold decorative line */}
        <div className="absolute inset-2 sm:inset-2.5 border border-gold-300/40 rounded-2xl pointer-events-none" />

        {/* 4 Corner Accents */}
        <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 w-5 h-5 border-t-2 border-l-2 border-gold-300/80" />
        <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 w-5 h-5 border-t-2 border-r-2 border-gold-300/80" />
        <div className="absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 w-5 h-5 border-b-2 border-l-2 border-gold-300/80" />
        <div className="absolute bottom-3 right-3 sm:bottom-3.5 sm:right-3.5 w-5 h-5 border-b-2 border-r-2 border-gold-300/80" />

        {/* Official Header */}
        <OfficialHeader variant="cover" className="mb-3 sm:mb-4" />

        {/* Center Illuminated Open Book */}
        <div className="my-2.5 sm:my-4 flex justify-center">
          <OpenBookIllustration size="md" withGlow={true} />
        </div>

        {/* Title: THƯ NGỎ */}
        <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-[56px] text-white tracking-tight drop-shadow-md mb-1.5">
          {letterContent.mainTitle}
        </h1>

        {/* Subtitle */}
        <p className="font-serif italic text-base sm:text-lg md:text-xl text-gold-300 font-medium mb-1.5">
          {letterContent.subTitle}
        </p>

        {/* Fund Name - Responsive: Single line on wide, breaks cleanly before "Xã Minh Thái" on narrow */}
        <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-[34px] text-gold-glow tracking-wide uppercase px-2 leading-tight drop-shadow">
          <span className="inline-block whitespace-nowrap">QUỸ KHUYẾN HỌC</span>{' '}
          <span className="inline-block whitespace-nowrap">XÃ MINH THÁI</span>
        </h2>

        {/* Sub-motto */}
        <p className="text-xs sm:text-sm font-serif italic text-gold-300/80 mt-2 max-w-md mx-auto">
          {letterContent.mottoSub}
        </p>

        {/* Divider line */}
        <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-gold-300/70 to-transparent mx-auto my-4 sm:my-5" />

        {/* Action Button: ONLY Mở thư ngỏ */}
        <div className="flex justify-center max-w-xs mx-auto">
          <button
            type="button"
            onClick={onOpenLetter}
            className="w-full min-h-[48px] px-8 py-3 rounded-full bg-gradient-to-r from-[#F5D78E] via-[#FFEBAB] to-[#E2B75A] text-[#6B0D18] font-bold text-base sm:text-lg tracking-wide shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Mở thư ngỏ điện tử"
          >
            <MailOpen className="w-5 h-5 text-[#6B0D18]" aria-hidden="true" />
            <span>Mở thư ngỏ</span>
          </button>
        </div>

        {/* Hint text */}
        <p className="text-[11px] sm:text-xs text-gold-300/70 mt-3.5">
          Nhấn &ldquo;Mở thư ngỏ&rdquo; để đọc toàn bộ nội dung thư
        </p>
      </div>
    </section>
  );
};
