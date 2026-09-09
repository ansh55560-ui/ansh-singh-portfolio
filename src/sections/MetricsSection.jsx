import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, ShoppingBag, CreditCard, ShieldCheck } from 'lucide-react';

const achievementCards = [
  { icon: Globe2, value: "3+", label: "Live Client Websites" },
  { icon: ShoppingBag, value: "1", label: "Headless E-Commerce Platform" },
  { icon: CreditCard, value: "Razorpay", label: "Payment Integration" },
  { icon: ShieldCheck, value: "OTP", label: "Authentication Systems" }
];

export const MetricsSection = () => {
  return (
    <section id="achievements" className="section-spacing" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-num">06</span>
          <h2 className="section-name">ACHIEVEMENTS</h2>
        </div>

        {/* 4 Cards Row matching Reference Mockup */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginTop: '2rem'
          }}
          id="achievements-4col-grid"
        >
          {achievementCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                className="glass-panel"
                style={{
                  padding: '1.75rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'rgba(10, 14, 24, 0.85)'
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '10px',
                    background: 'rgba(37, 99, 235, 0.15)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-secondary)',
                    marginBottom: '1rem'
                  }}
                >
                  <Icon size={22} />
                </div>

                <div
                  style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)',
                    fontWeight: 900,
                    fontFamily: 'var(--font-sans)',
                    color: '#ffffff',
                    lineHeight: 1,
                    marginBottom: '0.4rem'
                  }}
                >
                  {item.value}
                </div>

                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
