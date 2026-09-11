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
          <div style={{ width: '100%', height: '140px', background: 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/genalpha-logo.png"
              alt="Gen Alpha Global Pte. Ltd."
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                padding: '10px 18px',
                transition: 'transform 0.4s ease'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                fontSize: '8px',
                fontFamily: 'var(--font-mono)',
                background: 'rgba(10, 14, 24, 0.85)',
                color: '#38bdf8',
                padding: '2px 6px',
                borderRadius: '3px',
                backdropFilter: 'blur(4px)',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                border: '1px solid rgba(56, 189, 248, 0.3)'
              }}
            >
              <span>● FULL STACK SPA</span>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                padding: '4px 10px',
                background: 'linear-gradient(to top, rgba(10, 14, 24, 0.9) 0%, transparent 100%)',
                fontSize: '9px',
                fontFamily: 'var(--font-mono)',
                color: '#cbd5e1',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>genalphaglobal.com</span>
              <span style={{ fontSize: '8px', color: '#38bdf8' }}>Corporate SPA</span>
            </div>
          </div>
        );

      case 'shopatbms':
        return (
          <div style={{ width: '100%', height: '140px', background: 'linear-gradient(135deg, #88131b 0%, #b91c1c 50%, #7f1d1d 100%)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/assets/images/shopatbms.png"
              alt="ShopatBMS Storefront"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                padding: '12px 18px',
                transition: 'transform 0.4s ease'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                fontSize: '8px',
                fontFamily: 'var(--font-mono)',
                background: 'rgba(0, 0, 0, 0.75)',
                color: '#34d399',
                padding: '2px 6px',
                borderRadius: '3px',
                backdropFilter: 'blur(4px)',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}
            >
              <span>● LIVE SITE</span>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                padding: '4px 10px',
                background: 'linear-gradient(to top, rgba(10, 14, 24, 0.85) 0%, transparent 100%)',
                fontSize: '9px',
                fontFamily: 'var(--font-mono)',
                color: '#fecaca',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>shopatbms.com</span>
              <span style={{ fontSize: '8px', color: '#86efac' }}>E-Commerce</span>
            </div>
          </div>
        );

      case 'tathshri':
        return (
          <div style={{ width: '100%', height: '140px', background: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/assets/images/tathshri.png"
              alt="Tathshri Events"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                padding: '12px 18px',
                transition: 'transform 0.4s ease'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                fontSize: '8px',
                fontFamily: 'var(--font-mono)',
                background: 'rgba(10, 14, 24, 0.85)',
                color: '#34d399',
                padding: '2px 6px',
                borderRadius: '3px',
                backdropFilter: 'blur(4px)',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}
            >
              <span>● LIVE SITE</span>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                padding: '4px 10px',
                background: 'linear-gradient(to top, rgba(10, 14, 24, 0.9) 0%, transparent 100%)',
                fontSize: '9px',
                fontFamily: 'var(--font-mono)',
                color: '#cbd5e1',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>tathshri.in</span>
              <span style={{ fontSize: '8px', color: '#c084fc' }}>Event Management</span>
            </div>
          </div>
        );

      case 'metals-mantra':
        return (
          <div style={{ width: '100%', height: '140px', background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/assets/images/metalsmantra.png"
              alt="Metals Mantra"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                padding: '10px 16px',
                transition: 'transform 0.4s ease'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                fontSize: '8px',
                fontFamily: 'var(--font-mono)',
                background: 'rgba(10, 14, 24, 0.85)',
                color: '#34d399',
                padding: '2px 6px',
                borderRadius: '3px',
                backdropFilter: 'blur(4px)',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}
            >
              <span>● LIVE SITE</span>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                padding: '4px 10px',
                background: 'linear-gradient(to top, rgba(10, 14, 24, 0.9) 0%, transparent 100%)',
                fontSize: '9px',
                fontFamily: 'var(--font-mono)',
                color: '#cbd5e1',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>metalsmantra.com</span>
              <span style={{ fontSize: '8px', color: '#86efac' }}>E-Commerce</span>
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
          position: 'relative',
          height: '100%',
          width: '100%'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          {/* Mockup Thumbnail on Top */}
          <div
            onClick={() => setModalOpen(true)}
            style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', height: '140px', flexShrink: 0 }}
          >
            {renderThumbnail()}
          </div>

          {/* Card Body */}
          <div style={{ padding: '1.25rem 1.25rem 0.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
            <div>
              {/* Header: Title + Status Pill Stack */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', minHeight: '40px', marginBottom: '0.35rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                  {project.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.2rem', flexShrink: 0 }}>
                  <span
                    style={{
                      fontSize: '0.625rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      color: isLive ? '#34d399' : '#60a5fa',
                      background: isLive ? 'rgba(16, 185, 129, 0.15)' : 'rgba(59, 130, 246, 0.15)',
                      border: `1px solid ${isLive ? 'rgba(16, 185, 129, 0.35)' : 'rgba(59, 130, 246, 0.35)'}`,
                      padding: '0.15rem 0.45rem',
                      borderRadius: 'var(--radius-sm)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {isLive ? '● LIVE' : '● ONGOING'}
                  </span>

                  {project.secondaryStatus ? (
                    <span
                      style={{
                        fontSize: '0.5625rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        color: '#38bdf8',
                        background: 'rgba(56, 189, 248, 0.1)',
                        border: '1px solid rgba(56, 189, 248, 0.25)',
                        padding: '0.1rem 0.35rem',
                        borderRadius: 'var(--radius-sm)',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {project.secondaryStatus}
                    </span>
                  ) : (
                    <div style={{ height: '17px', visibility: 'hidden' }} aria-hidden="true" />
                  )}
                </div>
              </div>

              {/* Category / Type */}
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-light)', fontWeight: 600, minHeight: '34px', display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                {project.type}
              </div>
            </div>

            {/* Tech Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', minHeight: '52px', alignContent: 'flex-start' }}>
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
              rel="noopener noreferrer"
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
