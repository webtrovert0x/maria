'use client';

import React from 'react';
import { Scissors, CheckCircle, Clock, Sparkles } from 'lucide-react';

export default function AboutBio() {
  return (
    <section
      id="about"
      style={{
        padding: '7rem 0',
        position: 'relative',
        backgroundColor: '#070709',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="site-container">
        
        {/* Main Grid: Image and Story */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Photo */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '480px',
                height: '580px',
                margin: '0 auto',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-luxury)',
                background: '#000000',
              }}
            >
              <img
                src="/702677140_18090891239209785_1629760954102161083_n..jpg"
                alt="Custom Tailoring by Tailored by Maria"
                className="couture-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: '1.2rem',
                  left: '1.2rem',
                  right: '1.2rem',
                  background: 'rgba(5, 5, 5, 0.88)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  borderRadius: '12px',
                  padding: '0.9rem 1.2rem',
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#ffffff' }}>
                  Custom Tailored Look
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  Made to exact personal measurements in Lagos
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div>
            <div className="section-badge">
              <Scissors size={13} />
              ABOUT TAILORED BY MARIA
            </div>

            <h2
              className="font-serif-title"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                lineHeight: 1.15,
                fontWeight: 400,
                marginBottom: '1.5rem',
                color: '#ffffff',
              }}
            >
              Lagos Bridal, AsoEbi & Custom Tailoring
            </h2>

            <p
              className="font-editorial"
              style={{
                fontSize: '1.2rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: '1.4rem',
                fontWeight: 300,
              }}
            >
              Every garment should look flattering, feel comfortable, and fit your exact measurements. At Tailored by Maria, we take the time to get every cut, seam, and stitch right.
            </p>

            <p
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
              }}
            >
              Known on Instagram as <strong>@tailored_by_maria</strong>, we specialize in bespoke bridal dresses, stunning AsoEbi outfits for wedding guests, dinner gowns, and tailored two-piece suits. Our focus is high-quality stitching, reliable completion times, and careful in-person fittings at our office.
            </p>

            {/* How We Work */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem', marginBottom: '2.5rem' }}>
              <div style={{ borderLeft: '2px solid #ffffff', paddingLeft: '1rem' }}>
                <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#ffffff' }}>Accurate Measurements</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Detailed body measurements for an exact personal fit.</div>
              </div>
              <div style={{ borderLeft: '2px solid #ffffff', paddingLeft: '1rem' }}>
                <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#ffffff' }}>Dedicated Fittings</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>In-person fitting sessions at the office before final hand-off.</div>
              </div>
            </div>

            <a href="#consultation" className="btn-white">
              <span>Book an Appointment</span>
              <Scissors size={15} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
