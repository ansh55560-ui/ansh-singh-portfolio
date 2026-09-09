import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      if (documentHeight > 0) {
        const currentScroll = window.scrollY;
        const currentProgress = (currentScroll / documentHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', calculateProgress, { passive: true });
    calculateProgress();

    return () => window.removeEventListener('scroll', calculateProgress);
  }, []);

  return progress;
}
