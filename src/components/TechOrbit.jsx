import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { orbitTechList } from '../data/skills';
import { Sparkles, Code2, Database, Cpu } from 'lucide-react';

export const TechOrbit = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '520px',
        height: '460px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none'
      }}
    >
      {/* Concentric Orbit Rings */}
      <div
        style={{
          position: 'absolute',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          border: '1px dashed rgba(255, 255, 255, 0.1)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          border: '1px dashed rgba(99, 102, 241, 0.18)',
          pointerEvents: 'none'
        }}
      />

      {/* Central Core: ANSH */}
      <motion.div
        animate={{
          boxShadow: [
            '0 0 20px rgba(99, 102, 241, 0.3)',
            '0 0 40px rgba(139, 92, 246, 0.5)',
            '0 0 20px rgba(99, 102, 241, 0.3)'
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
          border: '2px solid rgba(99, 102, 241, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          cursor: 'default'
        }}
      >
        <Sparkles size={18} style={{ color: '#818cf8', marginBottom: '4px' }} />
        <span style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '0.08em', color: '#ffffff' }}>
          ANSH
        </span>
        <span
          style={{
            fontSize: '0.625rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-primary)',
            fontWeight: 600
          }}
        >
          FULL STACK
        </span>
      </motion.div>

      {/* Orbiting Satellite Nodes */}
      {orbitTechList.map((item, idx) => {
        const rad = (item.angle * Math.PI) / 180;
        const x = Math.cos(rad) * item.distance;
        const y = Math.sin(rad) * item.distance;
        const isHovered = hoveredTech === item.name;

        return (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: x,
              y: y
            }}
            transition={{
              duration: 0.6,
              delay: idx * 0.08,
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ scale: 1.15, zIndex: 20 }}
            onMouseEnter={() => setHoveredTech(item.name)}
            onMouseLeave={() => setHoveredTech(null)}
            style={{
              position: 'absolute',
              padding: '0.55rem 0.95rem',
              borderRadius: 'var(--radius-full)',
              background: isHovered ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.8)',
              border: `1px solid ${isHovered ? item.color : 'rgba(255, 255, 255, 0.12)'}`,
              backdropFilter: 'blur(12px)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              boxShadow: isHovered
                ? `0 10px 25px -5px ${item.color}40, 0 0 15px ${item.color}60`
                : '0 8px 20px rgba(0, 0, 0, 0.4)',
              transition: 'border-color 0.2s, box-shadow 0.2s, background 0.2s'
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: item.color,
                boxShadow: `0 0 6px ${item.color}`
              }}
            />
            <span
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)',
                color: isHovered ? '#ffffff' : 'var(--text-main)'
              }}
            >
              {item.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};
