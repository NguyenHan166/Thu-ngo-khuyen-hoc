import React from 'react';
import { letterContent } from '../content/letter';

interface LetterBodyProps {
  className?: string;
}

export const LetterBody: React.FC<LetterBodyProps> = ({ className = '' }) => {
  /**
   * Helper to highlight "QUỸ KHUYẾN HỌC XÃ MINH THÁI" exactly as in the Word source
   * without changing any wording or case.
   */
  const renderParagraphWithHighlight = (text: string) => {
    const target = "QUỸ KHUYẾN HỌC XÃ MINH THÁI";
    if (!text.includes(target)) {
      return text;
    }

    const parts = text.split(target);
    return (
      <>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <strong className="font-semibold text-red-900 uppercase">
                {target}
              </strong>
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <article className={`max-w-[68ch] mx-auto text-ink-900 ${className}`}>
      {/* Salutation / Kính gửi */}
      <div className="mb-3.5 pb-1 text-left">
        <p className="text-[14.5px] sm:text-[15.5px] md:text-[16px] leading-[1.62] text-ink-900">
          <strong className="font-semibold text-red-900 font-serif">Kính gửi:</strong>{' '}
          <span className="font-normal">
            {letterContent.salutation.replace(/^Kính gửi:\s*/i, '')}
          </span>
        </p>
      </div>

      {/* 4 Paragraphs from official Word source */}
      <div className="space-y-3 sm:space-y-3.5 text-justify sm:text-left">
        {letterContent.paragraphs.map((p, idx) => (
          <p
            key={idx}
            className="text-[14.5px] sm:text-[15.5px] md:text-[16px] leading-[1.65] sm:leading-[1.7] text-ink-900 font-normal tracking-normal text-left indent-5 sm:indent-7"
          >
            {renderParagraphWithHighlight(p)}
          </p>
        ))}
      </div>
    </article>
  );
};
