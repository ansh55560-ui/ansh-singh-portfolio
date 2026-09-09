import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';

export const SectionHeading = ({
  tag,
  title,
  subtitle,
  align = 'left',
  className = ''
}) => {
  const isCentered = align === 'center';

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{
        marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
        textAlign: isCentered ? 'center' : 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCentered ? 'center' : 'flex-start'
      }}
      className={className}
    >
      {tag && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: 'var(--accent-primary)',
              textTransform: 'uppercase',
              background: 'rgba(99, 102, 241, 0.12)',
              padding: '0.3rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(99, 102, 241, 0.25)'
            }}
          >
            {tag}
          </span>
          <span
            style={{
              height: '1px',
              width: '32px',
              backgroundColor: 'rgba(99, 102, 241, 0.3)'
            }}
          />
        </div>
      )}

      {title && (
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '0.85rem',
            background: 'var(--grad-text)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
            color: 'var(--text-muted)',
            maxWidth: '620px',
            lineHeight: 1.6
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
