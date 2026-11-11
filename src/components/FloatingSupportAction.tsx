import React, { useState, useEffect } from 'react';
import { HeartHandshake } from 'lucide-react';

interface FloatingSupportActionProps {
  visible: boolean;
  targetId?: string;
}

export const FloatingSupportAction: React.FC<FloatingSupportActionProps> = ({
  visible,
  targetId = 'ung-ho',
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!visible) {
      setShow(false);
      return;
    }

    const handleScroll = () => {
      const target = document.getElementById(targetId);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const scrollPos = window.scrollY || window.pageYOffset;

      // Show after scrolled down 400px and hide when the donation section is fully in view
      const targetInView = rect.top < window.innerHeight && rect.bottom > 0;
      setShow(scrollPos > 400 && !targetInView);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible, targetId]);

  if (!show) return null;

  const scrollToSupport = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside
      aria-label="Lối tắt cuộn đến thông tin ủng hộ"
      className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-6 z-40 print:hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
    >
      <button
        type="button"
        onClick={scrollToSupport}
        className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-red-900/95 hover:bg-red-800 text-gold-300 hover:text-white border border-gold-500/50 shadow-lg hover:shadow-xl text-xs sm:text-sm font-semibold transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-gold-500 cursor-pointer"
        title="Cuộn nhanh tới phần thông tin ủng hộ"
      >
        <HeartHandshake className="w-4 h-4 text-gold-300" aria-hidden="true" />
        <span className="font-serif">Thông tin ủng hộ</span>
      </button>
    </aside>
  );
};
