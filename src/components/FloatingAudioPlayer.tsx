import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Volume2, Play, Pause, RotateCcw, X } from 'lucide-react';

interface FloatingAudioPlayerProps {
  visible: boolean;
  audioSrc?: string;
  onNotify?: (message: string) => void;
}

export const FloatingAudioPlayer: React.FC<FloatingAudioPlayerProps> = ({
  visible,
  audioSrc = '/audio/voice-thu-ngo.wav',
  onNotify: _onNotify,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isEnded, setIsEnded] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setIsEnded(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setIsEnded(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
    };
  }, []);

  // Pause audio if user returns to cover
  useEffect(() => {
    if (!visible && audioRef.current && isPlaying) {
      audioRef.current.pause();
    }
  }, [visible, isPlaying]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      setIsExpanded(true);

      if (isEnded) {
        audio.currentTime = 0;
        setIsEnded(false);
        await audio.play();
        setIsPlaying(true);
        return;
      }

      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.warn('Playback error:', err);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = progressBarRef.current;
    const audio = audioRef.current;
    if (!bar || !audio || !duration) return;

    const rect = bar.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const newRatio = clickX / rect.width;
    audio.currentTime = newRatio * duration;
    setCurrentTime(audio.currentTime);
  };

  const handleTouchSeek = (e: React.TouchEvent<HTMLDivElement>) => {
    const bar = progressBarRef.current;
    const audio = audioRef.current;
    if (!bar || !audio || !duration || !e.touches[0]) return;

    const rect = bar.getBoundingClientRect();
    const touchX = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const newRatio = touchX / rect.width;
    audio.currentTime = newRatio * duration;
    setCurrentTime(audio.currentTime);
  };

  const formatTime = useCallback((secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }, []);

  if (!visible) return null;

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      aria-label="Trình phát âm thanh đọc thư ngỏ"
      className="transition-all duration-300 animate-in fade-in select-none"
    >
      {/* Hidden native audio tag */}
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      {!isExpanded ? (
        /* Trạng thái ban đầu: Nút bấm gọn gàng "Đọc thư" cùng style và hạ độ cao */
        <button
          type="button"
          onClick={togglePlay}
          className="group relative overflow-hidden flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#B8192D] via-[#D32338] to-[#A31425] text-white border border-gold-300/80 shadow-xl shadow-red-950/30 transition-all duration-200 active:scale-95 cursor-pointer hover:brightness-105 focus-visible:ring-2 focus-visible:ring-gold-300"
          aria-label="Bắt đầu nghe đọc thư ngỏ"
          title="Bắt đầu nghe đọc thư ngỏ"
        >
          {/* Nút icon tròn nền cùng màu trang nội dung (#FFFCF4) */}
          <div className="relative flex items-center justify-center shrink-0 w-5 h-5 rounded-full bg-[#FFFCF4] text-[#B8192D] shadow-sm">
            <Volume2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping opacity-75" />
          </div>
          <span className="font-serif text-xs sm:text-sm font-semibold tracking-wide text-white drop-shadow-sm">
            Đọc thư
          </span>
        </button>
      ) : (
        /* Trạng thái mở: Thanh tiến trình Audio Player màu đỏ tươi, chiều cao gọn gàng */
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#B8192D] via-[#D32338] to-[#A31425] text-white border border-gold-300/90 shadow-2xl shadow-red-950/40 backdrop-blur-md animate-in zoom-in-95 duration-200"
          role="region"
          aria-label="Bộ điều khiển thanh tiến trình âm thanh"
        >
          {/* Nút Play / Pause / Replay: Nền cùng màu trang nội dung (#FFFCF4), icon màu đỏ tươi */}
          <button
            type="button"
            onClick={togglePlay}
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FFFCF4] hover:bg-white text-[#B8192D] border border-amber-200/80 flex items-center justify-center shrink-0 shadow-md transition-transform active:scale-90 cursor-pointer"
            aria-label={isEnded ? 'Phát lại' : isPlaying ? 'Tạm dừng' : 'Tiếp tục phát'}
            title={isEnded ? 'Phát lại' : isPlaying ? 'Tạm dừng' : 'Tiếp tục phát'}
          >
            {isEnded ? (
              <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" aria-hidden="true" />
            ) : isPlaying ? (
              <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" aria-hidden="true" />
            ) : (
              <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" aria-hidden="true" />
            )}
          </button>

          {/* Thời gian hiện tại */}
          <span className="text-[10.5px] sm:text-[11px] font-mono font-medium text-gold-100 min-w-[26px] text-right drop-shadow-sm">
            {formatTime(currentTime)}
          </span>

          {/* Thanh tiến trình có thể bấm để tua (Interactive Progress Bar) */}
          <div
            ref={progressBarRef}
            onClick={handleSeek}
            onTouchStart={handleTouchSeek}
            onTouchMove={handleTouchSeek}
            className="relative w-20 sm:w-32 h-1.5 bg-black/30 border border-gold-300/40 rounded-full cursor-pointer flex items-center"
            title="Bấm để tua đoạn đọc"
          >
            <div
              className="h-full bg-gradient-to-r from-gold-300 via-white to-gold-300 rounded-full relative transition-all duration-75"
              style={{ width: `${progressPercent}%` }}
            >
              {/* Nút chỉ báo tiến trình tròn nhỏ */}
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-sm shadow-black/40 border border-gold-400" />
            </div>
          </div>

          {/* Thời lượng tổng */}
          <span className="text-[10.5px] sm:text-[11px] font-mono font-medium text-gold-200/90 min-w-[26px] drop-shadow-sm">
            {formatTime(duration)}
          </span>

          {/* Nút thu nhỏ lại */}
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            className="p-0.5 rounded-full text-gold-200/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
            aria-label="Thu nhỏ thanh phát"
            title="Thu nhỏ"
          >
            <X className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
};
