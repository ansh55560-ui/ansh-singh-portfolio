import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, FileText, Search, Code2, ShieldCheck, Rocket, ArrowRight } from 'lucide-react';
import { aiWorkflowData } from '../data/ai';

const workflowNodes = [
  { id: "01", name: "Idea", icon: Lightbulb, color: "#60a5fa" },
  { id: "02", name: "Prompt", icon: FileText, color: "#38bdf8" },
  { id: "03", name: "Explore", icon: Search, color: "#3b82f6" },
  { id: "04", name: "Build", icon: Code2, color: "#2563eb" },
  { id: "05", name: "Test", icon: ShieldCheck, color: "#10b981" },
  { id: "06", name: "Ship", icon: Rocket, color: "#93c5fd" }
];

export const AIWorkflowNode = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentStepData = aiWorkflowData.workflow[activeStep] || aiWorkflowData.workflow[0];

  return (
    <div style={{ width: '100%' }}>
      {/* Horizontal Connected Node Pipeline matching Reference Mockup */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          padding: '2rem 1rem',
          background: 'rgba(10, 14, 24, 0.65)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: '1.75rem',
          overflowX: 'auto'
        }}
        id="ai-workflow-pipeline"
      >
        {/* Background connector line */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '5%',
            right: '5%',
            height: '2px',
            backgroundColor: 'rgba(59, 130, 246, 0.25)',
            zIndex: 0,
            transform: 'translateY(-12px)'
          }}
        />

        {workflowNodes.map((node, index) => {
          const Icon = node.icon;
          const isActive = activeStep === index;
          return (
            <React.Fragment key={node.id}>
              <button
                onClick={() => setActiveStep(index)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.65rem',
                  position: 'relative',
                  zIndex: 2,
                  cursor: 'pointer',
                  minWidth: '70px'
                }}
              >
                {/* Node Circle */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: isActive ? '#1d4ed8' : 'rgba(15, 20, 35, 0.95)',
                    border: `2px solid ${isActive ? '#60a5fa' : 'rgba(59, 130, 246, 0.35)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isActive ? '#ffffff' : node.color,
                    boxShadow: isActive ? '0 0 20px rgba(37, 99, 235, 0.8)' : '0 4px 12px rgba(0,0,0,0.5)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <Icon size={20} />
                </motion.div>

                {/* Node Label */}
                <span
                  style={{
                    fontSize: '0.8125rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    color: isActive ? '#ffffff' : 'var(--text-muted)'
                  }}
                >
                  {node.name}
                </span>
              </button>

              {/* Connecting Arrow between nodes */}
              {index < workflowNodes.length - 1 && (
                <div style={{ color: 'rgba(59, 130, 246, 0.4)', zIndex: 1, marginBottom: '22px' }}>
                  <ArrowRight size={16} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Active Stage Details */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel"
        style={{
          padding: '1.5rem 1.75rem',
          borderLeft: '4px solid var(--accent-secondary)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--accent-secondary)',
              background: 'rgba(37, 99, 235, 0.15)',
              padding: '0.2rem 0.6rem',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            STAGE {currentStepData.step} — {currentStepData.title}
          </span>
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-dim)' }}>
            {currentStepData.role}
          </span>
        </div>

        <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#ffffff', marginTop: '0.25rem' }}>
          {currentStepData.shortDesc}
        </h4>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          {currentStepData.details}
        </p>
      </motion.div>
    </div>
  );
};
