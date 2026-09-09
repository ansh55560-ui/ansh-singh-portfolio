import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Layers, 
  Cpu, 
  Sparkles, 
  Workflow, 
  GitBranch, 
  Terminal, 
  Webhook, 
  FileCode, 
  Layout, 
  Zap,
  Globe2
} from 'lucide-react';

const techStackCards = [
  { name: "PHP", category: "Backend", iconName: "php", iconColor: "#8892be", bg: "rgba(136, 146, 190, 0.1)" },
  { name: "React", category: "Frontend", iconName: "react", iconColor: "#61dafb", bg: "rgba(97, 218, 251, 0.1)" },
  { name: "JavaScript", category: "Frontend", iconName: "js", iconColor: "#f7df1e", bg: "rgba(247, 223, 30, 0.1)" },
  { name: "MySQL", category: "Database", iconName: "mysql", iconColor: "#4479a1", bg: "rgba(68, 121, 161, 0.1)" },
  { name: "Bootstrap", category: "Frontend", iconName: "bootstrap", iconColor: "#7952b3", bg: "rgba(121, 82, 179, 0.1)" },
  { name: "Tailwind CSS", category: "Frontend", iconName: "tailwind", iconColor: "#38bdf8", bg: "rgba(56, 189, 248, 0.1)" },
  { name: "REST API", category: "API", iconName: "api", iconColor: "#06b6d4", bg: "rgba(6, 182, 212, 0.1)" },
  { name: "GitHub", category: "Tools", iconName: "github", iconColor: "#ffffff", bg: "rgba(255, 255, 255, 0.08)" },
  { name: "Postman", category: "Tools", iconName: "postman", iconColor: "#ff6c37", bg: "rgba(255, 108, 55, 0.1)" },
  { name: "GSAP", category: "Animation", iconName: "gsap", iconColor: "#88ce02", bg: "rgba(136, 206, 2, 0.1)" },
  { name: "Framer Motion", category: "Animation", iconName: "motion", iconColor: "#a855f7", bg: "rgba(168, 85, 247, 0.1)" },
  { name: "Lenis", category: "Animation", iconName: "lenis", iconColor: "#60a5fa", bg: "rgba(96, 165, 250, 0.1)" },
  { name: "AJAX", category: "Frontend", iconName: "ajax", iconColor: "#38bdf8", bg: "rgba(56, 189, 248, 0.1)" },
  { name: "JWT", category: "Backend", iconName: "jwt", iconColor: "#ec4899", bg: "rgba(236, 72, 153, 0.1)" },
  { name: "PDO", category: "Database", iconName: "pdo", iconColor: "#10b981", bg: "rgba(16, 185, 129, 0.1)" },
  { name: "XAMPP", category: "Tools", iconName: "xampp", iconColor: "#fb923c", bg: "rgba(251, 146, 60, 0.1)" }
];

const categories = ["All", "Frontend", "Backend", "Database", "Tools", "Animation"];

export const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCards = activeFilter === "All"
    ? techStackCards
    : techStackCards.filter(c => c.category === activeFilter);

  return (
    <section id="stack" className="section-spacing" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        {/* Top Header Row with Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div>
            <div className="section-header-block">
              <span className="section-num">02</span>
              <h2 className="section-name">MY TECH STACK</h2>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
              Tools and technologies I use to turn ideas into reality.
            </p>
          </div>

          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.35rem',
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '0.3rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    padding: '0.4rem 0.95rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    color: isActive ? '#ffffff' : 'var(--text-muted)',
                    background: isActive ? 'var(--grad-accent-btn)' : 'transparent',
                    boxShadow: isActive ? '0 2px 12px rgba(37, 99, 235, 0.4)' : 'none',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: '1rem'
          }}
          id="tech-stack-cards-grid"
        >
          <AnimatePresence>
            {filteredCards.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                className="glass-panel"
                style={{
                  padding: '1.25rem 0.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  cursor: 'default',
                  borderRadius: '14px',
                  background: 'rgba(10, 14, 24, 0.75)'
                }}
              >
                {/* Tech Icon / Hex / Pill */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '10px',
                    backgroundColor: item.bg,
                    border: `1px solid ${item.iconColor}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.iconColor,
                    marginBottom: '0.65rem',
                    boxShadow: `0 4px 15px ${item.iconColor}20`
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '0.875rem' }}>
                    {item.name.substring(0, 3).toUpperCase()}
                  </span>
                </div>

                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.15rem' }}>
                  {item.name}
                </div>

                <div style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                  {item.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #tech-stack-cards-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
};
