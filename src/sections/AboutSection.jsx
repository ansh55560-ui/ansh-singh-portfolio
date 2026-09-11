import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  LayoutDashboard, 
  Globe2, 
  Webhook, 
  Calendar, 
  Smartphone, 
  Download, 
  MapPin, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { profile } from '../data/profile';
import aboutSuitImg from '../assets/images/about-suit.jpg';

const whatIBuildCards = [
  { icon: ShoppingBag, title: "E-Commerce", subtitle: "Platforms" },
  { icon: LayoutDashboard, title: "CMS &", subtitle: "Admin Panels" },
  { icon: Globe2, title: "Corporate", subtitle: "Websites" },
  { icon: Webhook, title: "REST APIs", subtitle: "& Integrations" },
  { icon: Calendar, title: "Event", subtitle: "Management" },
  { icon: Smartphone, title: "Responsive", subtitle: "Web Applications" }
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-spacing" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative' }}>
      <div className="container">
        {/* Section Number & Name */}
        <div className="section-header-block">
          <span className="section-num">01</span>
          <h2 className="section-name">ABOUT ME</h2>
        </div>

        {/* Main Editorial Statement */}
        <p
          style={{
            fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
            fontWeight: 700,
            color: '#ffffff',
            maxWidth: '650px',
            lineHeight: 1.4,
            marginBottom: '3rem'
          }}
        >
          I build scalable web applications and digital experiences that solve real business problems.
        </p>

        {/* 3-Column Layout: Left Text -> Center Photo -> Right What I Build */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'center'
          }}
          id="about-3col-layout"
        >
          {/* Left: Detailed Bio & Resume Button */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Full Stack PHP Developer with <strong style={{ color: '#ffffff' }}>1 year of professional experience</strong> at Clock Softwares, following a 3-month internship, specializing in developing web applications and e-commerce platforms.
            </p>

            <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              I enjoy turning ideas into real products through clean code, thoughtful design and modern development practices.
            </p>

            <div>
              <a
                href={profile.resumeUrl}
                download="Ansh_Singh_Resume.pdf"
                className="btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  padding: '0.7rem 1.4rem',
                  marginTop: '0.5rem'
                }}
                title="Download Ansh Singh Resume (PDF)"
              >
                <span>Download Resume</span>
                <Download size={14} style={{ color: 'var(--accent-secondary)' }} />
              </a>
            </div>
          </div>

          {/* Center: Tilted Suit Portrait with Floating Badges */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '280px',
                borderRadius: '16px',
                padding: '6px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(255, 255, 255, 0.05) 100%)',
                boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 0 30px rgba(37, 99, 235, 0.2)',
                transform: 'rotate(2deg)'
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '350px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#0a0d16'
                }}
              >
                <img
                  src={aboutSuitImg}
                  alt="Ansh Singh - Professional Suit Portrait"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%'
                  }}
                />
              </div>

              {/* Floating Top-Left Location Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '-15px',
                  background: 'rgba(9, 12, 22, 0.92)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(59, 130, 246, 0.4)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#ffffff',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.6)'
                }}
              >
                <MapPin size={12} style={{ color: 'var(--accent-secondary)' }} />
                <span>{profile.location}</span>
              </div>

              {/* Floating Bottom-Right Always Learning Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-12px',
                  right: '-15px',
                  background: 'rgba(9, 12, 22, 0.92)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  padding: '0.4rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem',
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#34d399',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.6)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10b981' }} />
                  <span>Always Learning</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#93c5fd' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#3b82f6' }} />
                  <span>Always Building</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: WHAT I BUILD (6 Cards in 3x2 / 2x3 Grid) */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1rem'
              }}
            >
              WHAT I BUILD
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.85rem'
              }}
              id="what-i-build-grid"
            >
              {whatIBuildCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title + card.subtitle}
                    whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                    className="glass-panel"
                    style={{
                      padding: '1.25rem 0.85rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      minHeight: '110px'
                    }}
                  >
                    <Icon size={22} style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }} />
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.3 }}>
                      {card.title}<br />{card.subtitle}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          #about-3col-layout {
            grid-template-columns: 1fr 0.9fr 1.25fr !important;
          }
        }
        @media (max-width: 640px) {
          #what-i-build-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};
