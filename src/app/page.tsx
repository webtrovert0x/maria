'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PortfolioGallery from '@/components/PortfolioGallery';
import AboutBio from '@/components/AboutBio';
import ConsultationBooking from '@/components/ConsultationBooking';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <Navbar />
      <Hero />
      <PortfolioGallery />
      <AboutBio />
      <ConsultationBooking />
      <Footer />
    </main>
  );
}
