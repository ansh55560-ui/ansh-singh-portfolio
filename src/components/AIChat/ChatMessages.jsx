import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { TypingIndicator } from './TypingIndicator';

export const ChatMessages = ({ messages, isThinking, onSelectSuggestion, onQuickAction }) => {
  const messagesEndRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Auto-scroll to bottom on update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isThinking]);

  // Helper to format basic markdown (bold, lists, links)
  const renderFormattedText = (text) => {
    if (!text) return null;
    const lines = text.split('\n');

    return lines.map((line, idx) => {
      if (!line.trim()) {
        return <div key={idx} style={{ height: '0.4rem' }} />;
      }

      // Check if bullet point
      const isBullet = line.trim().startsWith('•') || line.trim().startsWith('-');
      const cleanLine = isBullet ? line.trim().substring(1).trim() : line;

      // Parse bold markers **text**
      const parts = cleanLine.split(/(\*\*.*?\*\*)/g);

      const parsedContent = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={pIdx} style={{ color: '#ffffff', fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={pIdx} style={{ color: 'var(--accent-light)' }}>{part.slice(1, -1)}</em>;
        }
        return part;
      });

      if (isBullet) {
        return (
          <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', marginTop: '0.2rem' }}>
            <span style={{ color: 'var(--accent-secondary)', fontSize: '0.75rem', marginTop: '1px' }}>•</span>
            <span style={{ fontSize: '0.8125rem', lineHeight: 1.5, color: '#e2e8f0' }}>{parsedContent}</span>
          </div>
        );
      }

      return (
        <div key={idx} style={{ fontSize: '0.8125rem', lineHeight: 1.55, color: '#e2e8f0' }}>
          {parsedContent}
        </div>
      );
    });
  };

  return (
    <div
      ref={scrollContainerRef}
      style={{
        flex: 1,
        overflowY: 'auto',
        padding: '1rem 0.85rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        scrollBehavior: 'smooth'
      }}
    >
      {messages.map((msg, index) => {
        const isAI = msg.sender === 'ai';

        return (
          <motion.div
            key={msg.id || index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isAI ? 'flex-start' : 'flex-end',
              maxWidth: '100%'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                maxWidth: isAI ? '92%' : '85%',
                flexDirection: isAI ? 'row' : 'row-reverse'
              }}
            >
              {/* AI Avatar Icon */}
              {isAI && (
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: '6px',
                    background: 'rgba(37, 99, 235, 0.25)',
                    border: '1px solid rgba(59, 130, 246, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  <Sparkles size={13} />
                </div>
              )}

              {/* Message Bubble */}
              <div
                style={{
                  padding: '0.75rem 0.95rem',
                  borderRadius: isAI ? '14px 14px 14px 4px' : '14px 14px 4px 14px',
                  background: isAI
                    ? 'rgba(255, 255, 255, 0.04)'
                    : 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
                  border: isAI
                    ? '1px solid rgba(255, 255, 255, 0.08)'
                    : '1px solid rgba(59, 130, 246, 0.5)',
                  boxShadow: isAI
                    ? '0 4px 15px rgba(0, 0, 0, 0.2)'
                    : '0 4px 18px rgba(37, 99, 235, 0.35)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  color: '#ffffff'
                }}
              >
                {renderFormattedText(msg.text)}

                {/* Quick Link Action Buttons inside AI response */}
                {isAI && msg.quickLinks && msg.quickLinks.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.65rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    {msg.quickLinks.map((link, lIdx) => (
                      <button
                        key={lIdx}
                        onClick={() => onQuickAction(link)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          padding: '0.3rem 0.65rem',
                          borderRadius: '6px',
                          background: 'rgba(59, 130, 246, 0.15)',
                          border: '1px solid rgba(59, 130, 246, 0.35)',
                          color: '#60a5fa',
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(59, 130, 246, 0.3)';
                          e.currentTarget.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
                          e.currentTarget.style.color = '#60a5fa';
                        }}
                      >
                        <span>{link.label}</span>
                        {link.external ? <ExternalLink size={11} /> : <ArrowUpRight size={11} />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Initial Welcome Interactive Suggestions */}
            {isAI && msg.suggestions && msg.suggestions.length > 0 && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                  marginTop: '0.65rem',
                  marginLeft: '2rem',
                  width: 'calc(100% - 2rem)'
                }}
              >
                <span style={{ fontSize: '0.6875rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginBottom: '2px' }}>
                  Suggested questions:
                </span>
                {msg.suggestions.map((suggestion, sIdx) => (
                  <motion.button
                    key={sIdx}
                    onClick={() => onSelectSuggestion(suggestion)}
                    whileHover={{ x: 3 }}
                    style={{
                      textAlign: 'left',
                      padding: '0.45rem 0.75rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: 'var(--accent-light)',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(59, 130, 246, 0.12)';
                      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    }}
                  >
                    <span>{suggestion}</span>
                    <ArrowUpRight size={12} style={{ opacity: 0.6 }} />
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>
        );
      })}

      {/* Typing Indicator */}
      {isThinking && <TypingIndicator />}

      <div ref={messagesEndRef} />
    </div>
  );
};
