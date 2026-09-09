import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import heroBwImg from '../assets/images/hero-bw.jpg';

const techBadges = [
  { 
    name: "PHP", 
    icon: (
      <svg width="26" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="8" rx="11" ry="6.5" stroke="#777bb4" strokeWidth="1.6"/>
        <text x="5" y="10.5" fill="#777bb4" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">PHP</text>
      </svg>
    ),
    border: "rgba(119, 123, 180, 0.28)" 
  },
  { 
    name: "React", 
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d8ff" strokeWidth="1.6">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/>
        <circle cx="12" cy="12" r="2.2" fill="#00d8ff"/>
      </svg>
    ),
    border: "rgba(0, 216, 255, 0.28)" 
  },
  { 
    name: "MySQL", 
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.6">
        <path d="M4 7c0-2 4-3.5 8-3.5s8 1.5 8 3.5v10c0 2-4 3.5-8 3.5s-8-1.5-8-3.5V7z"/>
        <path d="M4 12c0 2 4 3.5 8 3.5s8-1.5 8-3.5"/>
      </svg>
    ),
    border: "rgba(56, 189, 248, 0.3)" 
  },
  { 
    name: "JavaScript", 
    icon: (
      <div style={{ width: 20, height: 20, borderRadius: 3, backgroundColor: '#f7df1e', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', padding: '1px 2px', fontWeight: 900, fontSize: '9px', color: '#000000', fontFamily: 'sans-serif' }}>
        JS
      </div>
    ),
    border: "rgba(247, 223, 30, 0.3)" 
  },
  { 
    name: "Bootstrap", 
    icon: (
      <div style={{ width: 20, height: 20, borderRadius: 4, backgroundColor: '#7952b3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '12px', color: '#ffffff', fontFamily: 'sans-serif' }}>
        B
      </div>
    ),
    border: "rgba(121, 82, 179, 0.3)" 
  },
  { 
    name: "More", 
    icon: (
      <div style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '15px', color: '#94a3b8' }}>
        +
      </div>
    ),
    border: "rgba(255, 255, 255, 0.14)" 
  }
];

const heroStats = [
  { value: "3+", label: "Live Client\nWebsites" },
  { value: "7", label: "Months\nProfessional Exp." },
  { value: "3", label: "Months\nInternship" },
  { value: "∞", label: "Ideas\nTo Build" }
];

export const HeroSection = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'calc(var(--header-height) + clamp(1rem, 2.5vh, 2rem))',
        paddingBottom: 'clamp(1.5rem, 3vh, 2.5rem)',
        overflow: 'hidden',
        backgroundColor: '#05070c'
      }}
    >
      {/* Subtle Atmospheric Blue Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '8%',
          right: '12%',
          width: '680px',
          height: '680px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.28) 0%, rgba(29, 78, 216, 0.10) 45%, transparent 70%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '-8%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(30, 64, 175, 0.12) 0%, transparent 65%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            alignItems: 'center'
          }}
          id="hero-grid-layout"
        >
          {/* Left Column: Heading, Bio with Left Accent Line, CTAs, Badges & Stats */}
          <div
            id="hero-left-col"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              zIndex: 3
            }}
          >
            {/* Top Micro-Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: '#38bdf8',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.85rem'
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#38bdf8', boxShadow: '0 0 10px #38bdf8' }} />
              <span>FULL STACK DEVELOPER ✕ AI-ASSISTED DEVELOPMENT</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: '1.15rem' }}
            >
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5.2vw, 4.6rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.02
                }}
              >
                <span style={{ color: '#ffffff' }}>ANSH </span>
                <span
                  style={{
                    background: 'linear-gradient(135deg, #38bdf8 0%, #3b82f6 50%, #60a5fa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 35px rgba(59, 130, 246, 0.4)'
                  }}
                >
                  SINGH
                </span>
                <span style={{ display: 'block', color: '#ffffff', marginTop: '0.15rem' }}>
                  FULL STACK
                </span>
                <span style={{ display: 'block', color: '#ffffff' }}>
                  DEVELOPER
                </span>
              </h1>
            </motion.div>

            {/* Supporting Bio Statement with Left Blue Border */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                borderLeft: '2px solid #2563eb',
                paddingLeft: '0.95rem',
                marginBottom: '1.45rem',
                maxWidth: '490px'
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(0.875rem, 1.25vw, 0.965rem)',
                  color: '#94a3b8',
                  lineHeight: 1.6,
                  margin: 0
                }}
              >
                Building modern web applications, e-commerce platforms and interactive digital experiences with PHP, React, MySQL and AI-powered workflows.
              </p>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.9rem',
                marginBottom: '1.5rem'
              }}
            >
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary"
                data-cursor-text="WORK"
                style={{
                  padding: '0.78rem 1.6rem',
                  fontSize: '0.84rem',
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  boxShadow: '0 4px 20px rgba(37, 99, 235, 0.45), inset 0 1px 1px rgba(255,255,255,0.25)',
                  borderRadius: '10px'
                }}
              >
                <span>View My Work</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="btn-secondary"
                style={{
                  padding: '0.78rem 1.6rem',
                  fontSize: '0.84rem',
                  background: 'rgba(15, 23, 42, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px'
                }}
              >
                <span>Let's Connect</span>
                <Send size={14} style={{ color: '#38bdf8' }} />
              </button>
            </motion.div>

            {/* Technology Badges: Card treatment with top icon and bottom label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                flexWrap: 'wrap',
                marginBottom: '1.5rem'
              }}
            >
              {techBadges.map((badge) => (
                <div
                  key={badge.name}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.3rem',
                    width: '56px',
                    height: '56px',
                    borderRadius: '8px',
                    background: 'rgba(10, 16, 30, 0.65)',
                    border: `1px solid ${badge.border}`,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                    backdropFilter: 'blur(8px)',
                    cursor: 'default'
                  }}
                >
                  <div style={{ height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {badge.icon}
                  </div>
                  <span style={{
                    fontSize: '0.625rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    color: '#94a3b8'
                  }}>
                    {badge.name}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Hero Quick Stats Row with vertical divider columns */}
            <motion.div
              id="hero-stats-row"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '0.85rem',
                width: '100%',
                maxWidth: '540px',
                paddingTop: '1.15rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              {heroStats.map((stat, idx) => (
                <div
                  key={stat.label}
                  style={{
                    borderRight: idx < heroStats.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                    paddingRight: '0.5rem'
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(1.5rem, 2.3vw, 2rem)',
                      fontWeight: 900,
                      fontFamily: 'var(--font-sans)',
                      color: '#ffffff',
                      lineHeight: 1,
                      marginBottom: '0.3rem'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: '#94a3b8', lineHeight: 1.35, whiteSpace: 'pre-line' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Complete Cinematic Composition with Bright Face, Atmospheric Rim Glow & Glass Terminal */}
          <div
            id="hero-portrait-wrapper"
            style={{
              position: 'relative',
              width: '100%',
              minHeight: 'clamp(480px, 55vh, 620px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* The Main Portrait Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '640px',
                height: 'clamp(460px, 52vh, 580px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start'
              }}
            >
              {/* Layer 1: Subtle Atmospheric Blue Glow behind head and hair */}
              <div
                style={{
                  position: 'absolute',
                  top: '35px',
                  right: '25%',
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(37, 99, 235, 0.85) 0%, rgba(59, 130, 246, 0.35) 45%, transparent 75%)',
                  filter: 'blur(32px)',
                  opacity: 0.9,
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '65px',
                  right: '30%',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, #38bdf8 0%, rgba(37, 99, 235, 0.75) 50%, transparent 72%)',
                  filter: 'blur(16px)',
                  opacity: 0.8,
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />

              {/* Layer 2: The Portrait Image - 15% Brighter facial illumination, crisp black-and-white, smooth vignette mask */}
              <img
                src={heroBwImg}
                alt="Ansh Singh - Full Stack Developer"
                style={{
                  width: '100%',
                  maxWidth: '580px',
                  height: '100%',
                  maxHeight: '560px',
                  objectFit: 'contain',
                  objectPosition: 'center 15%',
                  transform: 'scale(1.08)',
                  filter: 'grayscale(100%) contrast(124%) brightness(140%)',
                  maskImage: 'radial-gradient(ellipse 70% 65% at 52% 48%, black 40%, rgba(0,0,0,0.8) 55%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 70% 65% at 52% 48%, black 40%, rgba(0,0,0,0.8) 55%, transparent 75%)',
                  position: 'relative',
                  zIndex: 2,
                  userSelect: 'none'
                }}
              />

              {/* Layer 3: Subtle Neon Blue Handwritten Signature 'Ansh Singh' on top-left */}
              <div
                className="font-script hero-decorative"
                style={{
                  position: 'absolute',
                  top: '40px',
                  left: '3%',
                  fontSize: '2.75rem',
                  color: '#60a5fa',
                  transform: 'rotate(-7deg)',
                  opacity: 0.88,
                  pointerEvents: 'none',
                  zIndex: 4,
                  textShadow: '0 0 14px rgba(59, 130, 246, 0.7), 0 0 25px rgba(37, 99, 235, 0.4)'
                }}
              >
                Ansh Singh
              </div>

              {/* Layer 4: Subtle Top-Right Stacked Editorial Annotation */}
              <div
                className="hero-decorative"
                style={{
                  position: 'absolute',
                  top: '25px',
                  right: '3%',
                  textAlign: 'right',
                  fontSize: '0.625rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#64748b',
                  letterSpacing: '0.16em',
                  lineHeight: 1.45,
                  zIndex: 4,
                  opacity: 0.75,
                  textTransform: 'uppercase'
                }}
              >
                TURNING<br />
                IDEAS<br />
                INTO<br />
                <strong style={{ color: '#93c5fd', fontWeight: 700 }}>REAL PRODUCTS</strong>
              </div>

              {/* Layer 5: Subtle Right Side Cursive Script: Build Learn Improve Repeat with underline */}
              <div
                className="hero-decorative"
                style={{
                  position: 'absolute',
                  top: '30%',
                  right: '2%',
                  textAlign: 'right',
                  zIndex: 4,
                  opacity: 0.82,
                  pointerEvents: 'none'
                }}
              >
                <div
                  className="font-script"
                  style={{
                    fontSize: '1.5rem',
                    color: '#93c5fd',
                    transform: 'rotate(5deg)',
                    lineHeight: 1.15,
                    textShadow: '0 2px 16px rgba(0,0,0,0.9), 0 0 16px rgba(37, 99, 235, 0.35)'
                  }}
                >
                  Build<br />
                  Learn<br />
                  Improve<br />
                  Repeat
                </div>
                <div style={{ width: '55px', height: '1.5px', background: 'linear-gradient(to right, transparent, #38bdf8)', marginLeft: 'auto', marginTop: '4px', transform: 'rotate(5deg)' }} />
              </div>

              {/* Layer 6: Right Side Slanted Tech Flow Marker with Bracket Lines */}
              <div
                style={{
                  position: 'absolute',
                  right: '1%',
                  top: '60%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '0.2rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.5625rem',
                  letterSpacing: '0.18em',
                  color: '#64748b',
                  zIndex: 4,
                  opacity: 0.65,
                  borderRight: '1px solid rgba(59, 130, 246, 0.3)',
                  paddingRight: '0.5rem'
                }}
                className="hero-vertical-tag hero-decorative"
              >
                <span style={{ color: '#94a3b8' }}>CODE</span>
                <span>DESIGN</span>
                <span>DEVELOP</span>
                <span style={{ color: '#38bdf8' }}>DEPLOY</span>
              </div>

              {/* Layer 7: Translucent Dark Glass Developer Terminal — Enhanced text contrast and border visibility */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '2%',
                  width: '350px',
                  maxWidth: '88%',
                  background: 'rgba(6, 12, 24, 0.90)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(59, 130, 246, 0.45)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -10px rgba(0, 0, 0, 0.95), 0 0 30px rgba(37, 99, 235, 0.22), inset 0 1px 1px rgba(255,255,255,0.1)',
                  zIndex: 5
                }}
              >
                {/* Title bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0.85rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#ef4444' }} />
                    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10b981' }} />
                  </div>
                  <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
                    developer@ansh
                  </span>
                </div>

                {/* Terminal Body with Crisp High Contrast Text */}
                <div
                  style={{
                    padding: '0.85rem 1rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.73rem',
                    lineHeight: 1.6
                  }}
                >
                  <div>
                    <span style={{ color: '#38bdf8', fontWeight: 700 }}>$ whoami</span>
                    <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.78rem' }}>Ansh Singh</div>
                    <div style={{ color: '#94a3b8' }}>Full Stack PHP Developer</div>
                  </div>

                  <div style={{ marginTop: '0.4rem' }}>
                    <span style={{ color: '#38bdf8', fontWeight: 700 }}>$ stack</span>
                    <div style={{ color: '#e2e8f0' }}>PHP | React | MySQL | JavaScript | REST API</div>
                  </div>

                  <div style={{ marginTop: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span style={{ color: '#38bdf8', fontWeight: 700 }}>$ current</span>
                    <span style={{ color: '#34d399', fontWeight: 500 }}>Building something awesome...</span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 0.9 }}
                      style={{ width: 6, height: 11, backgroundColor: '#38bdf8', display: 'inline-block' }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Layer 8: Quote Callout Box on Bottom-Right */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '15px',
                  right: '0%',
                  padding: '0.75rem 1.15rem',
                  borderRadius: '10px',
                  background: 'rgba(6, 12, 24, 0.88)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(59, 130, 246, 0.28)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.8), 0 0 20px rgba(37,99,235,0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  maxWidth: '260px',
                  zIndex: 5
                }}
              >
                <span style={{ fontSize: '0.72rem', color: '#cbd5e1', fontStyle: 'italic', lineHeight: 1.4 }}>
                  “ Consistent effort builds exceptional results. ”
                </span>
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-script)', color: '#60a5fa', textAlign: 'right' }}>
                  — Ansh Singh
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left Scroll Indicator */}
        <div style={{ marginTop: 'clamp(1rem, 2vh, 1.75rem)', display: 'flex', alignItems: 'center', gap: '1rem', paddingBottom: '0.5rem' }}>
          <button
            onClick={() => scrollTo('about')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: '#64748b',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0
            }}
            aria-label="Scroll to explore"
          >
            <div
              style={{
                width: 17,
                height: 26,
                borderRadius: '11px',
                border: '1.5px solid rgba(255, 255, 255, 0.25)',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '3px'
              }}
            >
              <motion.div
                animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={{ width: 3.5, height: 4.5, borderRadius: '2px', backgroundColor: '#38bdf8' }}
              />
            </div>
            <span>SCROLL TO EXPLORE</span>
          </button>
          <div style={{ width: '80px', height: '1px', background: 'linear-gradient(to right, rgba(56, 189, 248, 0.5), transparent)' }} />
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          #hero-grid-layout {
            grid-template-columns: 1.02fr 1.18fr !important;
          }
          .hero-vertical-tag {
            display: flex !important;
          }
        }
        @media (max-width: 1023px) {
          #hero-grid-layout {
            display: flex !important;
            flex-direction: column !important;
          }
          #hero-left-col {
            order: 1 !important;
            width: 100% !important;
          }
          #hero-portrait-wrapper {
            order: 2 !important;
            margin-top: 1.5rem !important;
            min-height: 480px !important;
          }
          .hero-decorative {
            opacity: 0.6 !important;
          }
        }
        @media (max-width: 640px) {
          #hero-stats-row {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.85rem !important;
          }
          .hero-decorative {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};



