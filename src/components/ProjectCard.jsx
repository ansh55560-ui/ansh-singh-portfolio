import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Layers, Eye } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const ProjectCard = ({ project, index }) => {
  const [modalOpen, setModalOpen] = useState(false);

  // Render authentic dark UI mockup thumbnail for each project
  const renderThumbnail = () => {
    switch (project.id) {
      case 'gen-alpha':
        return (
          <div style={{ width: '100%', height: '140px', background: 'linear-gradient(135deg, #09122a 0%, #17113a 100%)', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', color: 'var(--accent-light)' }}>Gen Alpha SPA</span>
              <span style={{ fontSize: '8px', background: 'rgba(59,130,246,0.3)', color: '#93c5fd', padding: '1px 5px', borderRadius: '3px' }}>JWT API</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px', borderRadius: '4px', textAlign: 'center' }}>
                <span style={{ fontSize: '8px', color: 'var(--text-dim)' }}>CRUD</span>
                <p style={{ fontSize: '10px', fontWeight: 700, color: '#fff' }}>PHP API</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px', borderRadius: '4px', textAlign: 'center' }}>
                <span style={{ fontSize: '8px', color: 'var(--text-dim)' }}>UI</span>
                <p style={{ fontSize: '10px', fontWeight: 700, color: '#fff' }}>React 19</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px', borderRadius: '4px', textAlign: 'center' }}>
                <span style={{ fontSize: '8px', color: 'var(--text-dim)' }}>CMS</span>
                <p style={{ fontSize: '10px', fontWeight: 700, color: '#fff' }}>Media</p>
              </div>
            </div>
          </div>
        );

      case 'shopatbms':
        return (
          <div style={{ width: '100%', height: '140px', background: 'linear-gradient(135deg, #170d2b 0%, #0d1222 100%)', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', color: '#c084fc' }}>ShopatBMS Admin</span>
              <span style={{ fontSize: '8px', background: 'rgba(168,85,247,0.25)', color: '#d8b4fe', padding: '1px 5px', borderRadius: '3px' }}>STOREFRONT</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '6px 8px', borderRadius: '4px', fontSize: '9px', color: '#e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                <span>Dynamic Themes</span>
                <span style={{ color: '#34d399' }}>✓ Active</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-dim)' }}>
                <span>Cart + Wishlist + Coupons</span>
              </div>
            </div>
          </div>
        );

      case 'tathshri':
        return (
          <div style={{ width: '100%', height: '140px', background: 'linear-gradient(135deg, #071e2c 0%, #0c1826 100%)', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', color: '#38bdf8' }}>Tathshri Events</span>
              <span style={{ fontSize: '8px', background: 'rgba(6,182,212,0.2)', color: '#7dd3fc', padding: '1px 5px', borderRadius: '3px' }}>CMS PANEL</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '6px', borderRadius: '4px', textAlign: 'center' }}>
                <span style={{ fontSize: '8px', color: 'var(--text-dim)' }}>Gallery</span>
                <p style={{ fontSize: '10px', fontWeight: 700, color: '#fff' }}>Media Hub</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '6px', borderRadius: '4px', textAlign: 'center' }}>
                <span style={{ fontSize: '8px', color: 'var(--text-dim)' }}>Leads</span>
                <p style={{ fontSize: '10px', fontWeight: 700, color: '#38bdf8' }}>Inquiry Module</p>
              </div>
            </div>
          </div>
        );

      case 'metals-mantra':
        return (
          <div style={{ width: '100%', height: '140px', background: 'linear-gradient(135deg, #05281e 0%, #091724 100%)', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', color: '#34d399' }}>metalsmantra.com</span>
              <span style={{ fontSize: '8px', background: 'rgba(16,185,129,0.25)', color: '#34d399', padding: '1px 5px', borderRadius: '3px' }}>● LIVE SITE</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '6px 8px', borderRadius: '4px', fontSize: '9px', color: '#e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                <span>Metal Artifacts Store</span>
                <span style={{ color: '#34d399' }}>PHP / MySQL</span>
              </div>
              <div style={{ color: 'var(--text-dim)' }}>Cart • Inventory • Orders</div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const isLive = project.status === 'Live Website';

  return (
    <>
      <motion.div
        whileHover={{ y: -6, borderColor: 'rgba(59, 130, 246, 0.5)' }}
        className="glass-panel"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: '16px',
          overflow: 'hidden',
          background: 'rgba(10, 14, 24, 0.85)',
          position: 'relative'
        }}
      >
        <div>
          {/* Mockup Thumbnail on Top */}
          <div
            onClick={() => setModalOpen(true)}
            style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}
          >
            {renderThumbnail()}
          </div>

          {/* Card Body */}
          <div style={{ padding: '1.25rem 1.25rem 0.5rem' }}>
            {/* Header: Title + Status Pill */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em' }}>
                {project.title}
              </h3>

              <span
                style={{
                  fontSize: '0.625rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  color: isLive ? '#34d399' : project.status === 'Company Project' ? '#c084fc' : '#60a5fa',
                  background: isLive ? 'rgba(16, 185, 129, 0.15)' : 'rgba(59, 130, 246, 0.15)',
                  border: `1px solid ${isLive ? 'rgba(16, 185, 129, 0.35)' : 'rgba(59, 130, 246, 0.35)'}`,
                  padding: '0.15rem 0.45rem',
                  borderRadius: 'var(--radius-sm)',
                  whiteSpace: 'nowrap'
                }}
              >
                {isLive ? '● Live' : project.status === 'Ongoing Project' ? 'Ongoing' : 'Company Project'}
              </span>
            </div>

            {/* Category / Type */}
            <div style={{ fontSize: '0.75rem', color: 'var(--accent-light)', fontWeight: 600, marginBottom: '0.75rem' }}>
              {project.type}
            </div>

            {/* Tech Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
              {project.technologies.slice(0, 3).map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: '0.625rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '0.15rem 0.45rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: 'var(--text-muted)'
                  }}
                >
                  {t}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span
                  style={{
                    fontSize: '0.625rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '0.15rem 0.45rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    color: 'var(--text-dim)'
                  }}
                >
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card Footer CTA */}
        <div
          style={{
            padding: '0.85rem 1.25rem 1.15rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {isLive ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                color: '#34d399',
                cursor: 'pointer'
              }}
            >
              <span>View Live Site</span>
              <ExternalLink size={13} />
            </a>
          ) : (
            <button
              onClick={() => setModalOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                color: 'var(--accent-secondary)',
                cursor: 'pointer'
              }}
            >
              <span>View Details</span>
              <ArrowUpRight size={13} />
            </button>
          )}

          <button
            onClick={() => setModalOpen(true)}
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.04)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-muted)',
              cursor: 'pointer'
            }}
            aria-label={`View ${project.title} modal`}
          >
            <ArrowUpRight size={14} />
          </button>
        </div>
      </motion.div>

      {/* Modal */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        project={project}
        index={index}
      />
    </>
  );
};
