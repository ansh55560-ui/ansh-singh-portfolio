import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { profile } from '../data/profile';

export const ContactSection = () => {
  return (
    <section id="contact" className="section-spacing" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-num">08</span>
          <h2 className="section-name">LET'S BUILD SOMETHING</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start',
            marginTop: '1.5rem'
          }}
          id="contact-2col-layout"
        >
          {/* Left Column: Direct Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <p style={{ fontSize: '1.125rem', color: '#ffffff', fontWeight: 600, lineHeight: 1.5, maxWidth: '420px' }}>
              Have a project, idea or opportunity?<br />
              <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>Let's turn it into something real.</span>
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.9375rem',
                  transition: 'color 0.2s'
                }}
                className="contact-link-item"
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '8px',
                    background: 'rgba(37, 99, 235, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-secondary)'
                  }}
                >
                  <Mail size={18} />
                </div>
                <span>{profile.email}</span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.9375rem',
                  transition: 'color 0.2s'
                }}
                className="contact-link-item"
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '8px',
                    background: 'rgba(37, 99, 235, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-secondary)'
                  }}
                >
                  <Phone size={18} />
                </div>
                <span>{profile.phone}</span>
              </a>

              {/* Location */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.9375rem'
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '8px',
                    background: 'rgba(37, 99, 235, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-secondary)'
                  }}
                >
                  <MapPin size={18} />
                </div>
                <span>{profile.location}</span>
              </div>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.9375rem',
                  transition: 'color 0.2s'
                }}
                className="contact-link-item"
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '8px',
                    background: 'rgba(37, 99, 235, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-secondary)'
                  }}
                >
                  <Linkedin size={18} />
                </div>
                <span>{profile.linkedin.replace(/^https?:\/\//, '')}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          #contact-2col-layout {
            grid-template-columns: 1fr 1.3fr !important;
          }
        }
        .contact-link-item:hover {
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
};
