import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowUpRight, ArrowRight, Check, Phone, MapPin, Github } from 'lucide-react';
import { profile } from '../data/profile';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section 
      id="contact" 
      className="section-spacing" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden',
        paddingTop: '6rem',
        paddingBottom: '6.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)'
      }}
    >
      {/* Giant Faint Background Watermark Text 'CONTACT' */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '42%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(5rem, 17vw, 15rem)',
          fontWeight: 900,
          letterSpacing: '0.06em',
          color: 'rgba(255, 255, 255, 0.02)',
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 1,
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-sans)'
        }}
      >
        CONTACT
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Centered Main Header Content */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
          {/* Section Number Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              color: '#38bdf8',
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              padding: '4px 14px',
              borderRadius: '9999px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem'
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#38bdf8', boxShadow: '0 0 8px #38bdf8' }} />
            <span>08 // GET IN TOUCH</span>
          </motion.div>

          {/* Large Bold Heading with Theme Electric Blue Gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1.15rem',
              fontFamily: 'var(--font-sans)'
            }}
          >
            Let's build something <br className="hidden sm:inline" />
            <span
              style={{
                background: 'linear-gradient(135deg, #38bdf8 0%, #3b82f6 50%, #60a5fa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 40px rgba(59, 130, 246, 0.45)'
              }}
            >
              together.
            </span>
          </motion.h2>

          {/* Subtitle Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 'clamp(0.95rem, 1.35vw, 1.125rem)',
              color: '#94a3b8',
              lineHeight: 1.65,
              maxWidth: '620px',
              margin: '0 auto 3rem auto'
            }}
          >
            Whether you have a project in mind, an opportunity to discuss, or just want to say hello — my inbox is always open.
          </motion.p>

          {/* Two Interactive Contact Cards (Email & LinkedIn) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
              maxWidth: '680px',
              margin: '0 auto 2.75rem auto'
            }}
          >
            {/* Card 1: Email with Click to Copy */}
            <motion.div
              onClick={handleCopyEmail}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              whileHover={{ y: -4, borderColor: 'rgba(56, 189, 248, 0.5)' }}
              style={{
                background: 'rgba(10, 14, 24, 0.85)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                borderRadius: '16px',
                padding: '1.4rem 1.6rem',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'border-color 0.25s, box-shadow 0.25s',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)'
              }}
              className="contact-card-box"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '10px',
                    background: 'rgba(56, 189, 248, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                    border: '1px solid rgba(56, 189, 248, 0.28)'
                  }}
                >
                  <Mail size={20} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                  {copied ? (
                    <span style={{ color: '#34d399', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Check size={14} /> Copied!
                    </span>
                  ) : (
                    <span style={{ color: '#38bdf8', opacity: 0.9 }}>
                      Click to copy
                    </span>
                  )}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                  Email
                </div>
                <div style={{ fontSize: '0.965rem', fontWeight: 700, color: '#ffffff', wordBreak: 'break-all' }}>
                  {profile.email}
                </div>
              </div>
            </motion.div>

            {/* Card 2: LinkedIn with External Link */}
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.5)' }}
              style={{
                display: 'block',
                background: 'rgba(10, 14, 24, 0.85)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                borderRadius: '16px',
                padding: '1.4rem 1.6rem',
                textAlign: 'left',
                textDecoration: 'none',
                transition: 'border-color 0.25s, box-shadow 0.25s',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)'
              }}
              className="contact-card-box"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '10px',
                    background: 'rgba(59, 130, 246, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#60a5fa',
                    border: '1px solid rgba(59, 130, 246, 0.28)'
                  }}
                >
                  <Linkedin size={20} />
                </div>

                <div style={{ color: '#60a5fa' }}>
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                  LinkedIn
                </div>
                <div style={{ fontSize: '0.965rem', fontWeight: 700, color: '#ffffff' }}>
                  ansh-singh-thakur
                </div>
              </div>
            </motion.a>
          </div>

          {/* Main Action Button 'SAY HELLO ->' with Electric Blue Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <a
              href={`mailto:${profile.email}?subject=Project%20Inquiry%20-%20Let's%20Build%20Something&body=Hi%20Ansh,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding...`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.7rem',
                padding: '1rem 2.8rem',
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #0284c7 100%)',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.9375rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                borderRadius: '9999px',
                textDecoration: 'none',
                boxShadow: '0 10px 32px rgba(37, 99, 235, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              className="say-hello-btn"
            >
              <span>SAY HELLO</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Quick Additional Contact Chips (Location, GitHub) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.25rem',
              marginTop: '3.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)'
            }}
          >
            {/* Location */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.85rem',
                color: '#94a3b8'
              }}
            >
              <MapPin size={14} style={{ color: '#60a5fa' }} />
              <span>{profile.location}</span>
            </div>

            <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>

            {/* GitHub */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.85rem',
                color: '#94a3b8',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              className="sub-contact-link"
            >
              <Github size={14} style={{ color: '#38bdf8' }} />
              <span>github.com/ansh55560-ui</span>
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-card-box:hover {
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.8), 0 0 25px rgba(56, 189, 248, 0.2) !important;
        }
        .say-hello-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(37, 99, 235, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.4) !important;
        }
        .sub-contact-link:hover {
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
};
