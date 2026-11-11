import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface AccessibleToastProps {
  message: string | null;
  onClose: () => void;
}

export const AccessibleToast: React.FC<AccessibleToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-3 rounded-xl bg-ink-900/95 text-white text-xs sm:text-sm font-medium shadow-xl border border-gold-500/40 backdrop-blur-md transition-all animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
      <span>{message}</span>
      <button
        type="button"
        onClick={onClose}
        className="ml-2 text-white/60 hover:text-white p-1 rounded-md text-xs"
        aria-label="Đóng thông báo"
      >
        ✕
      </button>
    </div>
  );
};
