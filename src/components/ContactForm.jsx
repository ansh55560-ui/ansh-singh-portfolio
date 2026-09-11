import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '' // Honeypot field for spam bots
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [lastSubmittedAt, setLastSubmittedAt] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Length boundary caps
    const maxLengths = { name: 100, email: 254, message: 2000, website: 100 };
    const limit = maxLengths[name] || 500;

    setFormData((prev) => ({
      ...prev,
      [name]: value.slice(0, limit)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check: If bot filled the hidden website field, silently succeed without processing
    if (formData.website) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '', website: '' });
      return;
    }

    // Rate limiting cooldown (5 seconds between submissions)
    const now = Date.now();
    if (now - lastSubmittedAt < 5000) {
      setStatus('error');
      setErrorMessage('Please wait a few seconds before sending another message.');
      return;
    }

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');
    setLastSubmittedAt(now);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {}

      setStatus('success');
      setFormData({ name: '', email: '', message: '', website: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try emailing directly.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Hidden Honeypot Field for anti-bot protection */}
      <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      {/* 2-Column Name & Email */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem' }}>
        <input
          type="text"
          name="name"
          required
          maxLength={100}
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          style={{
            width: '100%',
            padding: '0.9rem 1.1rem',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(10, 14, 24, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#ffffff',
            fontSize: '0.875rem',
            outline: 'none',
            fontFamily: 'inherit',
            transition: 'border-color 0.2s, background 0.2s'
          }}
          className="form-input-field"
        />

        <input
          type="email"
          name="email"
          required
          maxLength={254}
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          style={{
            width: '100%',
            padding: '0.9rem 1.1rem',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(10, 14, 24, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#ffffff',
            fontSize: '0.875rem',
            outline: 'none',
            fontFamily: 'inherit',
            transition: 'border-color 0.2s, background 0.2s'
          }}
          className="form-input-field"
        />
      </div>

      {/* Message Textarea */}
      <textarea
        name="message"
        required
        maxLength={2000}
        rows={4}
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell me about your project..."
        style={{
          width: '100%',
          padding: '0.9rem 1.1rem',
          borderRadius: 'var(--radius-sm)',
          background: 'rgba(10, 14, 24, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#ffffff',
          fontSize: '0.875rem',
          outline: 'none',
          fontFamily: 'inherit',
          resize: 'vertical',
          minHeight: '120px',
          transition: 'border-color 0.2s, background 0.2s'
        }}
        className="form-input-field"
      />

      {/* Error Alert */}
      {status === 'error' && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 0.85rem',
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: 'var(--radius-sm)',
            color: '#f87171',
            fontSize: '0.75rem'
          }}
        >
          <AlertCircle size={14} />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Success Alert */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            padding: '0.75rem 1rem',
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            borderRadius: 'var(--radius-sm)',
            color: '#34d399',
            fontSize: '0.8125rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}>
            <Check size={14} />
            <span>Message Sent Successfully!</span>
          </div>
          <span style={{ fontSize: '0.6875rem', color: 'rgba(255, 255, 255, 0.65)' }}>
            Thank you for reaching out! (Frontend demo state).
          </span>
        </motion.div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary"
        style={{
          width: '100%',
          padding: '0.9rem',
          fontSize: '0.875rem',
          letterSpacing: '0.04em',
          cursor: 'pointer'
        }}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            <span>SENDING...</span>
          </>
        ) : status === 'success' ? (
          <>
            <Check size={16} />
            <span>MESSAGE SENT ✓</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <ArrowRight size={15} />
          </>
        )}
      </button>
    </form>
  );
};
