import { useState, useEffect, useCallback, useRef } from 'react';
import { aiService } from '../services/aiService';

const INITIAL_WELCOME_MESSAGE = {
  id: 'welcome-msg',
  sender: 'ai',
  text: "Hi! I'm Ansh AI 👋\n\nI can help you learn more about Ansh's skills, experience, projects and development work.",
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  suggestions: [
    "Who is Ansh?",
    "What's his tech stack?",
    "Tell me about his projects",
    "What's his experience?",
    "How can I contact him?"
  ]
};

export function useAIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([INITIAL_WELCOME_MESSAGE]);
  const [isThinking, setIsThinking] = useState(false);
  const [sessionContext, setSessionContext] = useState({});
  const inputRef = useRef(null);

  // Toggle chat
  const toggleChat = useCallback(() => {
    setIsOpen(prev => {
      const next = !prev;
      if (next) setIsMinimized(false);
      return next;
    });
  }, []);

  const openChat = useCallback(() => {
    setIsOpen(true);
    setIsMinimized(false);
  }, []);

  const closeChat = useCallback(() => {
    setIsOpen(false);
    setIsMinimized(false);
  }, []);

  const minimizeChat = useCallback(() => {
    setIsMinimized(prev => !prev);
  }, []);

  // Escape key handler to close chat
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeChat();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeChat]);

  // Autofocus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen, isMinimized]);

  // Send message
  const sendMessage = useCallback(async (userText) => {
    if (!userText || !userText.trim()) return;

    const trimmed = userText.trim();
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setIsThinking(true);

    try {
      // Simulate natural thinking delay (350ms - 600ms) for polish
      const delay = Math.floor(Math.random() * 200) + 400;
      await new Promise(r => setTimeout(r, delay));

      const response = await aiService.sendMessage(trimmed, messages, sessionContext);

      if (response.updatedContext) {
        setSessionContext(response.updatedContext);
      }

      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickLinks: response.quickLinks || [],
        suggestions: response.suggestions || []
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error("AI Assistant error:", err);
      const errorMsg = {
        id: `ai-err-${Date.now()}`,
        sender: 'ai',
        text: "Something went wrong while connecting to the AI assistant. You can still explore Ansh's portfolio below.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickLinks: [
          { label: "View Projects", action: "projects" },
          { label: "Contact Ansh", action: "contact" }
        ]
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsThinking(false);
    }
  }, [messages, sessionContext]);

  // Handle Quick Actions
  const handleQuickAction = useCallback((action) => {
    if (!action) return;

    if (action.action === 'projects') {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action.action === 'contact') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action.action === 'experience') {
      const el = document.getElementById('experience');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action.action === 'stack') {
      const el = document.getElementById('stack');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action.action === 'who-is-ansh') {
      sendMessage("Who is Ansh?");
    } else if (action.url) {
      window.open(action.url, '_blank', 'noopener,noreferrer');
    }
  }, [sendMessage]);

  return {
    isOpen,
    isMinimized,
    messages,
    isThinking,
    inputRef,
    toggleChat,
    openChat,
    closeChat,
    minimizeChat,
    sendMessage,
    handleQuickAction
  };
}
