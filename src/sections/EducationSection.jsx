import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { educationList } from '../data/education';
import { certifications } from '../data/certifications';

export const EducationSection = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="education" className="section-spacing" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        {/* Section Header & Tab Controls */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.25rem', marginBottom: '2rem' }}>
          <div>
            <div className="section-header-block">
              <span className="section-num">07</span>
              <h2 className="section-name">EDUCATION &amp; CERTIFICATIONS</h2>
            </div>
          </div>

          {/* Subheader Switcher Pills */}
          <div
            style={{
              display: 'flex',
              gap: '0.35rem',
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '0.3rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <button
              onClick={() => setActiveTab('education')}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                color: activeTab === 'education' ? '#ffffff' : 'var(--text-muted)',
                background: activeTab === 'education' ? 'var(--grad-accent-btn)' : 'transparent',
                transition: 'all 0.2s',
                cursor: 'pointer'
              }}
            >
              Education
            </button>

            <button
              onClick={() => setActiveTab('certifications')}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                color: activeTab === 'certifications' ? '#ffffff' : 'var(--text-muted)',
                background: activeTab === 'certifications' ? 'var(--grad-accent-btn)' : 'transparent',
                transition: 'all 0.2s',
                cursor: 'pointer'
              }}
            >
              Certifications
            </button>
          </div>
        </div>

        {/* Content Box matching Reference Layout */}
        <AnimatePresence mode="wait">
          {activeTab === 'education' ? (
            <motion.div
              key="edu-card"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="glass-panel"
              style={{
                padding: '1.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                maxWidth: '720px',
                background: 'rgba(10, 14, 24, 0.85)',
                borderLeft: '4px solid var(--accent-secondary)'
              }}
            >
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: '12px',
                  background: 'rgba(37, 99, 235, 0.15)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-secondary)',
                  flexShrink: 0
                }}
              >
                <GraduationCap size={28} />
              </div>

              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.2rem' }}>
                  K.P.B. Hinduja College of Science &amp; Commerce
                </h4>
                <div style={{ fontSize: '0.875rem', color: 'var(--accent-light)', fontWeight: 600, marginBottom: '0.2rem' }}>
                  Bachelor of Computer Applications (BCA)
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span>Yashwantrao Chavan Maharashtra Open University</span>
                  <span>•</span>
                  <span>2022 — 2025</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="cert-card"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.25rem'
              }}
            >
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="glass-panel"
                  style={{
                    padding: '1.5rem',
                    background: 'rgba(10, 14, 24, 0.85)',
                    borderLeft: '4px solid var(--accent-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <Award size={24} style={{ color: 'var(--accent-secondary)', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>
                      {cert.name}
                    </h4>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {cert.category}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
