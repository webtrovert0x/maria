'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Scissors } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; href: string; external?: boolean }[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Book Consultation / Fitting', href: '/consultation' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          padding: scrolled ? '0.8rem 0' : '1.3rem 0',
          transition: 'all 0.3s ease',
          background: scrolled
            ? 'rgba(5, 5, 5, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        }}
      >
        <div className="site-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo & Brand Name */}
          <a
            href="#"
            style={{
              textDecoration: 'none',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                background: '#000000',
                flexShrink: 0,
              }}
            >
              <img
                src="/logo.jpg"
                alt="Tailored by Maria Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            <div>
              <span
                className="font-serif-title"
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  lineHeight: 1.1,
                  color: '#ffffff',
                }}
              >
                MARIA LÓRÁN
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.4rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  position: 'relative',
                  transition: 'color 0.2s ease',
                  padding: '0.4rem 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="/consultation"
              className="btn-white"
              style={{
                display: 'none',
                padding: '0.65rem 1.4rem',
                fontSize: '0.78rem',
              }}
              id="nav-consult-btn"
            >
              <span>Book Appointment</span>
              <Scissors size={14} />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                cursor: 'pointer',
              }}
              className="mobile-menu-trigger"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 890,
            background: 'rgba(5, 5, 5, 0.98)',
            backdropFilter: 'blur(25px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif-title"
                style={{
                  fontSize: '1.8rem',
                  color: '#ffffff',
                  textDecoration: 'none',
                  letterSpacing: '0.06em',
                  transition: 'color 0.2s ease',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-white"
              style={{ marginTop: '1.5rem' }}
            >
              <span>Book an Appointment</span>
              <Scissors size={16} />
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          #nav-consult-btn {
            display: inline-flex !important;
          }
          .mobile-menu-trigger {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
