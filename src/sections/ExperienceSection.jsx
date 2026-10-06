import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { Briefcase, Calendar, CheckCircle2, Quote } from 'lucide-react';

export const ExperienceSection = () => {
  const mainRole = experiences[0];
  const internRole = experiences[1];

  return (
    <section id="experience" className="section-spacing" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-num">05</span>
          <h2 className="section-name">EXPERIENCE</h2>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', marginBottom: '2.5rem' }}>
          My professional journey.
        </p>

        {/* 3-Column Experience Layout matching Reference Mockup */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.75rem',
            alignItems: 'start'
          }}
          id="experience-3col-layout"
        >
          {/* Left Column: Vertical Timeline */}
          <div
            className="glass-panel"
            style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative'
            }}
          >
            {/* Timeline Line */}
            <div
              style={{
                position: 'absolute',
                top: '2.5rem',
                bottom: '2.5rem',
                left: '2rem',
                width: '2px',
                backgroundColor: 'rgba(59, 130, 246, 0.3)',
                zIndex: 0
              }}
            />

            {/* Role 1: Full Stack Developer */}
            <div style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-secondary)',
                  boxShadow: '0 0 10px var(--accent-secondary)',
                  marginTop: '4px',
                  flexShrink: 0
                }}
              />
              <div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-light)', fontWeight: 600 }}>
                  {mainRole.period}
                </span>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>
                  {mainRole.role}
                </h4>
                <div style={{ fontSize: '0.875rem', color: '#cbd5e1', fontWeight: 600 }}>
                  {mainRole.company}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.25rem' }}>
                  {mainRole.duration} Professional Experience
                </div>
              </div>
            </div>

            {/* Role 2: 3 Months Internship */}
            <div style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 1, marginTop: '0.5rem' }}>
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(59, 130, 246, 0.4)',
                  border: '2px solid var(--accent-secondary)',
                  marginTop: '4px',
                  flexShrink: 0
                }}
              />
              <div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-light)', fontWeight: 600 }}>
                  {internRole.period}
                </span>
                <h4 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#ffffff', marginTop: '0.2rem' }}>
                  {internRole.duration} Internship
                </h4>
                <div style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>
                  {internRole.company}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.25rem' }}>
                  Foundational Web &amp; Database Internship
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column: Key Responsibilities List Card */}
          <div
            className="glass-panel"
            style={{
              padding: '1.75rem',
              borderLeft: '4px solid var(--accent-secondary)'
            }}
          >
            <div style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-light)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '1rem' }}>
              Key Responsibilities
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {mainRole.responsibilities.map((resp, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8125rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--accent-secondary)', marginTop: '2px' }}>•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Quote Card */}
          <div
            className="glass-panel"
            style={{
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(10, 14, 24, 0.9) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.25)'
            }}
          >
            <Quote size={28} style={{ color: 'var(--accent-secondary)', opacity: 0.8, marginBottom: '1rem' }} />
            <p style={{ fontSize: '1rem', color: '#ffffff', fontStyle: 'italic', fontWeight: 600, lineHeight: 1.6, marginBottom: '1.25rem' }}>
              “Good software solves problems. Great software creates opportunities.”
            </p>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: '1.5rem', color: 'var(--accent-light)', textAlign: 'right' }}>
              — Ansh Singh
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          #experience-3col-layout {
            grid-template-columns: 1fr 1.3fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
};
