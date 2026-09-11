import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Briefcase, Code2, Mail, FileText } from 'lucide-react';

const ACTIONS = [
  { id: 'about', label: 'About Ansh', prompt: 'Who is Ansh?', icon: User },
  { id: 'stack', label: 'Tech Stack', prompt: "What is Ansh's tech stack?", icon: Cpu },
  { id: 'projects', label: 'Projects', prompt: 'Tell me about his projects', icon: Briefcase },
  { id: 'experience', label: 'Experience', prompt: 'What is his experience?', icon: Code2 },
  { id: 'contact', label: 'Contact', prompt: 'How can I contact him?', icon: Mail },
  { id: 'resume', label: 'Resume', prompt: 'Can I see his resume?', icon: FileText }
];

export const QuickActions = ({ onSelectAction }) => {
  return (
    <div
      style={{
        padding: '0.5rem 0.85rem 0.65rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        background: 'rgba(10, 14, 24, 0.6)',
        display: 'flex',
        gap: '0.4rem',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      {ACTIONS.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <motion.button
            key={item.id}
            onClick={() => onSelectAction(item.prompt)}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.2 }}
            whileHover={{ y: -2, background: 'rgba(59, 130, 246, 0.18)', borderColor: 'rgba(59, 130, 246, 0.45)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.65rem',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: 'var(--text-muted)',
              fontSize: '0.6875rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'all 0.2s ease'
            }}
          >
            <IconComponent size={11} style={{ color: 'var(--accent-light)' }} />
            <span>{item.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
};
