import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { AIWorkflowNode } from '../components/AIWorkflowNode';
import { Reveal } from '../components/Reveal';
import { Sparkles, Terminal, Zap, CheckCircle2 } from 'lucide-react';
import { aiWorkflowData } from '../data/ai';

export const AIWorkflowSection = () => {
  return (
    <section id="workflow" className="section-spacing" style={{ position: 'relative' }}>
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          tag="03 — BUILDING WITH AI"
          title={aiWorkflowData.title}
          subtitle={aiWorkflowData.tagline}
        />

        {/* AI Philosophy Banner */}
        <Reveal variant="fadeUp" delay={0.1}>
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(1.25rem, 3vw, 1.75rem)',
              marginBottom: '2.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.25rem',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.04) 100%)',
              border: '1px solid rgba(99, 102, 241, 0.25)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: '10px',
                  background: 'rgba(99, 102, 241, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)'
                }}
              >
                <Zap size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: '#ffffff' }}>
                  AI-Assisted Workflow Philosophy
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  Using AI as a cognitive assistant to accelerate exploration, boilerplate, and edge-case discovery.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {['Idea', 'Prompt', 'Explore', 'Build', 'Test', 'Ship'].map((pill) => (
                <span
                  key={pill}
                  style={{
                    fontSize: '0.6875rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#e2e8f0'
                  }}
                >
                  ✓ {pill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Interactive Step Pipeline Nodes */}
        <Reveal variant="fadeUp" delay={0.2}>
          <AIWorkflowNode />
        </Reveal>
      </div>
    </section>
  );
};
