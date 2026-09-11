import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';
import { MobileMenu } from './MobileMenu';
import { profile } from '../data/profile';

const navItems = [
  { id: 'hero', number: '01', label: 'Home' },
  { id: 'about', number: '02', label: 'About' },
  { id: 'stack', number: '03', label: 'Stack' },
  { id: 'projects', number: '04', label: 'Projects' },
  { id: 'experience', number: '05', label: 'Experience' },
  { id: 'contact', number: '06', label: 'Contact' }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(['hero', 'about', 'stack', 'workflow', 'projects', 'experience', 'achievements', 'education', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--header-height)',
          zIndex: 900,
          display: 'flex',
          alignItems: 'center',
          transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
          backgroundColor: isScrolled ? 'rgba(5, 7, 12, 0.88)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.07)' : '1px solid transparent'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo / Name */}
          <button
            onClick={() => scrollToSection('hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              textAlign: 'left',
              cursor: 'pointer'
            }}
            aria-label="Ansh Singh - Home"
          >
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 22px rgba(59, 130, 246, 0.7), 0 0 45px rgba(37, 99, 235, 0.35)',
                border: '2px solid rgba(59, 130, 246, 0.8)',
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
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '0.05em', color: '#ffffff', textTransform: 'uppercase', lineHeight: 1.15 }}>
                ANSH SINGH
              </div>
              <div style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: '#38bdf8', letterSpacing: '0.06em', marginTop: '2px' }}>
                FULL STACK DEVELOPER
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.75rem'
            }}
            className="desktop-nav-container"
          >
            {navItems.map((item) => {
              const isActive = (item.id === 'hero' && (activeSection === 'hero' || !activeSection)) ||
                               (item.id === activeSection) ||
                               (item.id === 'projects' && (activeSection === 'projects' || activeSection === 'workflow')) ||
                               (item.id === 'experience' && (activeSection === 'experience' || activeSection === 'achievements' || activeSection === 'education'));

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    position: 'relative',
                    padding: '0.4rem 0',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    color: isActive ? '#ffffff' : 'var(--text-muted)',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    cursor: 'pointer'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      color: isActive ? 'var(--accent-secondary)' : 'var(--text-dim)'
                    }}
                  >
                    {item.number}
                  </span>
                  <span>{item.label}</span>

                  {isActive && (
                    <motion.div
                      layoutId="navActiveLine"
                      style={{
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--accent-secondary)',
                        boxShadow: '0 0 8px var(--accent-secondary)',
                        borderRadius: '2px'
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action / Availability Badge & Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="badge-available" style={{ display: 'none' }} id="nav-available-badge">
              <span className="badge-pulse" />
              <span>Available for Opportunities</span>
            </div>

            {/* Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 38,
                height: 38,
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                cursor: 'pointer'
              }}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        activeSection={activeSection}
        onSelect={scrollToSection}
      />

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav-container {
            display: flex !important;
          }
          #nav-available-badge {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
};
