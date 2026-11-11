import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { letterContent } from '../content/letter';

interface CopyAccountButtonProps {
  onCopySuccess?: () => void;
  className?: string;
}

export const CopyAccountButton: React.FC<CopyAccountButtonProps> = ({
  onCopySuccess,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);
  const accountNumber = letterContent.bank.accountNumber;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(accountNumber);
      } else {
        // Fallback for older or restricted webviews / in-app browsers
        const textarea = document.createElement('textarea');
        textarea.value = accountNumber;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      if (onCopySuccess) onCopySuccess();
      setTimeout(() => setCopied(false), 2600);
    } catch (err) {
      console.warn('Clipboard copy failed:', err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[46px] rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold-500 cursor-pointer ${
        copied
          ? 'bg-emerald-700 text-white shadow-emerald-700/20'
          : 'bg-red-900 hover:bg-red-800 text-white hover:shadow-md'
      } ${className}`}
      aria-label={`Sao chép số tài khoản: ${accountNumber}`}
      title="Sao chép số tài khoản"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-emerald-200 stroke-[2.5]" aria-hidden="true" />
          <span>Đã sao chép số tài khoản</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 text-gold-300 stroke-[2]" aria-hidden="true" />
          <span>Sao chép số tài khoản</span>
        </>
      )}
    </button>
  );
};
