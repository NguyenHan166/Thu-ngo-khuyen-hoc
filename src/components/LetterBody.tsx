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
      {/* Salutation / Kính gửi - Justified like Microsoft Word */}
      <div className="mb-3 pb-0.5 text-justify [text-align-last:left] [text-justify:inter-word]">
        <p className="book-page-line text-[14.5px] sm:text-[15px] md:text-[15.5px] text-ink-900 font-normal text-justify [text-align-last:left] [text-justify:inter-word]">
          <strong className="font-semibold text-red-900 font-serif">Kính gửi:</strong>{' '}
          <span className="font-normal">
            {letterContent.salutation.replace(/^Kính gửi:\s*/i, '')}
          </span>
        </p>
      </div>

      {/* 4 Paragraphs from official Word source - Căn đều 2 lề như Word */}
      <div className="space-y-3.5 text-justify [text-align-last:left] [text-justify:inter-word]">
        {letterContent.paragraphs.map((p, idx) => (
          <p
            key={idx}
            className="book-page-line text-[14.5px] sm:text-[15px] md:text-[15.5px] text-ink-900 font-normal tracking-normal text-justify [text-align-last:left] [text-justify:inter-word] indent-6 sm:indent-8"
          >
            {renderParagraphWithHighlight(p)}
          </p>
        ))}
      </div>
    </article>
  );
};
