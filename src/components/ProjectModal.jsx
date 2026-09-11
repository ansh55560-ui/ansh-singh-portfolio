import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Server, Database, Code2, Sparkles, Cpu, Layers } from 'lucide-react';

export const ProjectModal = ({ isOpen, onClose, project, index }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const isRealLiveLink = project.liveUrl && !project.liveUrl.includes('PROJECT_LIVE_URL');
  const isRealGithubLink = project.githubUrl && !project.githubUrl.includes('PROJECT_GITHUB_URL');

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div
          id="project-modal-backdrop"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 99999,
            overflowY: 'auto',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '5.5rem 1.25rem 4rem 1.25rem',
            overscrollBehavior: 'contain',
            backgroundColor: 'rgba(5, 7, 12, 0.92)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >

          {/* Modal Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '740px',
              margin: '0 auto',
              background: '#0d111c',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              boxShadow: '0 30px 80px -15px rgba(0, 0, 0, 0.95), 0 0 50px -10px rgba(99, 102, 241, 0.3)',
              zIndex: 10
            }}
          >
            {/* Top Bar: Badges + High Contrast Close Button */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '1rem',
                marginBottom: '1rem'
              }}
            >
              {/* Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: project.badgeColor || 'var(--accent-primary)',
                    fontWeight: 700,
                    background: 'rgba(99, 102, 241, 0.16)',
                    border: '1px solid rgba(99, 102, 241, 0.35)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  PROJECT {project.number}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  {project.category}
                </span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    color: project.status === 'Live Website' ? '#34d399' : '#60a5fa',
                    padding: '0.2rem 0.55rem',
                    borderRadius: 'var(--radius-sm)',
                    background: project.status === 'Live Website' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(59, 130, 246, 0.15)',
                    border: `1px solid ${project.status === 'Live Website' ? 'rgba(16, 185, 129, 0.35)' : 'rgba(59, 130, 246, 0.35)'}`
                  }}
                >
                  ● {project.primaryStatus || (project.status === 'Live Website' ? 'LIVE' : 'ONGOING')}
                </span>
                {project.secondaryStatus && (
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      color: '#38bdf8',
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.3)'
                    }}
                  >
                    {project.secondaryStatus}
                  </span>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                style={{
                  width: 38,
                  height: 38,
                  minWidth: 38,
                  minHeight: 38,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ef4444';
                  e.currentTarget.style.borderColor = '#ef4444';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                aria-label="Close modal"
                title="Close (Esc)"
              >
                <X size={20} strokeWidth={2.5} />
              </button>
            </div>

            {/* Title & Type */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem', letterSpacing: '-0.02em' }}>
                {project.title}
              </h2>
              <p style={{ color: project.badgeColor || 'var(--accent-primary)', fontSize: '0.95rem', fontWeight: 600 }}>
                {project.type}
              </p>
            </div>

            {/* Project Image Banner if available */}
            {project.imageUrl && (
              <div
                style={{
                  marginBottom: '1.75rem',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background:
                    project.id === 'metals-mantra'
                      ? 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)'
                      : project.id === 'tathshri'
                      ? 'linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)'
                      : project.id === 'shopatbms'
                      ? 'linear-gradient(135deg, #88131b 0%, #b91c1c 100%)'
                      : 'rgba(255, 255, 255, 0.04)',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  maxHeight: '180px'
                }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  style={{
                    maxHeight: '140px',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
            )}

            {/* Architecture Statement */}
            {project.architecture && (
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem 1.25rem',
                  marginBottom: '1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <Layers size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                    System Architecture
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#ffffff', fontWeight: 600, marginTop: '2px' }}>
                    {project.architecture}
                  </div>
                </div>
              </div>
            )}

            {/* Overview */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Server size={16} style={{ color: 'var(--accent-primary)' }} />
                <span>Project Description &amp; Scope</span>
              </h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                {project.description}
              </p>
            </div>

            {/* Key Functional Modules */}
            {project.features && (
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Cpu size={16} style={{ color: 'var(--accent-cyan)' }} />
                  <span>Key Functional Modules (Supported by Resume)</span>
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.8125rem',
                        color: '#e2e8f0',
                        padding: '0.4rem 0.6rem',
                        background: 'rgba(255, 255, 255, 0.02)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      <span style={{ color: 'var(--accent-cyan)' }}>•</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Engineering Highlights */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={16} style={{ color: 'var(--accent-secondary)' }} />
                <span>Engineering Implementation Details</span>
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.875rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={16} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack Tags */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.8125rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.6rem' }}>
                Technology Stack
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.3rem 0.7rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1.25rem'
              }}
            >
              {isRealLiveLink && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.875rem' }}
                >
                  <span>Visit {project.title} Live</span>
                  <ExternalLink size={16} />
                </a>
              )}

              <button
                onClick={onClose}
                className="btn-secondary"
                style={{ fontSize: '0.875rem' }}
              >
                <span>Close Overview</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  if (typeof document === 'undefined') return null;
  return createPortal(modalContent, document.body);
};
