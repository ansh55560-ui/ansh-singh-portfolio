import React from 'react';
import { useAIChat } from '../../hooks/useAIChat';
import { AIChatButton } from './AIChatButton';
import { AIChatWindow } from './AIChatWindow';

export const AIChat = () => {
  const {
    isOpen,
    isMinimized,
    messages,
    isThinking,
    inputRef,
    toggleChat,
    closeChat,
    minimizeChat,
    sendMessage,
    handleQuickAction
  } = useAIChat();

  return (
    <>
      <AIChatButton isOpen={isOpen} onClick={toggleChat} />
      <AIChatWindow
        isOpen={isOpen}
        isMinimized={isMinimized}
        onClose={closeChat}
        onMinimize={minimizeChat}
        messages={messages}
        isThinking={isThinking}
        inputRef={inputRef}
        onSendMessage={sendMessage}
        onQuickAction={handleQuickAction}
      />
    </>
  );
};

export default AIChat;
