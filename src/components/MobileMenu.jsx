import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { socials } from '../data/socials';

export const MobileMenu = ({ isOpen, onClose, navItems, activeSection, onSelect }) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleItemClick = (id) => {
    onSelect(id);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 850,
            backgroundColor: 'rgba(9, 10, 15, 0.96)',
            backdropFilter: 'blur(24px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '6.5rem 1.5rem 2.5rem'
          }}
        >
          {/* Navigation Links List */}
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.1
                }
              }
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, x: -25 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  onClick={() => handleItemClick(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '1rem',
                    padding: '0.75rem 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    textAlign: 'left',
                    color: isActive ? 'var(--accent-primary)' : '#ffffff',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    cursor: 'pointer'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.875rem',
                      color: 'var(--text-dim)',
                      fontWeight: 600
                    }}
                  >
                    {item.number}
                  </span>
                  <span>{item.label}</span>
                </motion.button>
              );
            })}
          </motion.nav>

          {/* Bottom Info & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              paddingTop: '1.5rem'
            }}
          >
            <div className="badge-available" style={{ alignSelf: 'flex-start' }}>
              <span className="badge-pulse" />
              <span>Available for new projects</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>

              <button
                onClick={() => handleItemClick('contact')}
                className="btn-accent"
                style={{ flex: 1, height: 44, padding: '0 1rem', fontSize: '0.875rem' }}
              >
                <span>Get In Touch</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
