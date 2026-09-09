import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        zIndex: 1000,
        pointerEvents: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.05)'
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #06b6d4 100%)',
          boxShadow: '0 0 10px rgba(99, 102, 241, 0.7)',
          transition: 'width 0.1s ease-out'
        }}
      />
    </div>
  );
};
