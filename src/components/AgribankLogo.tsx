import React from 'react';

interface AgribankLogoProps {
  className?: string;
}

export const AgribankLogo: React.FC<AgribankLogoProps> = ({ className = 'h-10 sm:h-12 w-auto' }) => {
  return (
    <div className="inline-flex items-center select-none" aria-label="Logo Ngân hàng Agribank">
      <img
        src="/images/agribank-logo.png"
        alt="Logo Ngân hàng Agribank"
        className={`object-contain max-h-12 sm:max-h-14 ${className}`}
        loading="eager"
      />
    </div>
  );
};
