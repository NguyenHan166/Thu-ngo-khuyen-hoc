import React, { useState, useRef, useEffect } from 'react';
import { Volume2, Pause, RotateCcw } from 'lucide-react';

interface FloatingAudioPlayerProps {
  visible: boolean;
  audioSrc?: string;
  onNotify?: (message: string) => void;
}

export const FloatingAudioPlayer: React.FC<FloatingAudioPlayerProps> = ({
  visible,
  audioSrc = '/audio/voice-thu-ngo.wav',
  onNotify,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isEnded, setIsEnded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setCurrentTime(audio.currentTime);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setIsEnded(true);
      setProgress(100);
      if (onNotify) onNotify('Đã phát xong bản đọc thư ngỏ.');
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
  }, [onNotify]);

  // Pause audio if user returns to cover
  useEffect(() => {
    if (!visible && audioRef.current && isPlaying) {
      audioRef.current.pause();
    }
  }, [visible, isPlaying]);

  if (!visible) return null;

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isEnded) {
        audio.currentTime = 0;
        setIsEnded(false);
        await audio.play();
        setIsPlaying(true);
        if (onNotify) onNotify('Đang phát lại bản đọc thư ngỏ...');
        return;
      }

      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
        if (onNotify) onNotify('Đang phát bản đọc thư ngỏ...');
      }
    } catch (err) {
      console.warn('Playback error:', err);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <aside
      aria-label="Trình phát âm thanh đọc thư ngỏ"
      className="fixed bottom-4 left-3.5 sm:bottom-6 sm:left-6 z-40 print:hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 select-none"
    >
      {/* Hidden native audio tag */}
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      {/* Floating Audio Capsule Pill */}
      <button
        type="button"
        onClick={togglePlay}
        className={`group relative overflow-hidden flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border shadow-xl transition-all duration-200 active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-white ${
          isPlaying
            ? 'bg-gradient-to-r from-[#9B1220] via-[#B8192D] to-[#9B1220] text-white border-gold-300 shadow-gold-500/20'
            : 'bg-red-950/95 hover:bg-red-900 text-gold-300 hover:text-white border-gold-500/60 shadow-black/40'
        }`}
        aria-label={
          isEnded
            ? 'Nghe lại bản đọc thư ngỏ'
            : isPlaying
            ? 'Tạm dừng bản đọc thư ngỏ'
            : 'Nghe giọng đọc thư ngỏ'
        }
        title={
          isEnded
            ? 'Nghe lại bản đọc thư'
            : isPlaying
            ? 'Tạm dừng bản đọc'
            : 'Nghe giọng đọc thư ngỏ'
        }
      >
        {/* Animated equalizer waves when playing */}
        {isPlaying ? (
          <div className="flex items-center gap-1 shrink-0 text-white">
            <Pause className="w-4 h-4 fill-current" aria-hidden="true" />
            <div className="flex items-end gap-[2px] h-3.5 w-3 mx-0.5 pb-0.5" aria-hidden="true">
              <span className="w-[2.5px] bg-gold-300 rounded-full animate-audio-bar-1" />
              <span className="w-[2.5px] bg-gold-200 rounded-full animate-audio-bar-2" />
              <span className="w-[2.5px] bg-gold-300 rounded-full animate-audio-bar-3" />
            </div>
          </div>
        ) : isEnded ? (
          <RotateCcw className="w-4 h-4 text-gold-300 shrink-0" aria-hidden="true" />
        ) : (
          <div className="relative flex items-center justify-center shrink-0">
            <Volume2 className="w-4 h-4 text-gold-300 shrink-0" aria-hidden="true" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold-400 animate-ping opacity-75" />
          </div>
        )}

        {/* Text and Time Status */}
        <div className="flex items-baseline gap-1.5 text-xs sm:text-sm font-semibold tracking-wide">
          <span className="font-serif">
            {isEnded ? 'Nghe lại thư' : isPlaying ? 'Đang đọc' : 'Nghe đọc thư'}
          </span>
          {duration > 0 && (
            <span className="text-[10px] text-gold-300/80 font-mono font-normal">
              {isPlaying ? formatTime(currentTime) : formatTime(duration)}
            </span>
          )}
        </div>

        {/* Bottom progress bar */}
        {duration > 0 && (
          <div
            className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-gold-400 via-gold-200 to-gold-400 transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        )}
      </button>
    </aside>
  );
};
