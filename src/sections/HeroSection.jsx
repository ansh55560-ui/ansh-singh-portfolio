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
  { value: "1+", label: "Year\nProfessional Exp." },
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
              minHeight: 'clamp(560px, 68vh, 740px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '-1.25rem',
              paddingBottom: '3.5rem'
            }}
          >
            {/* The Main Portrait Container */}
            <div
              id="hero-portrait-container"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '680px',
                height: 'clamp(520px, 60vh, 660px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start'
              }}
            >
              {/* Layer 1: Subtle Atmospheric Blue Glow behind head and hair */}
              <div
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '22%',
                  width: '360px',
                  height: '360px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(37, 99, 235, 0.85) 0%, rgba(59, 130, 246, 0.35) 45%, transparent 75%)',
                  filter: 'blur(35px)',
                  opacity: 0.9,
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '40px',
                  right: '28%',
                  width: '240px',
                  height: '240px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, #38bdf8 0%, rgba(37, 99, 235, 0.75) 50%, transparent 72%)',
                  filter: 'blur(18px)',
                  opacity: 0.85,
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />

              {/* Layer 2: The Portrait Image - Professional Natural Clarity */}
              <div
                id="hero-portrait-card"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '560px',
                  height: '100%',
                  maxHeight: '560px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(59, 130, 246, 0.35)',
                  boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.95), 0 0 35px rgba(37, 99, 235, 0.25), inset 0 1px 1px rgba(255,255,255,0.15)',
                  zIndex: 2
                }}
              >
                <img
                  src={heroBwImg}
                  alt="Ansh Singh - Full Stack Developer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    filter: 'contrast(106%) brightness(102%) saturate(108%)',
                    userSelect: 'none'
                  }}
                />

                {/* Subtle Inner Edge Vignette / Dark Ambient Fade */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(5,7,12,0.1) 0%, transparent 35%, rgba(5,7,12,0.4) 75%, rgba(5,7,12,0.85) 100%), linear-gradient(to right, rgba(5,7,12,0.3) 0%, transparent 25%, transparent 75%, rgba(5,7,12,0.3) 100%)',
                    pointerEvents: 'none'
                  }}
                />
              </div>

              {/* Layer 4: High-Contrast Editorial Tag with Glass Backdrop */}
              <div
                className="hero-tag-editorial hero-decorative"
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  textAlign: 'right',
                  fontSize: '0.625rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.14em',
                  lineHeight: 1.45,
                  zIndex: 4,
                  background: 'rgba(6, 12, 24, 0.88)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(59, 130, 246, 0.38)',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.8), 0 0 15px rgba(37,99,235,0.2)',
                  textTransform: 'uppercase'
                }}
              >
                <div style={{ color: '#94a3b8' }}>TURNING IDEAS INTO</div>
                <strong style={{ color: '#38bdf8', fontWeight: 800, textShadow: '0 0 10px rgba(56,189,248,0.5)' }}>REAL PRODUCTS</strong>
              </div>

              {/* Layer 5: High-Contrast Cursive Script with Glass Badge */}
              <div
                className="hero-tag-cursive hero-decorative"
                style={{
                  position: 'absolute',
                  top: '80px',
                  right: '18px',
                  textAlign: 'right',
                  zIndex: 4,
                  pointerEvents: 'none',
                  background: 'rgba(6, 12, 24, 0.88)',
                  backdropFilter: 'blur(14px)',
                  border: '1px solid rgba(56, 189, 248, 0.38)',
                  padding: '8px 14px',
                  borderRadius: '12px',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.85), 0 0 20px rgba(56, 189, 248, 0.25)'
                }}
              >
                <div
                  className="font-script"
                  style={{
                    fontSize: '1.4rem',
                    color: '#60a5fa',
                    lineHeight: 1.2,
                    textShadow: '0 0 14px rgba(59, 130, 246, 0.8)'
                  }}
                >
                  Build<br />
                  Learn<br />
                  Improve<br />
                  Repeat
                </div>
                <div style={{ width: '45px', height: '2px', background: 'linear-gradient(to right, transparent, #38bdf8)', marginLeft: 'auto', marginTop: '5px' }} />
              </div>

              {/* Layer 6: High-Contrast Tech Flow Marker with Glass Badge */}
              <div
                className="hero-tag-tech hero-decorative"
                style={{
                  position: 'absolute',
                  right: '18px',
                  top: '290px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '0.22rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  zIndex: 6,
                  background: 'rgba(6, 12, 24, 0.88)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(59, 130, 246, 0.38)',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.8), 0 0 15px rgba(37,99,235,0.2)'
                }}
              >
                <span style={{ color: '#94a3b8' }}>CODE</span>
                <span style={{ color: '#cbd5e1' }}>DESIGN</span>
                <span style={{ color: '#60a5fa' }}>DEVELOP</span>
                <span style={{ color: '#38bdf8', textShadow: '0 0 8px rgba(56,189,248,0.75)' }}>DEPLOY</span>
              </div>

              {/* Layer 7: Translucent Dark Glass Developer Terminal */}
              <motion.div
                className="hero-terminal-card"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                style={{
                  position: 'absolute',
                  bottom: '-70px',
                  left: '1%',
                  width: '350px',
                  maxWidth: '88%',
                  background: 'rgba(6, 12, 24, 0.94)',
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
                    <div style={{ color: '#94a3b8' }}>Full Stack Developer</div>
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

              {/* Layer 8: Quote Callout Box on Bottom-Right — Visible on Desktop and Stacked on Mobile */}
              <div
                className="hero-quote-card"
                style={{
                  position: 'absolute',
                  bottom: '-60px',
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

      </div>

      <style>{`
        @media (min-width: 1024px) {
          #hero-grid-layout {
            grid-template-columns: 1.02fr 1.18fr !important;
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
            margin-top: 2rem !important;
            min-height: auto !important;
            padding-bottom: 2.5rem !important;
            width: 100% !important;
          }
          #hero-portrait-container {
            height: auto !important;
            min-height: auto !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
          }
          #hero-portrait-card {
            height: clamp(340px, 52vh, 480px) !important;
            width: 100% !important;
            max-width: 500px !important;
          }
          .hero-decorative {
            display: flex !important;
          }
          .hero-tag-editorial {
            top: 12px !important;
            right: 12px !important;
            padding: 4px 8px !important;
            font-size: 0.52rem !important;
            z-index: 6 !important;
          }
          .hero-tag-cursive {
            top: 14px !important;
            left: 14px !important;
            right: auto !important;
            text-align: left !important;
            padding: 5px 10px !important;
            z-index: 6 !important;
          }
          .hero-tag-cursive .font-script {
            font-size: 1.05rem !important;
            text-align: left !important;
          }
          .hero-tag-cursive > div:last-child {
            margin-left: 0 !important;
            margin-right: auto !important;
          }
          .hero-tag-tech {
            top: 150px !important;
            right: 12px !important;
            padding: 5px 10px !important;
            font-size: 0.52rem !important;
            z-index: 6 !important;
          }
          .hero-terminal-card {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            margin-top: -30px !important;
            width: 95% !important;
            max-width: 420px !important;
            z-index: 10 !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-quote-card {
            display: flex !important;
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            margin-top: 0.85rem !important;
            width: 95% !important;
            max-width: 420px !important;
            z-index: 10 !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
        @media (max-width: 640px) {
          #hero-stats-row {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.85rem !important;
          }
          .hero-tag-editorial {
            top: 10px !important;
            right: 10px !important;
            padding: 3px 6px !important;
            font-size: 0.48rem !important;
            z-index: 6 !important;
          }
          .hero-tag-cursive {
            top: 12px !important;
            left: 12px !important;
            right: auto !important;
            text-align: left !important;
            padding: 4px 8px !important;
            z-index: 6 !important;
          }
          .hero-tag-cursive .font-script {
            font-size: 0.95rem !important;
            text-align: left !important;
          }
          .hero-tag-cursive > div:last-child {
            margin-left: 0 !important;
            margin-right: auto !important;
          }
          .hero-tag-tech {
            top: 140px !important;
            right: 10px !important;
            padding: 4px 8px !important;
            font-size: 0.48rem !important;
            z-index: 6 !important;
          }
        }
      `}</style>
    </section>
  );
};



