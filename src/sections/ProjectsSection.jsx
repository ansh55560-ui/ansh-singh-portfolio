import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All' },
    { id: 'featured', label: 'Featured' }
  ];

  const filteredProjects =
    activeFilter === 'featured'
      ? projects.filter((project) => Boolean(project.featured))
      : projects;

  const helperText =
    activeFilter === 'featured'
      ? 'Showing featured projects'
      : 'Showing all projects';

  return (
    <section id="projects" className="section-spacing" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '1.25rem'
          }}
        >
          <div>
            <div className="section-header-block">
              <span className="section-num">04</span>
              <h2 className="section-name">SELECTED WORK</h2>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', maxWidth: '600px' }}>
              Projects that demonstrate how I think, build, and solve problems.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            role="tablist"
            aria-label="Project filter options"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(10, 14, 24, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-full)',
              padding: '4px',
              gap: '4px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
              position: 'relative'
            }}
          >
            {filterOptions.map((opt) => {
              const isActive = activeFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="projects-grid"
                  tabIndex={0}
                  onClick={() => setActiveFilter(opt.id)}
                  style={{
                    position: 'relative',
                    padding: '0.45rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-mono)',
                    color: isActive ? '#ffffff' : 'var(--text-muted)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    outline: 'none',
                    transition: 'color 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#f8fafc';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectFilter"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 'var(--radius-full)',
                        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.35) 0%, rgba(59, 130, 246, 0.25) 100%)',
                        border: '1px solid rgba(59, 130, 246, 0.6)',
                        boxShadow: '0 0 16px rgba(37, 99, 235, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
                        zIndex: 1
                      }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 2 }}>
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Helper Text */}
        <div style={{ marginBottom: '2rem' }}>
          <motion.p
            key={activeFilter}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              fontSize: '0.8125rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--accent-light)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              margin: 0
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: 'var(--accent-secondary)',
                boxShadow: '0 0 8px var(--accent-secondary)',
                display: 'inline-block'
              }}
            />
            <span>{helperText}</span>
          </motion.p>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          id="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem'
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
