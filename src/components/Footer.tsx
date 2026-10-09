'use client';

import React from 'react';
import { ArrowUp, MapPin, Mail, Phone, Clock, Scissors } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: '#000000',
        borderTop: '1px solid var(--border-subtle)',
        padding: '5rem 0 3rem 0',
        position: 'relative',
        color: '#ffffff',
      }}
    >
      <div className="site-container">
        
        {/* Top Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1px solid #ffffff',
                }}
              >
                <img src="/logo.jpg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <span
                  className="font-serif-title"
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    color: '#ffffff',
                    display: 'block',
                  }}
                >
                  MARIA LÓRÁN
                </span>
                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
                  Custom Tailoring & Design
                </span>
              </div>
            </div>

            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
              }}
            >
              Custom made dresses, gowns, suits, and quality tailoring made to your exact measurements. Book an appointment to visit our office.
            </p>
          </div>

          {/* Office & Hours */}
          <div>
            <div style={{ fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', fontWeight: 600, marginBottom: '1.2rem' }}>
              Office & Hours
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <Clock size={16} color="#ffffff" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#ffffff', display: 'block' }}>Opening Hours</strong>
                  Monday – Saturday: 10:00 AM – 6:00 PM<br />
                  (By Appointment)
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginTop: '0.4rem' }}>
                <MapPin size={16} color="#ffffff" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#ffffff', display: 'block' }}>Office Visits</strong>
                  In-person consultations and fittings by scheduled appointment.
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', fontWeight: 600, marginBottom: '1.2rem' }}>
              Quick Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.86rem' }}>
              <a href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
                Home
              </a>
              <a href="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
                About
              </a>
              <a href="/gallery" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
                Gallery
              </a>
              <a href="/consultation" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
                Book Consultation / Fitting
              </a>
              <a
                href="https://www.instagram.com/tailored_by_maria"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 500 }}
              >
                Instagram: @tailored_by_maria ↗
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', fontWeight: 600, marginBottom: '1.2rem' }}>
              Get in Touch
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} color="#ffffff" />
                <span style={{ color: '#ffffff' }}>Direct Line & WhatsApp available upon booking</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={15} color="#ffffff" />
                <span style={{ color: '#ffffff' }}>appointments@marialoran.com</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                padding: '0.6rem 1.1rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Maria Lórán Tailoring. All rights reserved.
          </div>
          <div>
            Appointments & Fitting Services
          </div>
        </div>

      </div>
    </footer>
  );
}
