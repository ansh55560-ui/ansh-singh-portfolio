import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { QuickActions } from './QuickActions';
import { ChatInput } from './ChatInput';

export const AIChatWindow = ({
  isOpen,
  isMinimized,
  onClose,
  onMinimize,
  messages,
  isThinking,
  inputRef,
  onSendMessage,
  onQuickAction
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="ai-chat-window-container"
          role="dialog"
          aria-label="Ansh AI Chat Assistant"
          aria-modal="false"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            height: isMinimized ? 'auto' : 'min(580px, 80vh)'
          }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            bottom: '84px',
            right: '24px',
            width: 'min(400px, calc(100vw - 32px))',
            maxHeight: '80vh',
            zIndex: 9991,
            background: 'rgba(9, 12, 22, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(59, 130, 246, 0.35)',
            borderRadius: '18px',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 35px -5px rgba(37, 99, 235, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <ChatHeader
            onMinimize={onMinimize}
            onClose={onClose}
            isMinimized={isMinimized}
          />

          {/* Collapsible Body (Hidden when Minimized) */}
          {!isMinimized && (
            <>
              {/* Message List */}
              <ChatMessages
                messages={messages}
                isThinking={isThinking}
                onSelectSuggestion={onSendMessage}
                onQuickAction={onQuickAction}
              />

              {/* Quick Actions Scrollbar */}
              <QuickActions onSelectAction={onSendMessage} />

              {/* Input Footer */}
              <ChatInput
                onSend={onSendMessage}
                inputRef={inputRef}
                isThinking={isThinking}
              />
            </>
          )}

          <style>{`
            @media (max-width: 640px) {
              #ai-chat-window-container {
                bottom: 72px !important;
                right: 12px !important;
                left: 12px !important;
                width: calc(100vw - 24px) !important;
                max-height: 75vh !important;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
