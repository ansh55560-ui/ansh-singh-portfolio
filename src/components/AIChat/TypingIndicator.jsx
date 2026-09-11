import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.5rem',
        marginBottom: '0.85rem'
      }}
    >
      {/* AI Icon Avatar */}
      <div
        style={{
          width: 24,
          height: 24,
          borderRadius: '6px',
          background: 'rgba(37, 99, 235, 0.2)',
          border: '1px solid rgba(59, 130, 246, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent-light)',
          flexShrink: 0,
          marginTop: '2px'
        }}
      >
        <Sparkles size={12} />
      </div>

      {/* Bubble */}
      <div
        style={{
          padding: '0.6rem 0.95rem',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(8px)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          Ansh AI is thinking
        </span>

        {/* 3 Animated Dots */}
        <div style={{ display: 'inline-flex', gap: '3px', alignItems: 'center' }}>
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut'
              }}
              style={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                backgroundColor: 'var(--accent-secondary)',
                display: 'inline-block'
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
