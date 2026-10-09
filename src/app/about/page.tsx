'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import AboutBio from '@/components/AboutBio';
import Footer from '@/components/Footer';
import { Scissors, Sparkles, CheckCircle2, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', color: '#ffffff' }}>
      <Navbar />

      {/* Page Header */}
      <section
        style={{
          paddingTop: '8.5rem',
          paddingBottom: '3.5rem',
          position: 'relative',
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: '#08080b',
        }}
      >
        <div className="site-container">
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <div className="section-badge" style={{ marginBottom: '1.2rem' }}>
              <Scissors size={13} />
              ABOUT MARIA LÓRÁN
            </div>

            <h1
              className="font-serif-title"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                lineHeight: 1.1,
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '1.2rem',
              }}
            >
              Tailoring Made to Fit You Flawlessly
            </h1>

            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                fontWeight: 300,
                maxWidth: '720px',
                margin: '0 auto',
              }}
            >
              Welcome to <strong>Maria Lórán</strong>. Based in Lagos, we craft bespoke bridal gowns, ornate AsoEbi event wear, structured corset dresses, and tailored suits cut to your exact personal measurements.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Visual Bio */}
      <AboutBio />

      {/* Tailoring Standards & Process */}
      <section
        style={{
          padding: '6rem 0',
          backgroundColor: '#08080b',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="site-container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
            <div className="section-badge">
              <Sparkles size={13} />
              OUR PROCESS
            </div>
            <h2
              className="font-serif-title"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '0.8rem',
              }}
            >
              From Consultation to Final Fitting
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Every step is designed to ensure your garment fits comfortably, flatters your body shape, and arrives on time.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.8rem',
            }}
          >
            <div
              className="glass-panel"
              style={{
                padding: '2.2rem 1.8rem',
                borderRadius: '16px',
                border: '1px solid var(--border-card)',
                background: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.4rem',
                  color: '#ffffff',
                  fontWeight: 700,
                }}
              >
                01
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.6rem' }}>
                Design & Fabric Choice
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Discuss your event date, style inspirations, corset boning preferences, and fabric selection (silk velvet, African lace, brocade, or organza).
              </p>
            </div>

            <div
              className="glass-panel"
              style={{
                padding: '2.2rem 1.8rem',
                borderRadius: '16px',
                border: '1px solid var(--border-card)',
                background: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.4rem',
                  color: '#ffffff',
                  fontWeight: 700,
                }}
              >
                02
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.6rem' }}>
                Accurate Measurements
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                We record your exact bust, waist, hip, and length measurements to ensure the foundation of the outfit is mathematically precise.
              </p>
            </div>

            <div
              className="glass-panel"
              style={{
                padding: '2.2rem 1.8rem',
                borderRadius: '16px',
                border: '1px solid var(--border-card)',
                background: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.4rem',
                  color: '#ffffff',
                  fontWeight: 700,
                }}
              >
                03
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.6rem' }}>
                Handcrafted Construction
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Careful pattern drafting, internal boning placement, fine seam finishes, and hand-embroidery tailored with high-grade standards.
              </p>
            </div>

            <div
              className="glass-panel"
              style={{
                padding: '2.2rem 1.8rem',
                borderRadius: '16px',
                border: '1px solid var(--border-card)',
                background: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.4rem',
                  color: '#ffffff',
                  fontWeight: 700,
                }}
              >
                04
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.6rem' }}>
                Dedicated Office Fitting
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                You visit the Maria Lórán office for a private fitting session to verify movement, drape, zipper comfort, and final hand-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: '4rem 2.5rem',
              borderRadius: '24px',
              border: '1px solid var(--border-subtle)',
              maxWidth: '840px',
              margin: '0 auto',
              background: 'linear-gradient(180deg, rgba(20,20,25,0.7) 0%, rgba(10,10,12,0.95) 100%)',
            }}
          >
            <h2
              className="font-serif-title"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600,
                marginBottom: '1rem',
                color: '#ffffff',
              }}
            >
              Ready to Make Your Custom Piece?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                margin: '0 auto 2.5rem auto',
                lineHeight: 1.6,
              }}
            >
              Book an appointment to visit our office, discuss your material and style, or come in for a fitting on your current order.
            </p>

            <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/consultation" className="btn-white">
                <span>Book Consultation / Fitting</span>
                <Scissors size={15} />
              </Link>
              <Link href="/gallery" className="btn-outline-white">
                <span>Explore Looks & Reels</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
