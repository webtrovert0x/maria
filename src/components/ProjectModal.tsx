'use client';

import React, { useEffect, useState } from 'react';
import { X, Scissors, Play } from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onBookConsultation: (project: Project) => void;
}

export default function ProjectModal({ project, onClose, onBookConsultation }: ProjectModalProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '980px',
          maxHeight: '90vh',
          background: 'rgba(12, 12, 16, 0.98)',
          border: '1px solid var(--border-highlight)',
          borderRadius: '22px',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 30px 80px rgba(0,0,0,0.95)',
        }}
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in"
      >
        {/* Top Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Project Details"
          style={{
            position: 'sticky',
            top: '1.2rem',
            right: '1.2rem',
            marginLeft: 'auto',
            marginRight: '1.2rem',
            marginTop: '1.2rem',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.12)',
            border: '1px solid var(--border-subtle)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Content */}
        <div style={{ padding: '0 2.2rem 2.5rem 2.2rem' }}>
          
          {/* Header Info */}
          <div style={{ marginBottom: '1.8rem' }}>
            <span className="section-badge">{project.category}</span>
            <h2
              className="font-serif-title"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                marginTop: '0.4rem',
                marginBottom: '0.4rem',
                color: '#ffffff',
              }}
            >
              {project.title}
            </h2>
            <p className="font-editorial" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
              {project.subtitle}
            </p>
          </div>

          {/* Media Player */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '480px',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '2rem',
              border: '1px solid var(--border-subtle)',
              background: '#000000',
            }}
          >
            {showVideo && project.videoSrc ? (
              <video
                src={project.videoSrc}
                controls
                autoPlay
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            ) : (
              <>
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="couture-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    backgroundColor: '#050505',
                  }}
                />

                {project.videoSrc && (
                  <button
                    onClick={() => setShowVideo(true)}
                    style={{
                      position: 'absolute',
                      bottom: '1.2rem',
                      right: '1.2rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.7rem 1.2rem',
                      background: 'rgba(0, 0, 0, 0.85)',
                      border: '1px solid #ffffff',
                      borderRadius: '9999px',
                      color: '#ffffff',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    <Play size={14} fill="#ffffff" />
                    <span>Watch Video Clip</span>
                  </button>
                )}
              </>
            )}
          </div>

          {/* Description & Tailoring Notes */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '2.5rem',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '0.9rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.8rem',
                  color: '#ffffff',
                  fontWeight: 600,
                }}
              >
                About This Piece
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                }}
              >
                {project.description}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '1.2rem',
                }}
              >
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                  Material / Fabric Used
                </div>
                <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 500 }}>
                  {project.materialDetails}
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '1.2rem',
                }}
              >
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                  Style & Fit
                </div>
                <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 500 }}>
                  {project.styleDetails}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Bar */}
          <div
            style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Interested in making a similar piece or fitting your outfit?
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <button onClick={onClose} className="btn-outline-white">
                Back to Gallery
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookConsultation(project);
                }}
                className="btn-white"
              >
                <span>Make a Similar Piece</span>
                <Scissors size={15} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
