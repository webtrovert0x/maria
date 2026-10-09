'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Scissors, ArrowRight, Sparkles, Film, Play, Maximize2, Camera } from 'lucide-react';
import { INSTAGRAM_MEDIA } from '@/data/instagramGalleryData';

export default function Home() {
  // Curate 6 featured standout looks for the Home page teaser
  const featuredLooks = [
    INSTAGRAM_MEDIA.find((m) => m.id === 'photo-4') || INSTAGRAM_MEDIA[0], // Emerald velvet
    INSTAGRAM_MEDIA.find((m) => m.id === 'photo-1') || INSTAGRAM_MEDIA[1], // Bridal gown
    INSTAGRAM_MEDIA.find((m) => m.id === 'photo-5') || INSTAGRAM_MEDIA[2], // Gold brocade
    INSTAGRAM_MEDIA.find((m) => m.id === 'photo-6') || INSTAGRAM_MEDIA[3], // Lilac AsoEbi
    INSTAGRAM_MEDIA.find((m) => m.id === 'reel-1') || INSTAGRAM_MEDIA[4],  // Emerald reel
    INSTAGRAM_MEDIA.find((m) => m.id === 'photo-15') || INSTAGRAM_MEDIA[5], // Tailored suit
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', color: '#ffffff' }}>
      <Navbar />
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Featured Gallery Teaser Section */}
      <section
        style={{
          padding: '6rem 0',
          position: 'relative',
          backgroundColor: '#07070a',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <div className="site-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div>
              <div className="section-badge">
                <Sparkles size={13} />
                FEATURED WORK
              </div>
              <h2
                className="font-serif-title"
                style={{
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
                  lineHeight: 1.15,
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '0.6rem',
                }}
              >
                Recent Tailored Looks
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.5, fontWeight: 300 }}>
                A preview of custom bridal wear, AsoEbi pieces, corset gowns, and reels from <strong>@tailored_by_maria</strong>.
              </p>
            </div>

            <Link
              href="/gallery"
              className="btn-outline-white"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1.6rem', fontSize: '0.82rem' }}
            >
              <span>View All in Gallery</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* 6-Card Teaser Grid in 4:5 Aspect Ratio */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
              gap: '1.4rem',
            }}
          >
            {featuredLooks.map((item) => (
              <Link
                key={item.id}
                href="/gallery"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  position: 'relative',
                  aspectRatio: '4 / 5',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background: '#0d0d12',
                  border: '1px solid var(--border-card)',
                  display: 'block',
                }}
              >
                {item.type === 'video' ? (
                  <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    {item.poster ? (
                      <img
                        src={item.poster}
                        alt={item.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    ) : (
                      <video
                        src={item.src}
                        muted
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    )}
                    <div
                      style={{
                        position: 'absolute',
                        top: '0.9rem',
                        right: '0.9rem',
                        background: 'rgba(0, 0, 0, 0.75)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        padding: '0.35rem 0.65rem',
                        borderRadius: '9999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        color: '#ffffff',
                        zIndex: 2,
                      }}
                    >
                      <Play size={10} fill="#ffffff" />
                      REEL
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                )}

                {/* Category Pill */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.9rem',
                    left: '0.9rem',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '0.3rem 0.7rem',
                    borderRadius: '9999px',
                    fontSize: '0.66rem',
                    color: 'var(--text-secondary)',
                    zIndex: 2,
                  }}
                >
                  {item.category}
                </div>

                {/* Overlay with Title */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.4rem',
                    zIndex: 2,
                  }}
                >
                  <h3
                    className="font-serif-title"
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                    Click to view in Gallery →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link
              href="/gallery"
              className="btn-white"
              style={{ padding: '0.85rem 2.2rem', fontSize: '0.85rem' }}
            >
              <span>Explore All 37 Looks & Video Reels</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. About Teaser Section */}
      <section
        style={{
          padding: '6rem 0',
          backgroundColor: '#050505',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <div className="site-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Visual */}
            <div>
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4 / 5',
                  maxWidth: '460px',
                  margin: '0 auto',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-subtle)',
                  background: '#0d0d12',
                }}
              >
                <img
                  src="/702677140_18090891239209785_1629760954102161083_n..jpg"
                  alt="Maria Lórán Bespoke Tailoring"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
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

            {/* Story Teaser */}
            <div>
              <div className="section-badge">
                <Scissors size={13} />
                ABOUT MARIA LÓRÁN
              </div>

              <h2
                className="font-serif-title"
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                  lineHeight: 1.15,
                  fontWeight: 600,
                  marginBottom: '1.4rem',
                  color: '#ffffff',
                }}
              >
                Lagos Bridal, AsoEbi & Custom Tailoring
              </h2>

              <p
                style={{
                  fontSize: '1.15rem',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  marginBottom: '1.2rem',
                  fontWeight: 300,
                }}
              >
                Every garment should look flattering, feel comfortable, and fit your exact measurements. At Maria Lórán, we take the time to get every cut, seam, and stitch right.
              </p>

              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '2.4rem',
                }}
              >
                Known on Instagram as <strong>@tailored_by_maria</strong>, we specialize in bespoke bridal dresses, stunning AsoEbi outfits for wedding guests, dinner gowns, and tailored two-piece suits.
              </p>

              <Link
                href="/about"
                className="btn-outline-white"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.8rem 1.8rem' }}
              >
                <span>Read Full Story & Process</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Consultation & Fitting Booking CTA */}
      <section
        style={{
          padding: '6rem 0',
          backgroundColor: '#08080b',
          borderTop: '1px solid var(--border-subtle)',
          textAlign: 'center',
        }}
      >
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              padding: '4rem 2.5rem',
              borderRadius: '24px',
              border: '1px solid var(--border-subtle)',
              background: 'linear-gradient(180deg, rgba(20,20,26,0.85) 0%, rgba(10,10,14,0.98) 100%)',
            }}
          >
            <div className="section-badge" style={{ margin: '0 auto 1.2rem auto' }}>
              <Scissors size={13} />
              APPOINTMENTS & FITTINGS
            </div>

            <h2
              className="font-serif-title"
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
                fontWeight: 600,
                marginBottom: '1rem',
                color: '#ffffff',
              }}
            >
              Book an Appointment at Our Office
            </h2>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                maxWidth: '620px',
                margin: '0 auto 3rem auto',
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              Whether you want to sew a brand new custom outfit or schedule a fitting for an existing order with Maria Lórán, reserve your appointment slot online.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.6rem',
                marginBottom: '3rem',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  padding: '2rem',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-card)',
                }}
              >
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600 }}>
                  OPTION 1
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#ffffff', margin: '0.4rem 0 0.6rem 0' }}>
                  Make a New Custom Piece
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  Choose your fabric, outline your desired style, and schedule your initial measurement consultation.
                </p>
                <Link href="/consultation" className="btn-white" style={{ display: 'inline-flex', padding: '0.7rem 1.4rem', fontSize: '0.78rem' }}>
                  <span>Start New Outfit</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div
                style={{
                  padding: '2rem',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-card)',
                }}
              >
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600 }}>
                  OPTION 2
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#ffffff', margin: '0.4rem 0 0.6rem 0' }}>
                  Come in for a Fitting
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  Already have an order being sewn? Pick a convenient date and time to visit our office for your fitting.
                </p>
                <Link href="/consultation" className="btn-white" style={{ display: 'inline-flex', padding: '0.7rem 1.4rem', fontSize: '0.78rem' }}>
                  <span>Book Fitting Slot</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
