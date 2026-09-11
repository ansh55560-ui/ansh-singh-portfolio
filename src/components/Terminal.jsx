import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Copy, Check, Play } from 'lucide-react';
import { profile } from '../data/profile';

const terminalCommands = {
  whoami: {
    cmd: "whoami",
    lines: [
      profile.name,
      profile.role,
      `Location: ${profile.location}`,
      "Clock Softwares (1 Year Professional + 3 Mo Internship)"
    ],
    highlight: "#6366f1"
  },
  stack: {
    cmd: "cat stack.txt",
    lines: [
      "Backend:    PHP (OOP / MVC) • MySQL (PDO / Prepared Queries)",
      "Frontend:   JavaScript (ES6+) • HTML5 • CSS3 • Bootstrap • AJAX",
      "Modern SPA: React 19 • Vite • Tailwind CSS • Axios • GSAP • Framer Motion",
      "Auth & Pay: Razorpay • OTP Verification (SMS/Email) • JWT"
    ],
    highlight: "#8b5cf6"
  },
  projects: {
    cmd: "ls -la ~/projects",
    lines: [
      "● Gen Alpha      [Ongoing] Decoupled React 19 + PHP REST API + Custom CMS",
      "● ShopatBMS      [Live]    Headless E-Commerce (shopatbms.com)",
      "● Metals Mantra  [Live]    Production E-Commerce (metalsmantra.com)",
      "● Tathshri       [Live]    Event Management (tathshri.in)"
    ],
    highlight: "#06b6d4"
  },
  current: {
    cmd: "status",
    lines: [
      `Status: ● ${profile.availabilityStatus}`,
      "Building modern web applications, e-commerce systems & REST APIs.",
      "Exploring: Python, React.js Deep Dive, Node.js"
    ],
    highlight: "#10b981"
  }
};

export const Terminal = () => {
  const [activeTab, setActiveTab] = useState('whoami');
  const [copied, setCopied] = useState(false);
  const [displayedText, setDisplayedText] = useState([]);
  const [isTyping, setIsTyping] = useState(true);

  const currentData = terminalCommands[activeTab] || terminalCommands.whoami;

  useEffect(() => {
    setIsTyping(true);
    setDisplayedText([]);
    let currentIndex = 0;
    const lines = currentData.lines;

    const timer = setInterval(() => {
      if (currentIndex < lines.length) {
        setDisplayedText((prev) => [...prev, lines[currentIndex]]);
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 160);

    return () => clearInterval(timer);
  }, [activeTab]);

  const handleCopy = () => {
    const textToCopy = `$ ${currentData.cmd}\n${currentData.lines.join('\n')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel"
      style={{
        overflow: 'hidden',
        background: 'rgba(12, 14, 22, 0.92)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px -10px rgba(99, 102, 241, 0.15)',
        width: '100%',
        maxWidth: '560px'
      }}
    >
      {/* Titlebar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ef4444' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#f59e0b' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10b981' }} />
          <div
            style={{
              marginLeft: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)'
            }}
          >
            <TerminalIcon size={13} style={{ color: 'var(--accent-primary)' }} />
            <span>ansh@fullstack:~</span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.25rem 0.6rem',
            fontSize: '0.6875rem',
            fontFamily: 'var(--font-mono)',
            color: copied ? '#34d399' : 'var(--text-dim)',
            background: 'rgba(255, 255, 255, 0.04)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          aria-label="Copy terminal text"
        >
          {copied ? (
            <>
              <Check size={12} />
              <span>COPIED</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>COPY</span>
            </>
          )}
        </button>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '0.4rem',
          padding: '0.6rem 1rem',
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
          overflowX: 'auto'
        }}
      >
        {Object.keys(terminalCommands).map((key) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-sm)',
                whiteSpace: 'nowrap',
                fontWeight: 600,
                color: isActive ? '#ffffff' : 'var(--text-dim)',
                background: isActive ? 'rgba(99, 102, 241, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                border: isActive ? '1px solid rgba(99, 102, 241, 0.5)' : '1px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <Play size={9} style={{ opacity: isActive ? 1 : 0.4 }} />
              <span>${key}</span>
            </button>
          );
        })}
      </div>

      {/* Output screen */}
      <div
        style={{
          padding: '1.25rem 1.25rem 1.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8125rem',
          lineHeight: 1.7,
          minHeight: '190px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <span style={{ color: '#34d399', fontWeight: 700 }}>ansh@devbox:~$</span>
          <span style={{ color: '#f8fafc', fontWeight: 600 }}>{currentData.cmd}</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {displayedText.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              style={{
                color: idx === 0 ? currentData.highlight : 'var(--text-muted)',
                fontWeight: idx === 0 ? 600 : 400
              }}
            >
              {line}
            </motion.div>
          ))}

          <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.25rem' }}>
            <span style={{ color: 'var(--accent-primary)', marginRight: '0.25rem' }}>❯</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.9 }}
              style={{
                display: 'inline-block',
                width: '8px',
                height: '15px',
                backgroundColor: 'var(--accent-primary)',
                verticalAlign: 'middle'
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
