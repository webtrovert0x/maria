'use client';

import React, { useState, useEffect } from 'react';
import { Play, Sparkles, X, ChevronLeft, ChevronRight, Scissors, Film, Image as ImageIcon, Maximize2 } from 'lucide-react';
import { INSTAGRAM_MEDIA, InstagramMediaItem } from '@/data/instagramGalleryData';

export default function PortfolioGallery() {
  const [mediaList] = useState<InstagramMediaItem[]>(INSTAGRAM_MEDIA);
  const [selectedType, setSelectedType] = useState<'all' | 'image' | 'video'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeMedia, setActiveMedia] = useState<InstagramMediaItem | null>(null);

  const categories = ['All', 'Bridal & Gowns', 'AsoEbi & Occasion', 'Corset Dresses', 'Two-Piece & Suits'];

  const filteredMedia = mediaList.filter((item) => {
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesType && matchesCategory;
  });

  const photoCount = mediaList.filter((m) => m.type === 'image').length;
  const reelCount = mediaList.filter((m) => m.type === 'video').length;

  const handleNext = () => {
    if (!activeMedia) return;
    const currentIndex = filteredMedia.findIndex((m) => m.id === activeMedia.id);
    const nextIndex = (currentIndex + 1) % filteredMedia.length;
    setActiveMedia(filteredMedia[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeMedia) return;
    const currentIndex = filteredMedia.findIndex((m) => m.id === activeMedia.id);
    const prevIndex = (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    setActiveMedia(filteredMedia[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeMedia) return;
      if (e.key === 'Escape') setActiveMedia(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeMedia, filteredMedia]);

  const handleBookStyle = (item: InstagramMediaItem) => {
    setActiveMedia(null);
    const el = document.getElementById('consultation');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="works"
      style={{
        padding: '6rem 0',
        position: 'relative',
        backgroundColor: '#050505',
      }}
    >
      <div className="site-container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
          <div className="section-badge">
            <Sparkles size={13} />
            LOOKBOOK & REELS
          </div>

          <h2
            className="font-serif-title"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              lineHeight: 1.15,
              fontWeight: 600,
              marginBottom: '1rem',
              color: '#ffffff',
            }}
          >
            Gallery
          </h2>
          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            Custom-made bridal gowns, AsoEbi pieces, corset evening dresses, and video fitting reels from <strong>@tailored_by_maria</strong>. Every piece is sewn to exact measurements.
          </p>
        </div>

        {/* Media Type & Category Filter Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', marginBottom: '3rem' }}>
          
          {/* Type Toggle: All / Photos / Reels */}
          <div
            style={{
              display: 'inline-flex',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '4px',
              borderRadius: '9999px',
              border: '1px solid var(--border-subtle)',
              gap: '4px',
            }}
          >
            <button
              onClick={() => setSelectedType('all')}
              style={{
                padding: '0.55rem 1.3rem',
                borderRadius: '9999px',
                border: 'none',
                background: selectedType === 'all' ? '#ffffff' : 'transparent',
                color: selectedType === 'all' ? '#000000' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              All Looks ({mediaList.length})
            </button>
            <button
              onClick={() => setSelectedType('image')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.55rem 1.3rem',
                borderRadius: '9999px',
                border: 'none',
                background: selectedType === 'image' ? '#ffffff' : 'transparent',
                color: selectedType === 'image' ? '#000000' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <ImageIcon size={14} />
              Photos ({photoCount})
            </button>
            <button
              onClick={() => setSelectedType('video')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.55rem 1.3rem',
                borderRadius: '9999px',
                border: 'none',
                background: selectedType === 'video' ? '#ffffff' : 'transparent',
                color: selectedType === 'video' ? '#000000' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <Film size={14} />
              Reels ({reelCount})
            </button>
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: '9999px',
                  background: selectedCategory === cat ? '#ffffff' : 'rgba(255, 255, 255, 0.03)',
                  color: selectedCategory === cat ? '#000000' : 'var(--text-secondary)',
                  border: selectedCategory === cat ? '1px solid #ffffff' : '1px solid var(--border-card)',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Gallery Grid - 4:5 Aspect Ratio Lookbook Style */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '1.4rem',
          }}
        >
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveMedia(item)}
              className="gallery-item-card"
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
              {/* Media Visual */}
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
                  {/* Top Reel Badge */}
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
                    transition: 'transform 0.4s ease',
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

              {/* Bottom Subtle Overlay with Title & Expand Icon */}
              <div
                className="gallery-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 45%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.4rem',
                  opacity: 0.9,
                  transition: 'opacity 0.25s ease',
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
                    <Maximize2 size={15} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View on Instagram Footer Callout */}
        <div style={{ textAlign: 'center', marginTop: '4.5rem' }}>
          <a
            href="https://www.instagram.com/tailored_by_maria"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 2rem' }}
          >
            <span>Visit @tailored_by_maria on Instagram</span>
          </a>
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      {activeMedia && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setActiveMedia(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveMedia(null)}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 1010,
              transition: 'background 0.2s',
            }}
          >
            <X size={22} />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous"
            style={{
              position: 'absolute',
              left: '1.5rem',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 1010,
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next"
            style={{
              position: 'absolute',
              right: '1.5rem',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 1010,
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Lightbox Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '960px',
              maxHeight: '90vh',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Visual Display */}
            <div
              style={{
                maxWidth: '100%',
                maxHeight: '68vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.4rem',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9)',
                background: '#000000',
              }}
            >
              {activeMedia.type === 'video' ? (
                <video
                  src={activeMedia.src}
                  controls
                  autoPlay
                  playsInline
                  style={{
                    maxHeight: '68vh',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    borderRadius: '14px',
                  }}
                />
              ) : (
                <img
                  src={activeMedia.src}
                  alt={activeMedia.title}
                  style={{
                    maxHeight: '68vh',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    borderRadius: '14px',
                  }}
                />
              )}
            </div>

            {/* Details & Action Bar */}
            <div
              style={{
                width: '100%',
                maxWidth: '680px',
                textAlign: 'center',
                background: 'rgba(15, 15, 20, 0.85)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px',
                padding: '1.2rem 1.8rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <span
                  style={{
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--text-secondary)',
                    fontWeight: 600,
                  }}
                >
                  {activeMedia.category}
                </span>
                {activeMedia.type === 'video' && (
                  <span style={{ fontSize: '0.7rem', color: '#ffffff', background: 'rgba(255,255,255,0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                    Video Reel
                  </span>
                )}
              </div>

              <h4
                className="font-serif-title"
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '0.4rem',
                }}
              >
                {activeMedia.title}
              </h4>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.88rem',
                  lineHeight: 1.5,
                  margin: '0 auto 1.2rem auto',
                }}
              >
                {activeMedia.caption}
              </p>

              <button
                onClick={() => handleBookStyle(activeMedia)}
                className="btn-white"
                style={{ padding: '0.75rem 1.6rem', fontSize: '0.82rem' }}
              >
                <span>Book Appointment to Sew this Style</span>
                <Scissors size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
