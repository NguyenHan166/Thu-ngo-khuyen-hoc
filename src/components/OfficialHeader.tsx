import React from 'react';
import { letterContent } from '../content/letter';

interface OfficialHeaderProps {
  variant?: 'cover' | 'letter';
  className?: string;
}

export const OfficialHeader: React.FC<OfficialHeaderProps> = ({
  variant = 'cover',
  className = '',
}) => {
  const isCover = variant === 'cover';

  return (
    <header className={`text-center select-none ${className}`}>
      {/* Slogan pill if on cover */}
      {isCover && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-3 rounded-full border border-gold-300/50 bg-black/25 shadow-sm backdrop-blur-[2px]">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-300 animate-pulse" />
          <span className="font-serif italic text-xs sm:text-sm tracking-wide text-[#FFF3D6] font-medium">
            {letterContent.motto}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-300 animate-pulse" />
        </div>
      )}

      {/* Main Government Authorities */}
      <div
        className={`font-sans font-bold tracking-wider uppercase transition-colors ${
          isCover
            ? 'text-xs sm:text-sm md:text-[14.5px] text-[#FFF2CC]'
            : 'text-xs sm:text-sm md:text-sm text-ink-900'
        }`}
      >
        {isCover ? (
          <p className="leading-snug">
            <span className="inline-block whitespace-nowrap">ĐẢNG ỦY - HĐND - UBND</span>
            <span className="hidden min-[520px]:inline"> - </span>
            <span className="inline-block whitespace-nowrap min-[520px]:inline">ỦY BAN MTTQ VIỆT NAM</span>
          </p>
        ) : (
          <p className="leading-snug">
            {letterContent.authorityLines.join(' - ')}
          </p>
        )}
      </div>

      {/* Location / Province line: Xã Minh Thái ngang hàng và cùng style với Tỉnh Ninh Bình */}
      <div
        className={`mt-1 font-sans font-semibold tracking-widest text-[11px] sm:text-xs uppercase ${
          isCover ? 'text-[#FFE4A0] font-medium' : 'text-ink-700'
        }`}
      >
        {isCover ? (
          <span>XÃ MINH THÁI - TỈNH NINH BÌNH</span>
        ) : (
          letterContent.province
        )}
      </div>

      {/* Delicate ornamental divider */}
      <div className="flex items-center justify-center gap-2 mt-2 sm:mt-2.5 max-w-[240px] mx-auto opacity-70">
        <span
          className={`h-[1px] flex-1 ${
            isCover ? 'bg-gradient-to-r from-transparent via-gold-500 to-transparent' : 'bg-gradient-to-r from-transparent via-line-gold to-transparent'
          }`}
        />
        <span
          className={`text-[9px] transform rotate-45 inline-block ${
            isCover ? 'text-gold-300' : 'text-gold-700'
          }`}
        >
          ◆
        </span>
        <span
          className={`h-[1px] flex-1 ${
            isCover ? 'bg-gradient-to-r from-transparent via-gold-500 to-transparent' : 'bg-gradient-to-r from-transparent via-line-gold to-transparent'
          }`}
        />
      </div>
    </header>
  );
};
