import React, { useEffect, useRef } from 'react';
import { LetterPaper } from './LetterPaper';

interface LetterSceneProps {
  onReturnToCover: () => void;
  onNotify?: (message: string) => void;
}

export const LetterScene: React.FC<LetterSceneProps> = ({
  onReturnToCover,
  onNotify,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If arriving via hash #ung-ho, scroll directly to donation block
    if (window.location.hash === '#ung-ho') {
      setTimeout(() => {
        const el = document.getElementById('ung-ho');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    } else {
      // Scroll to top immediately without lagging animation
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <main
      ref={containerRef}
      tabIndex={-1}
      className="relative min-h-screen w-full flex flex-col items-center justify-start p-3 sm:p-6 md:p-8 z-10 focus:outline-none"
    >
      <LetterPaper
        onReturnToCover={onReturnToCover}
        onNotify={onNotify}
      />
    </main>
  );
};
