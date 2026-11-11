import React from 'react';
import { Share2, BookOpen } from 'lucide-react';

interface ShareActionsProps {
  onReturnToCover: () => void;
  onNotify?: (message: string) => void;
  className?: string;
}

export const ShareActions: React.FC<ShareActionsProps> = ({
  onReturnToCover,
  onNotify,
  className = '',
}) => {
  const handleShare = async () => {
    const shareData = {
      title: 'Thư ngỏ | Quỹ Khuyến học xã Minh Thái',
      text: 'Chung tay xây dựng Quỹ Khuyến học xã Minh Thái — Vì tri thức, vì tương lai quê hương.',
      url: window.location.origin + window.location.pathname + '#thu-ngo',
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        if (onNotify) onNotify('Đã mở hộp thoại chia sẻ!');
        return;
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.warn('Native share failed, using fallback copy:', err);
        } else {
          return;
        }
      }
    }

    // Fallback: Copy link
    try {
      const url = window.location.origin + window.location.pathname + '#thu-ngo';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      if (onNotify) onNotify('Đã sao chép liên kết thư ngỏ vào bộ nhớ tạm!');
    } catch (err) {
      console.warn('Failed to copy link fallback:', err);
    }
  };

  return (
    <div className={`pt-5 sm:pt-6 border-t border-gold-500/25 select-none ${className}`}>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {/* Share Button */}
        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold-500/15 hover:bg-gold-500/25 border border-gold-500/40 text-red-950 font-semibold text-xs sm:text-sm transition-all shadow-sm active:scale-95 cursor-pointer"
          title="Chia sẻ thư ngỏ tới bạn bè, người thân"
        >
          <Share2 className="w-4 h-4 text-gold-700" aria-hidden="true" />
          <span>Chia sẻ thư</span>
        </button>

        {/* Return to Cover */}
        <button
          type="button"
          onClick={onReturnToCover}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-900/10 hover:bg-red-900/15 border border-red-900/30 text-red-900 font-semibold text-xs sm:text-sm transition-all shadow-sm active:scale-95 cursor-pointer"
          title="Trở lại xem trang bìa trang trọng"
        >
          <BookOpen className="w-4 h-4 text-red-900" aria-hidden="true" />
          <span>Xem lại bìa thư</span>
        </button>
      </div>

      <p className="text-center text-[11.5px] sm:text-xs text-[#8B6220] font-medium mt-4 font-serif italic">
        Trân trọng cảm ơn sự đồng hành và tấm lòng vàng của Quý vị đối với thế hệ tương lai quê hương Minh Thái.
      </p>

      {/* Creator attribution */}
      <p className="text-center text-[11px] text-ink-700/40 tracking-wider font-sans mt-3 select-none">
        Made by @nguyenhan
      </p>
    </div>
  );
};
