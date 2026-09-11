import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const ChatInput = ({ onSend, inputRef, isThinking }) => {
  const [inputVal, setInputVal] = useState('');

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!inputVal.trim() || isThinking) return;
    onSend(inputVal);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: '0.75rem 0.85rem',
        background: 'rgba(13, 17, 28, 0.98)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}
    >
      <input
        ref={inputRef}
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask anything about Ansh's work..."
        aria-label="Message input for Ansh AI"
        disabled={isThinking}
        style={{
          flex: 1,
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '9999px',
          padding: '0.6rem 1rem',
          color: '#ffffff',
          fontSize: '0.8125rem',
          fontFamily: 'var(--font-sans)',
          outline: 'none',
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.6)';
          e.currentTarget.style.boxShadow = '0 0 12px rgba(37, 99, 235, 0.25)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      />

      <button
        type="submit"
        disabled={!inputVal.trim() || isThinking}
        aria-label="Send message"
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: inputVal.trim() && !isThinking ? 'var(--grad-accent-btn)' : 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: inputVal.trim() && !isThinking ? '#ffffff' : '#64748b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: inputVal.trim() && !isThinking ? 'pointer' : 'default',
          transition: 'all 0.2s ease',
          boxShadow: inputVal.trim() && !isThinking ? '0 2px 12px rgba(37, 99, 235, 0.4)' : 'none',
          flexShrink: 0
        }}
      >
        <Send size={15} style={{ transform: 'translateX(1px)' }} />
      </button>
    </form>
  );
};
