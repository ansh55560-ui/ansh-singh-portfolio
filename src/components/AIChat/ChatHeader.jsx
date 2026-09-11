import React from 'react';
import { Minus, X, Sparkles } from 'lucide-react';

export const ChatHeader = ({ onMinimize, onClose, isMinimized }) => {
  return (
    <div
      style={{
        padding: '0.85rem 1rem',
        background: 'rgba(13, 17, 28, 0.95)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.75rem',
        userSelect: 'none'
      }}
    >
      {/* Left: Avatar & Branding Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        {/* AS Avatar */}
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #38bdf8 100%)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 0 14px rgba(37, 99, 235, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: 800,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            flexShrink: 0
          }}
        >
          AS
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <h3 style={{ fontSize: '0.9375rem', fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>
              Ansh AI
            </h3>
            <span
              style={{
                fontSize: '0.625rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-light)',
                background: 'rgba(59, 130, 246, 0.15)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                padding: '0.08rem 0.35rem',
                borderRadius: '4px',
                fontWeight: 600
              }}
            >
              Assistant
            </span>
          </div>

          {/* Status Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '2px' }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: '#38bdf8',
                boxShadow: '0 0 8px #38bdf8',
                display: 'inline-block'
              }}
            />
            <span style={{ fontSize: '0.6875rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
              Online
            </span>
          </div>
        </div>
      </div>

      {/* Right: Window Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
        <button
          onClick={onMinimize}
          aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
          title={isMinimized ? "Expand" : "Minimize"}
          style={{
            width: 28,
            height: 28,
            borderRadius: '6px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#94a3b8',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
            e.currentTarget.style.color = '#94a3b8';
          }}
        >
          <Minus size={15} />
        </button>

        <button
          onClick={onClose}
          aria-label="Close chat window"
          title="Close (Esc)"
          style={{
            width: 28,
            height: 28,
            borderRadius: '6px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#94a3b8',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
            e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
            e.currentTarget.style.color = '#f87171';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.color = '#94a3b8';
          }}
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
};
