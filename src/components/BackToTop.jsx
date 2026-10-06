import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          style={{
            position: 'fixed',
            bottom: '84px',
            right: '26px',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: 'rgba(15, 18, 28, 0.85)',
            border: '1px solid rgba(59, 130, 246, 0.4)',
            backdropFilter: 'blur(12px)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 800,
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6), 0 0 15px rgba(37, 99, 235, 0.3)',
            cursor: 'pointer'
          }}
          id="back-to-top-btn"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={18} />
          <style>{`
            @media (max-width: 640px) {
              #back-to-top-btn {
                bottom: 130px !important;
                right: 18px !important;
                width: 38px !important;
                height: 38px !important;
              }
            }
          `}</style>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
