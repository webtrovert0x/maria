'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Play, 
  ArrowLeft, 
  ArrowUpRight, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Scissors, 
  Camera, 
  Video, 
  Sparkles,
  Layers
} from 'lucide-react';
import { INSTAGRAM_MEDIA, InstagramMediaItem } from '@/data/instagramGalleryData';

export default function FullGalleryPage() {
  const [selectedType, setSelectedType] = useState<'all' | 'image' | 'video'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeMedia, setActiveMedia] = useState<InstagramMediaItem | null>(null);

  // Filter logic
  const filteredItems = INSTAGRAM_MEDIA.filter((item) => {
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesType && matchesCategory;
  });

  const categories = ['All', 'Corset Dresses', 'Bridal & Gowns', 'AsoEbi & Occasion', 'Two-Piece & Suits'];

  const handleNext = () => {
    if (!activeMedia) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeMedia.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveMedia(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeMedia) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeMedia.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveMedia(filteredItems[prevIndex]);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', color: '#ffffff' }}>
      <Navbar />

      {/* Page Header */}
      <section
        style={{
          paddingTop: '8.5rem',
          paddingBottom: '3rem',
          position: 'relative',
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: '#08080b',
        }}
      >
        <div className="site-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: 'color 0.2s',
              }}
            >
              <ArrowLeft size={15} />
              <span>Back to Home</span>
            </Link>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div className="section-badge" style={{ marginBottom: '0.8rem' }}>
                <Camera size={13} />
                GALLERY & REELS
              </div>
              <h1
                className="font-serif-title"
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                  lineHeight: 1.1,
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '0.6rem',
                }}
              >
                Gallery
              </h1>
              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '700px',
                  fontWeight: 300,
                  lineHeight: 1.5,
                }}
              >
                Explore our complete gallery of custom dresses, AsoEbi looks, tailored suits, and fitting reels. Click any item to view in full resolution or watch video clips.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <a
                href="https://www.instagram.com/tailored_by_maria"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white"
                style={{ fontSize: '0.82rem', padding: '0.75rem 1.4rem' }}
              >
                <span>Follow on Instagram</span>
                <ArrowUpRight size={14} />
              </a>
              <Link
                href="/#consultation"
                className="btn-white"
                style={{ fontSize: '0.82rem', padding: '0.75rem 1.4rem' }}
              >
                <span>Book Appointment</span>
                <Scissors size={14} />
              </Link>
            </div>
          </div>

          {/* Filtering Bar */}
          <div
            style={{
              marginTop: '3rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            {/* Media Type Tabs (All, Photos, Videos) */}
            <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.3rem', borderRadius: '9999px' }}>
              <button
                onClick={() => setSelectedType('all')}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  border: 'none',
                  background: selectedType === 'all' ? '#ffffff' : 'transparent',
                  color: selectedType === 'all' ? '#000000' : 'var(--text-secondary)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                All ({INSTAGRAM_MEDIA.length})
              </button>
              <button
                onClick={() => setSelectedType('image')}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  border: 'none',
                  background: selectedType === 'image' ? '#ffffff' : 'transparent',
                  color: selectedType === 'image' ? '#000000' : 'var(--text-secondary)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  transition: 'all 0.2s',
                }}
              >
                <Camera size={13} />
                <span>Photos ({INSTAGRAM_MEDIA.filter(i => i.type === 'image').length})</span>
              </button>
              <button
                onClick={() => setSelectedType('video')}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  border: 'none',
                  background: selectedType === 'video' ? '#ffffff' : 'transparent',
                  color: selectedType === 'video' ? '#000000' : 'var(--text-secondary)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  transition: 'all 0.2s',
                }}
              >
                <Video size={13} />
                <span>Reels ({INSTAGRAM_MEDIA.filter(i => i.type === 'video').length})</span>
              </button>
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    background: selectedCategory === cat ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
                    color: selectedCategory === cat ? '#000000' : 'var(--text-secondary)',
                    border: selectedCategory === cat ? '1px solid #ffffff' : '1px solid var(--border-subtle)',
                    fontSize: '0.76rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Media Grid Section */}
      <section style={{ padding: '4rem 0 7rem 0' }}>
        <div className="site-container">
          
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
              gap: '1.4rem',
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveMedia(item)}
                style={{
                  position: 'relative',
                  aspectRatio: '4 / 5',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: '#0d0d12',
                  border: '1px solid var(--border-card)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {/* Media Container */}
                {item.type === 'video' ? (
                  <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    {item.poster ? (
                      <img
                        src={item.poster}
                        alt={item.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    ) : (
                      <video
                        src={item.src}
                        muted
                        playsInline
                        preload="metadata"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
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
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                )}

                {/* Category Pill Top Left */}
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

                {/* Subtle Overlay with Title & Expand Icon */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 45%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.4rem',
                    opacity: 0.9,
                    zIndex: 2,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '0.8rem' }}>
                    <div>
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
                      <p
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--text-secondary)',
                          margin: '0.3rem 0 0 0',
                          lineHeight: 1.4,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {item.caption}
                      </p>
                    </div>

                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        background: '#ffffff',
                        color: '#000000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                      }}
                    >
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Fullscreen Lightbox / Media Viewer Modal */}
      {activeMedia && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            background: 'rgba(0, 0, 0, 0.94)',
            backdropFilter: 'blur(20px)',
          }}
          onClick={() => setActiveMedia(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '920px',
              width: '100%',
              background: '#0d0d12',
              borderRadius: '20px',
              border: '1px solid var(--border-highlight)',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0,0,0,0.95)',
            }}
            onClick={(e) => e.stopPropagation()}
            className="animate-fade-in"
          >
            {/* Top Close Button */}
            <button
              onClick={() => setActiveMedia(null)}
              aria-label="Close"
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                zIndex: 20,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.85)',
                border: '1px solid #ffffff',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            {/* Prev / Next Arrows */}
            <button
              onClick={handlePrev}
              aria-label="Previous"
              style={{
                position: 'absolute',
                top: '40%',
                left: '1rem',
                zIndex: 20,
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.8)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next"
              style={{
                position: 'absolute',
                top: '40%',
                right: '1rem',
                zIndex: 20,
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.8)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <ChevronRight size={20} />
            </button>

            {/* Media Player Box */}
            <div
              style={{
                width: '100%',
                maxHeight: '62vh',
                height: '520px',
                background: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              {activeMedia.type === 'video' ? (
                <video
                  src={activeMedia.src}
                  controls
                  autoPlay
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    maxHeight: '62vh',
                  }}
                />
              ) : (
                <img
                  src={activeMedia.src}
                  alt={activeMedia.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    maxHeight: '62vh',
                  }}
                />
              )}
            </div>

            {/* Bottom Caption & Action Bar */}
            <div style={{ padding: '1.5rem 2rem', background: '#0a0a0d', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    {activeMedia.category} • Tailored by Maria
                  </span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#ffffff', margin: '0.2rem 0' }}>
                    {activeMedia.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '580px', lineHeight: 1.5 }}>
                    {activeMedia.caption}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                  <Link
                    href="/#consultation"
                    onClick={() => setActiveMedia(null)}
                    className="btn-white"
                    style={{ fontSize: '0.8rem', padding: '0.7rem 1.3rem' }}
                  >
                    <span>Sew This Style</span>
                    <Scissors size={14} />
                  </Link>

                  <a
                    href="https://www.instagram.com/tailored_by_maria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-white"
                    style={{ fontSize: '0.8rem', padding: '0.7rem 1.2rem' }}
                  >
                    <span>View on Instagram</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
