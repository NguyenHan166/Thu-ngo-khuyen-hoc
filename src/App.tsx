import { useState, useEffect, useCallback, useRef } from 'react';
import { DecorativeBackdrop } from './components/DecorativeBackdrop';
import { CoverScene } from './components/CoverScene';
import { LetterScene } from './components/LetterScene';
import { FloatingSupportAction } from './components/FloatingSupportAction';
import { FloatingAudioPlayer } from './components/FloatingAudioPlayer';
import { AccessibleToast } from './components/AccessibleToast';

type AppState = 'cover' | 'reading';

export function App() {
  const [state, setState] = useState<AppState>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#thu-ngo' || hash === '#ung-ho') {
        return 'reading';
      }
    }
    return 'cover';
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<number | null>(null);

  // Synchronize browser history / hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#thu-ngo' || hash === '#ung-ho') {
        setState('reading');
      } else if (!hash) {
        // If hash cleared, return to cover
        setState('cover');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Toast notification helper with cleanup
  const showToast = useCallback((msg: string) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToastMessage(msg);
    toastTimeoutRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  }, []);

  const handleCloseToast = useCallback(() => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToastMessage(null);
  }, []);

  // Open letter immediately with smooth instant transition (no 750ms lag)
  const handleOpenLetter = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.location.hash = '#thu-ngo';
    setState('reading');
  }, []);

  // Return to cover
  const handleReturnToCover = useCallback(() => {
    if (window.history.pushState) {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = '';
    }
    setState('cover');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-red-950 text-ink-900 font-sans selection:bg-gold-500 selection:text-red-950">
      {/* Background with glowing aura and geometric borders */}
      <DecorativeBackdrop />

      {/* Main Content View: Instant switch with smooth CSS entrance */}
      {state === 'cover' ? (
        <CoverScene onOpenLetter={handleOpenLetter} />
      ) : (
        <LetterScene
          onReturnToCover={handleReturnToCover}
          onNotify={showToast}
        />
      )}

      {/* Floating Action Buttons: Thông tin ủng hộ & Đọc thư */}
      {state === 'reading' && (
        <aside
          aria-label="Tiện ích hỗ trợ và đọc thư"
          className="fixed bottom-3.5 left-3 sm:bottom-5 sm:left-5 z-40 print:hidden flex flex-col items-start gap-1.5 select-none pointer-events-none [&>*]:pointer-events-auto"
        >
          {/* Nút Thông tin ủng hộ nằm bên trên */}
          <FloatingSupportAction
            visible={state === 'reading'}
            targetId="ung-ho"
          />
          {/* Nút Đọc thư / Thanh audio nằm bên dưới */}
          <FloatingAudioPlayer
            visible={state === 'reading'}
            audioSrc="/audio/voice-thu-ngo.wav"
          />
        </aside>
      )}

      {/* Accessible Polite Status Notification Toast */}
      <AccessibleToast
        message={toastMessage}
        onClose={handleCloseToast}
      />
    </div>
  );
}

export default App;
