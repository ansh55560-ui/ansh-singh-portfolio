import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { profile } from '../data/profile';

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#040508',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '1.75rem',
        paddingBottom: '1.5rem',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        {/* Main Footer Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}
          id="footer-main-row"
        >
          {/* Brand Left */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.95rem' }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(59, 130, 246, 0.5), 0 0 25px rgba(37, 99, 235, 0.25)',
                border: '2px solid rgba(59, 130, 246, 0.75)',
                backgroundColor: '#05070c',
                flexShrink: 0
              }}
            >
              <img
                src="/assets/images/logo.png"
                alt="Ansh Singh Logo"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.08)' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.92rem', color: '#ffffff', letterSpacing: '0.04em', lineHeight: 1.2 }}>
                ANSH SINGH
              </div>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', lineHeight: 1.35 }}>
                Full Stack Developer
              </div>
              <div style={{ color: '#38bdf8', fontSize: '0.66rem', fontFamily: 'var(--font-mono)', lineHeight: 1.35, letterSpacing: '0.02em' }}>
                AI-Assisted Development
              </div>
            </div>
          </div>

          {/* Center: Made with love by Ansh Singh Baghel */}
          <div
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-sans)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              letterSpacing: '0.02em'
            }}
          >
            <span>
              Made with <span style={{ color: '#ef4444', margin: '0 4px', display: 'inline-block', fontSize: '0.95rem', textShadow: '0 0 8px rgba(239, 68, 68, 0.6)' }}>♥</span> by <strong style={{ color: '#ffffff', fontWeight: 600 }}>Ansh Singh Baghel</strong>
            </span>
          </div>

          {/* Socials Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 34,
                height: 34,
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'all 0.2s'
              }}
              className="footer-social-btn"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>

            <a
              href={`mailto:${profile.email}`}
              style={{
                width: 34,
                height: 34,
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'all 0.2s'
              }}
              className="footer-social-btn"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 34,
                height: 34,
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'all 0.2s'
              }}
              className="footer-social-btn"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
          </div>
        </div>

        {/* Bottom copyright & tagline - Compact */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.85rem',
            paddingTop: '1rem',
            fontSize: '0.72rem',
            color: 'var(--text-dim)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Ansh Singh. All rights reserved.
          </div>

          <div
            className="font-script"
            style={{
              color: '#60a5fa',
              fontSize: '1.45rem',
              letterSpacing: '0.03em',
              textShadow: '0 0 14px rgba(59, 130, 246, 0.4)'
            }}
          >
            Build • Learn • Improve • Repeat
          </div>
        </div>
      </div>

      <style>{`
        .footer-social-btn:hover {
          color: #38bdf8 !important;
          border-color: rgba(56, 189, 248, 0.4) !important;
          background: rgba(56, 189, 248, 0.1) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 640px) {
          footer {
            padding-bottom: 2.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
};
