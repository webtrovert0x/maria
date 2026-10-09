'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Scissors, Sparkles, Camera } from 'lucide-react';

export default function Hero() {
  const scrollToConsultation = () => {
    const el = document.getElementById('consultation');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWorks = () => {
    const el = document.getElementById('works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
        backgroundColor: '#050505',
      }}
    >
      {/* Background Natural Image Layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to bottom, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0.88) 75%, #050505 100%),
            linear-gradient(to right, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.45) 50%, rgba(5,5,5,0.92) 100%),
            url('/702677140_18090891239209785_1629760954102161083_n..jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          filter: 'brightness(0.72)',
          zIndex: 0,
        }}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{ maxWidth: '1020px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Logo Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.4rem' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid rgba(255, 255, 255, 0.45)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7)',
                background: '#000000',
              }}
            >
              <img
                src="/logo.jpg"
                alt="Tailored by Maria Logo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Simple Clean Header Tag */}
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span className="section-badge">
              <Scissors size={13} />
              LAGOS BRIDAL & ASOEBI TAILOR
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1
            className="font-serif-title"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5.2rem)',
              lineHeight: 1.08,
              fontWeight: 400,
              letterSpacing: '0.02em',
              marginBottom: '1.6rem',
              color: '#ffffff',
            }}
          >
            Custom Tailoring Made to Fit You{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 300, borderBottom: '1px solid rgba(255,255,255,0.4)' }}>
              Flawlessly.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-editorial"
            style={{
              fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
              lineHeight: 1.55,
              color: 'var(--text-secondary)',
              maxWidth: '820px',
              margin: '0 auto 2.8rem auto',
              fontWeight: 300,
            }}
          >
            Welcome to Tailored by Maria. Specializing in bespoke bridal wear, AsoEbi dresses, dinner gowns, and tailored sets. Whether you want to make a brand new custom outfit or schedule a fitting for an existing order, book an appointment to visit our office.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.2rem',
              flexWrap: 'wrap',
              marginBottom: '4.5rem',
            }}
          >
            <button onClick={scrollToConsultation} className="btn-white">
              <span>Book Consultation / Fitting</span>
              <Scissors size={16} />
            </button>

            <Link href="/gallery" className="btn-outline-white" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
              <Camera size={16} />
              <span>View All IG Photos & Reels</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Feature Highlights Strip */}
          <div
            className="glass-panel"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              padding: '1.8rem 2.2rem',
              borderRadius: '18px',
              border: '1px solid var(--border-subtle)',
              textAlign: 'center',
              background: 'rgba(10, 10, 14, 0.85)',
            }}
          >
            <div>
              <div
                className="font-cinzel"
                style={{ fontSize: '1.55rem', fontWeight: 600, color: '#ffffff' }}
              >
                Bridal & AsoEbi
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.04em',
                  color: 'var(--text-secondary)',
                  marginTop: '0.3rem',
                }}
              >
                Wedding & special event tailoring
              </div>
            </div>

            <div style={{ borderLeft: '1px solid var(--border-glass)' }}>
              <div
                className="font-cinzel"
                style={{ fontSize: '1.55rem', fontWeight: 600, color: '#ffffff' }}
              >
                New Pieces
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.04em',
                  color: 'var(--text-secondary)',
                  marginTop: '0.3rem',
                }}
              >
                Tell us your material & style
              </div>
            </div>

            <div style={{ borderLeft: '1px solid var(--border-glass)' }}>
              <div
                className="font-cinzel"
                style={{ fontSize: '1.55rem', fontWeight: 600, color: '#ffffff' }}
              >
                Fittings
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.04em',
                  color: 'var(--text-secondary)',
                  marginTop: '0.3rem',
                }}
              >
                Quick appointment at the office
              </div>
            </div>

            <div style={{ borderLeft: '1px solid var(--border-glass)' }}>
              <div
                className="font-cinzel"
                style={{ fontSize: '1.55rem', fontWeight: 600, color: '#ffffff' }}
              >
                By Appointment
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.04em',
                  color: 'var(--text-secondary)',
                  marginTop: '0.3rem',
                }}
              >
                Choose your date & time slot
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
