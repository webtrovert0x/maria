'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ConsultationBooking from '@/components/ConsultationBooking';
import Footer from '@/components/Footer';
import { Scissors, Clock, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ConsultationPage() {
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
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <div className="section-badge" style={{ marginBottom: '1.2rem' }}>
              <Scissors size={13} />
              OFFICE VISITS & APPOINTMENTS
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
              Book Consultation or Fitting
            </h1>

            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                fontWeight: 300,
                maxWidth: '680px',
                margin: '0 auto',
              }}
            >
              Schedule an in-person visit at the <strong>Maria Lórán</strong> office. Select whether you are starting a new custom outfit or coming in for an existing fitting.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Flow Component */}
      <ConsultationBooking />

      {/* Office & Preparation Info Strip */}
      <section
        style={{
          padding: '4.5rem 0 6rem 0',
          backgroundColor: '#07070a',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <div className="site-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            <div
              className="glass-panel"
              style={{
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid var(--border-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                <Clock size={20} color="#ffffff" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: 0 }}>
                  Office Hours
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Monday to Saturday: 10:00 AM – 6:00 PM.<br />
                All visits are strictly by confirmed appointment to provide each client full dedicated attention.
              </p>
            </div>

            <div
              className="glass-panel"
              style={{
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid var(--border-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                <Scissors size={20} color="#ffffff" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: 0 }}>
                  What to Bring
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                For new pieces: bring your fabric (if you have one) and photo references.<br />
                For fittings: bring the undergarments or heels you plan to wear with your outfit.
              </p>
            </div>

            <div
              className="glass-panel"
              style={{
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid var(--border-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                <MapPin size={20} color="#ffffff" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: 0 }}>
                  Office Location
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Lagos, Nigeria. Full office address, directions, and direct WhatsApp contact will be confirmed in your appointment voucher.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
