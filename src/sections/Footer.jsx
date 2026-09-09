import React from 'react';
import { ArrowUp, Linkedin, Github, Mail } from 'lucide-react';
import { profile } from '../data/profile';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#040508',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '3.5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        {/* Main Footer Row matching Reference */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}
          id="footer-main-row"
        >
          {/* Brand Left */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 900,
                fontSize: '0.875rem'
              }}
            >
              AS
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.9375rem', color: '#ffffff', letterSpacing: '0.04em' }}>
                ANSH SINGH
              </div>
              <div style={{ fontSize: '0.6875rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                Full Stack Developer • AI-Assisted Development
              </div>
            </div>
          </div>

          {/* Nav Center */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            {[
              { label: 'Home', id: 'hero' },
              { label: 'About', id: 'about' },
              { label: 'Projects', id: 'projects' },
              { label: 'Experience', id: 'experience' },
              { label: 'Contact', id: 'contact' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s',
                  cursor: 'pointer'
                }}
                className="footer-nav-link"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Socials & Back to top Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-muted)' }}
                className="footer-nav-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>

              <a
                href={`mailto:${profile.email}`}
                style={{ color: 'var(--text-muted)' }}
                className="footer-nav-link"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'color 0.2s'
              }}
              className="footer-nav-link"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={13} style={{ color: 'var(--accent-secondary)' }} />
            </button>
          </div>
        </div>

        {/* Bottom copyright & tagline */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '1.5rem',
            fontSize: '0.75rem',
            color: 'var(--text-dim)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Ansh Singh. All rights reserved.
          </div>

          <div className="font-script" style={{ color: '#93c5fd', fontSize: '1.0625rem' }}>
            Build • Learn • Improve • Repeat
          </div>
        </div>
      </div>
    </footer>
  );
};
