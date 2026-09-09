import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch / coarse pointer
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    setIsTouchDevice(mediaQuery.matches);

    const handleMediaChange = (e) => setIsTouchDevice(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    if (mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive target
      const target = e.target;
      const isClickable = target.closest('a, button, input, textarea, [data-cursor-interactive="true"]');
      setIsHoveringClickable(!!isClickable);

      const customTextElement = target.closest('[data-cursor-text]');
      if (customTextElement) {
        setCursorText(customTextElement.getAttribute('data-cursor-text') || "");
      } else {
        setCursorText("");
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return { ...mousePosition, isHoveringClickable, cursorText, isTouchDevice };
}
