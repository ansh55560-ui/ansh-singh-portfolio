import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare } from 'lucide-react';

export const AIChatButton = ({ isOpen, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      aria-label={isOpen ? "Close Ansh AI chat assistant" : "Open Ansh AI chat assistant"}
      aria-expanded={isOpen}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      id="ai-chat-floating-trigger"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9990,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.65rem',
        padding: '0.75rem 1.25rem',
        background: 'linear-gradient(135deg, rgba(13, 17, 28, 0.92) 0%, rgba(9, 12, 22, 0.96) 100%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(59, 130, 246, 0.55)',
        borderRadius: '9999px',
        color: '#ffffff',
        cursor: 'pointer',
        boxShadow: '0 8px 30px rgba(37, 99, 235, 0.35), 0 0 20px rgba(59, 130, 246, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.875rem',
        fontWeight: 700,
        letterSpacing: '0.01em',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease'
      }}
    >
      {/* Animated Sparkles Icon Container with Blue Gradient */}
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          boxShadow: '0 0 12px rgba(59, 130, 246, 0.6)',
          flexShrink: 0,
          position: 'relative'
        }}
      >
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Sparkles size={15} />
        </motion.div>

        {/* Live Pulse Indicator Dot */}
        <span
          style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: '#10b981',
            boxShadow: '0 0 6px #10b981',
            border: '1.5px solid #090c14'
          }}
        />
      </div>

      {/* Button Label */}
      <span style={{ color: '#ffffff', textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)' }}>
        Ask Ansh AI
      </span>

      <style>{`
        @media (max-width: 640px) {
          #ai-chat-floating-trigger {
            bottom: 16px !important;
            right: 16px !important;
            padding: 0.65rem 1rem !important;
            font-size: 0.8125rem !important;
          }
        }
      `}</style>
    </motion.button>
  );
};
