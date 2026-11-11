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
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!visible) {
      setShow(false);
      return;
    }

    // Luôn hiện từ đầu, chỉ ẩn khi đã cuộn đến khối thông tin ngân hàng
    const handleScroll = () => {
      const target = document.getElementById(targetId);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const targetInView = rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
      setShow(!targetInView);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible, targetId]);

  if (!visible || !show) return null;

  const scrollToSupport = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToSupport}
      className="group relative overflow-hidden flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#B8192D] via-[#D32338] to-[#A31425] text-white border border-gold-300/80 shadow-xl shadow-red-950/30 transition-all duration-200 active:scale-95 cursor-pointer hover:brightness-105 focus-visible:ring-2 focus-visible:ring-gold-300 animate-in fade-in slide-in-from-bottom-2 select-none"
      title="Cuộn nhanh tới phần thông tin ủng hộ"
      aria-label="Cuộn nhanh tới phần thông tin ủng hộ"
    >
      {/* Icon badge nền cùng màu trang nội dung (#FFFCF4), biểu tượng màu đỏ tươi */}
      <div className="relative flex items-center justify-center shrink-0 w-5 h-5 rounded-full bg-[#FFFCF4] text-[#B8192D] shadow-sm">
        <HeartHandshake className="w-3.5 h-3.5" aria-hidden="true" />
      </div>
      <span className="font-serif text-xs sm:text-sm font-semibold tracking-wide text-white drop-shadow-sm">
        Thông tin ủng hộ
      </span>
    </button>
  );
};
