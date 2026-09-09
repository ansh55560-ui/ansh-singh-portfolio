import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Layers, 
  Cpu, 
  Sparkles, 
  Workflow, 
  Brain, 
  GitBranch, 
  Package, 
  Terminal, 
  Webhook, 
  FileCode, 
  Layout, 
  Zap 
} from 'lucide-react';

const iconMap = {
  PhpIcon: Code2,
  Code2,
  Database,
  Layers,
  Cpu,
  Sparkles,
  Workflow,
  Brain,
  GitBranch,
  Package,
  Terminal,
  Webhook,
  FileCode,
  Layout,
  Zap
};

export const SkillCard = ({ skill, index }) => {
  const IconComponent = iconMap[skill.icon] || Code2;

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
      style={{
        padding: '1.5rem',
        borderRadius: 'var(--radius-md)',
        background: 'rgba(255, 255, 255, 0.025)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.25s, box-shadow 0.25s'
      }}
      className="skill-card"
    >
      {/* Subtle glow hover gradient in CSS */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: '10px',
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-primary)'
            }}
          >
            <IconComponent size={20} />
          </div>

          <span
            style={{
              fontSize: '0.6875rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              padding: '0.2rem 0.6rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.09)',
              color: 'var(--text-muted)'
            }}
          >
            {skill.badge}
          </span>
        </div>

        <h4
          style={{
            fontSize: '1.125rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
            color: '#ffffff',
            letterSpacing: '-0.01em'
          }}
        >
          {skill.name}
        </h4>

        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
            lineHeight: 1.55
          }}
        >
          {skill.description}
        </p>
      </div>

      <div
        style={{
          marginTop: '1.25rem',
          paddingTop: '0.85rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-primary)',
            fontWeight: 600
          }}
        >
          Level: {skill.level}
        </span>
        <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--accent-primary)' }} />
      </div>

      <style>{`
        .skill-card:hover {
          border-color: rgba(99, 102, 241, 0.45) !important;
          box-shadow: 0 15px 35px -10px rgba(99, 102, 241, 0.25) !important;
          background: rgba(255, 255, 255, 0.04) !important;
        }
      `}</style>
    </motion.div>
  );
};
