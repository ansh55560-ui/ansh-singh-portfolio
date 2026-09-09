import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const MetricCard = ({ metric, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || metric.isInfinity) return;

    let start = 0;
    const end = metric.value;
    const duration = 1800; // ms
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // ease-out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easeProgress * end);

      setCount(current);

      if (frame === totalFrames) {
        setCount(end);
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isInView, metric.value, metric.isInfinity]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="glass-panel"
      style={{
        padding: 'clamp(1.5rem, 3vw, 2rem)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        border: metric.highlight ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      {/* Background soft glow if highlighted */}
      {metric.highlight && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />
      )}

      <div>
        <div
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 800,
            fontFamily: 'var(--font-mono)',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            marginBottom: '0.75rem',
            background: metric.highlight ? 'var(--grad-primary)' : 'var(--grad-text)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'flex',
            alignItems: 'baseline'
          }}
        >
          <span>{metric.isInfinity ? '∞' : (count < 10 && metric.value >= 10 ? `0${count}` : count)}</span>
          <span style={{ fontSize: '2rem', color: 'var(--accent-primary)', marginLeft: '2px' }}>{metric.suffix}</span>
        </div>

        <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>
          {metric.label}
        </h4>

        <div style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
          {metric.sublabel}
        </div>
      </div>

      <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
        {metric.description}
      </p>
    </motion.div>
  );
};
