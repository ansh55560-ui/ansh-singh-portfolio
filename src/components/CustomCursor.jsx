import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

export const CustomCursor = () => {
  const { x, y, isHoveringClickable, cursorText, isTouchDevice } = useMousePosition();

  if (isTouchDevice || x === -100) {
    return null;
  }

  const hasText = Boolean(cursorText);

  return (
    <>
      {/* Outer Follower Ring / Pill */}
      <motion.div
        className="custom-cursor-follower"
        animate={{
          x: x - (hasText ? 44 : isHoveringClickable ? 24 : 16),
          y: y - (hasText ? 44 : isHoveringClickable ? 24 : 16),
          width: hasText ? 88 : isHoveringClickable ? 48 : 32,
          height: hasText ? 88 : isHoveringClickable ? 48 : 32,
          backgroundColor: hasText ? 'rgba(99, 102, 241, 0.9)' : isHoveringClickable ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.04)',
          borderColor: hasText ? '#818cf8' : isHoveringClickable ? 'rgba(99, 102, 241, 0.6)' : 'rgba(255, 255, 255, 0.25)',
          scale: 1
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.5
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          borderRadius: '50%',
          borderWidth: '1px',
          borderStyle: 'solid',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: hasText ? 'blur(8px)' : 'none',
          boxShadow: hasText ? '0 10px 30px rgba(99, 102, 241, 0.5)' : 'none'
        }}
      >
        {hasText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              color: '#ffffff',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              userSelect: 'none'
            }}
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Small Dot */}
      {!hasText && (
        <motion.div
          animate={{
            x: x - 3,
            y: y - 3,
            opacity: isHoveringClickable ? 0 : 1,
            scale: isHoveringClickable ? 0 : 1
          }}
          transition={{
            type: 'spring',
            damping: 35,
            stiffness: 500,
            mass: 0.1
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: 6,
            height: 6,
            backgroundColor: '#6366f1',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 10000,
            boxShadow: '0 0 8px #6366f1'
          }}
        />
      )}
    </>
  );
};
