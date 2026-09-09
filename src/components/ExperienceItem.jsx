import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Clock, CheckCircle2 } from 'lucide-react';

export const ExperienceItem = ({ experience, index }) => {
  const isEven = index % 2 === 0;
  const descriptionText = experience.summary || experience.description || "";
  const points = experience.responsibilities || experience.keyPoints || [];
  const techList = experience.technologies || [];

  return (
    <div
      style={{
        position: 'relative',
        marginBottom: '2.5rem',
        width: '100%'
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel"
        style={{
          padding: 'clamp(1.5rem, 3vw, 2rem)',
          borderLeft: '4px solid var(--accent-primary)',
          position: 'relative'
        }}
      >
        {/* Top Meta Line: Period + Badge + Duration */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.85rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
            <Calendar size={14} />
            <span>{experience.period}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {experience.duration && (
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-cyan)',
                  background: 'rgba(6, 182, 212, 0.12)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 600
                }}
              >
                {experience.duration}
              </span>
            )}
            <span
              style={{
                fontSize: '0.6875rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(99, 102, 241, 0.12)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                color: 'var(--accent-primary)'
              }}
            >
              {experience.badge || experience.type}
            </span>
          </div>
        </div>

        {/* Role & Company */}
        <h3 style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>
          {experience.role}
        </h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9375rem', fontWeight: 600, marginBottom: '1rem' }}>
          <Briefcase size={15} style={{ color: 'var(--accent-primary)' }} />
          <span>{experience.company}</span>
          {experience.type && (
            <>
              <span style={{ color: 'var(--text-dim)' }}>•</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 400 }}>{experience.type}</span>
            </>
          )}
        </div>

        {/* Summary */}
        {descriptionText && (
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.15rem' }}>
            {descriptionText}
          </p>
        )}

        {/* Responsibilities list */}
        {points.length > 0 && (
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
            {points.map((point, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8125rem', color: '#e2e8f0' }}>
                <span style={{ color: 'var(--accent-primary)', marginTop: '2px' }}>❯</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Badges */}
        {techList.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '0.85rem' }}>
            {techList.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  color: 'var(--text-muted)'
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};
