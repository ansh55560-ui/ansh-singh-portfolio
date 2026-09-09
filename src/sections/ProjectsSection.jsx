import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-spacing" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        {/* Section Header with "View All Projects" link */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', marginBottom: '2.5rem' }}>
          <div>
            <div className="section-header-block">
              <span className="section-num">04</span>
              <h2 className="section-name">SELECTED WORK</h2>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
              Projects that demonstrate how I think, build and solve problems.
            </p>
          </div>

          <a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8125rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--accent-secondary)',
              fontWeight: 600
            }}
          >
            <span>View All Projects</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* 4-Card Horizontal Project Grid matching Reference Image */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.25rem'
          }}
          id="projects-4col-grid"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1200px) {
          #projects-4col-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};
