'use client';

import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Scissors, 
  CheckCircle2, 
  MapPin, 
  ChevronRight, 
  ArrowLeft, 
  Sparkles,
  Phone,
  Mail,
  User
} from 'lucide-react';

type VisitPurpose = 'new_piece' | 'fitting' | null;

interface BookingData {
  purpose: VisitPurpose;
  // New piece details
  material: string;
  customMaterial: string;
  style: string;
  customStyle: string;
  descriptionNotes: string;
  // Fitting details
  garmentDetails: string;
  orderNumber: string;
  // Date & Time
  date: string;
  timeSlot: string;
  // Contact
  fullName: string;
  phone: string;
  email: string;
}

const COMMON_MATERIALS = [
  'Silk / Satin',
  'Velvet',
  'Lace',
  'Brocade',
  'Organza / Chiffon',
  'Wool / Suit Fabric',
  'Cotton / Linen',
  'Patterned Fabric',
  'I will bring my own fabric',
  'Need help choosing material'
];

const COMMON_STYLES = [
  'Evening Gown / Long Dress',
  'Short / Midi Dress',
  'Two-Piece Set (Top & Skirt / Pants)',
  'Tailored Suit / Jacket & Trousers',
  'Corset / Corseted Dress',
  'Special Event / Party Outfit',
  'Wedding / Reception Dress',
  'Other / Custom Design'
];

const TIME_SLOTS = [
  '10:00 AM — 11:00 AM',
  '11:00 AM — 12:00 PM',
  '12:00 PM — 1:00 PM',
  '2:00 PM — 3:00 PM',
  '3:00 PM — 4:00 PM',
  '4:00 PM — 5:00 PM',
  '5:00 PM — 6:00 PM'
];

export default function ConsultationBooking() {
  const [step, setStep] = useState<number>(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    purpose: null,
    material: '',
    customMaterial: '',
    style: '',
    customStyle: '',
    descriptionNotes: '',
    garmentDetails: '',
    orderNumber: '',
    date: '2026-10-24',
    timeSlot: '2:00 PM — 3:00 PM',
    fullName: '',
    phone: '',
    email: '',
  });

  const [isBooked, setIsBooked] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  const handleSelectPurpose = (purpose: VisitPurpose) => {
    setBookingData((prev) => ({ ...prev, purpose }));
    setStep(2);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `ML-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingCode(code);
    setIsBooked(true);
  };

  const availableDates = [
    { label: 'Mon, Oct 19', value: '2026-10-19' },
    { label: 'Tue, Oct 20', value: '2026-10-20' },
    { label: 'Wed, Oct 21', value: '2026-10-21' },
    { label: 'Thu, Oct 22', value: '2026-10-22' },
    { label: 'Fri, Oct 23', value: '2026-10-23' },
    { label: 'Sat, Oct 24', value: '2026-10-24' },
    { label: 'Tue, Oct 27', value: '2026-10-27' },
    { label: 'Wed, Oct 28', value: '2026-10-28' },
    { label: 'Thu, Oct 29', value: '2026-10-29' },
    { label: 'Sat, Oct 31', value: '2026-10-31' }
  ];

  return (
    <section
      id="consultation"
      style={{
        padding: '7rem 0',
        position: 'relative',
        backgroundColor: '#0a0a0d',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="site-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-badge">
            <Scissors size={13} />
            APPOINTMENTS & CONSULTATION
          </div>
          <h2
            className="font-serif-title"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              lineHeight: 1.15,
              fontWeight: 400,
              marginBottom: '1rem',
              color: '#ffffff',
            }}
          >
            Book an Appointment at Our Office
          </h2>
          <p
            className="font-editorial"
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              fontWeight: 300,
            }}
          >
            Please let us know whether you want to make a new piece or come in for a fitting, then choose a convenient date and time to visit our office.
          </p>
        </div>

        {/* Card Box */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            borderRadius: '22px',
            padding: '2.5rem',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-luxury)',
            background: 'rgba(12, 12, 16, 0.95)',
          }}
        >
          {isBooked ? (
            /* Confirmation Card */
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }} className="animate-fade-in">
              <div
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid #ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.8rem auto',
                }}
              >
                <CheckCircle2 size={38} color="#ffffff" />
              </div>

              <span
                style={{
                  fontSize: '0.8rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                }}
              >
                Appointment Confirmed • Booking Ref: {bookingCode}
              </span>

              <h3
                className="font-serif-title"
                style={{
                  fontSize: '2.4rem',
                  marginTop: '0.6rem',
                  marginBottom: '1rem',
                  fontWeight: 400,
                  color: '#ffffff',
                }}
              >
                You're All Set!
              </h3>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  maxWidth: '580px',
                  margin: '0 auto 2.2rem auto',
                  lineHeight: 1.6,
                  fontSize: '1.05rem',
                }}
              >
                Thank you, <strong style={{ color: '#ffffff' }}>{bookingData.fullName || 'Valued Client'}</strong>! Your appointment has been booked for{' '}
                <strong style={{ color: '#ffffff' }}>{bookingData.date}</strong> at{' '}
                <strong style={{ color: '#ffffff' }}>{bookingData.timeSlot}</strong>.
              </p>

              {/* Summary Details */}
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: '1px dashed var(--border-subtle)',
                  borderRadius: '14px',
                  padding: '1.6rem',
                  maxWidth: '560px',
                  margin: '0 auto 2.5rem auto',
                  textAlign: 'left',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '1.2rem',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Appointment Type</div>
                  <div style={{ fontWeight: 600, color: '#ffffff', marginTop: '2px' }}>
                    {bookingData.purpose === 'new_piece' ? 'Making a New Piece' : 'Fitting for Existing Piece'}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Location</div>
                  <div style={{ fontWeight: 600, color: '#ffffff', marginTop: '2px' }}>
                    Maria Loran Office
                  </div>
                </div>

                {bookingData.purpose === 'new_piece' ? (
                  <>
                    <div>
                      <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Material / Fabric</div>
                      <div style={{ fontWeight: 600, color: '#ffffff', marginTop: '2px' }}>
                        {bookingData.material || bookingData.customMaterial || 'To discuss in office'}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Requested Style</div>
                      <div style={{ fontWeight: 600, color: '#ffffff', marginTop: '2px' }}>
                        {bookingData.style || bookingData.customStyle || 'Custom Style'}
                      </div>
                    </div>
                  </>
                ) : (
                  <div>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Garment to Fit</div>
                    <div style={{ fontWeight: 600, color: '#ffffff', marginTop: '2px' }}>
                      {bookingData.garmentDetails || bookingData.orderNumber || 'Existing Outfit with Maria'}
                    </div>
                  </div>
                )}

                <div>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Contact Details</div>
                  <div style={{ fontWeight: 600, color: '#ffffff', marginTop: '2px' }}>
                    {bookingData.phone || bookingData.email}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    setIsBooked(false);
                    setStep(1);
                  }}
                  className="btn-outline-white"
                >
                  Book Another Appointment
                </button>
                <a href="#works" className="btn-white">
                  Browse Gallery
                </a>
              </div>
            </div>
          ) : (
            <>
              {/* Step Flow Tabs */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: step >= 1 ? '#ffffff' : 'rgba(255, 255, 255, 0.1)',
                      color: step >= 1 ? '#000000' : '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}
                  >
                    1
                  </div>
                  <span style={{ fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: step === 1 ? '#ffffff' : 'var(--text-muted)' }}>
                    Choose Purpose
                  </span>
                </div>

                <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)', margin: '0 1rem' }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: step >= 2 ? '#ffffff' : 'rgba(255, 255, 255, 0.1)',
                      color: step >= 2 ? '#000000' : '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}
                  >
                    2
                  </div>
                  <span style={{ fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: step === 2 ? '#ffffff' : 'var(--text-muted)' }}>
                    {bookingData.purpose === 'new_piece' ? 'Material & Style' : 'Fitting Details'}
                  </span>
                </div>

                <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)', margin: '0 1rem' }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: step >= 3 ? '#ffffff' : 'rgba(255, 255, 255, 0.1)',
                      color: step >= 3 ? '#000000' : '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}
                  >
                    3
                  </div>
                  <span style={{ fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: step === 3 ? '#ffffff' : 'var(--text-muted)' }}>
                    Date & Time
                  </span>
                </div>
              </div>

              {/* STEP 1: Select Purpose */}
              {step === 1 && (
                <div className="animate-fade-in">
                  <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h3
                      className="font-serif-title"
                      style={{
                        fontSize: '1.9rem',
                        fontWeight: 400,
                        marginBottom: '0.6rem',
                        color: '#ffffff',
                      }}
                    >
                      What are you coming in for?
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      Please select one of the two options below before booking:
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '1.8rem',
                    }}
                  >
                    {/* Option 1: Making a new piece */}
                    <div
                      onClick={() => handleSelectPurpose('new_piece')}
                      className="glass-panel-hover"
                      style={{
                        padding: '2.4rem 2rem',
                        borderRadius: '18px',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        position: 'relative',
                        border: '1px solid var(--border-subtle)',
                        background: 'rgba(255, 255, 255, 0.03)',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.25)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.4rem',
                          }}
                        >
                          <Sparkles size={24} color="#ffffff" />
                        </div>

                        <span
                          style={{
                            fontSize: '0.72rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'var(--text-secondary)',
                            fontWeight: 600,
                          }}
                        >
                          CUSTOM OUTFIT
                        </span>

                        <h4
                          className="font-serif-title"
                          style={{
                            fontSize: '1.55rem',
                            fontWeight: 500,
                            margin: '0.4rem 0 0.8rem 0',
                            color: '#ffffff',
                          }}
                        >
                          Make a New Custom Piece
                        </h4>

                        <p
                          style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.92rem',
                            lineHeight: 1.6,
                            marginBottom: '1.8rem',
                          }}
                        >
                          Select this if you want to sew a new dress, gown, suit, or special event outfit. You can specify the material and style you want.
                        </p>
                      </div>

                      <button
                        className="btn-white"
                        style={{ width: '100%', padding: '0.85rem', fontSize: '0.82rem' }}
                      >
                        <span>Make a New Piece</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>

                    {/* Option 2: Coming for a fitting */}
                    <div
                      onClick={() => handleSelectPurpose('fitting')}
                      className="glass-panel-hover"
                      style={{
                        padding: '2.4rem 2rem',
                        borderRadius: '18px',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        position: 'relative',
                        border: '1px solid var(--border-subtle)',
                        background: 'rgba(255, 255, 255, 0.03)',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.25)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.4rem',
                          }}
                        >
                          <Scissors size={24} color="#ffffff" />
                        </div>

                        <span
                          style={{
                            fontSize: '0.72rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'var(--text-secondary)',
                            fontWeight: 600,
                          }}
                        >
                          EXISTING ORDER
                        </span>

                        <h4
                          className="font-serif-title"
                          style={{
                            fontSize: '1.55rem',
                            fontWeight: 500,
                            margin: '0.4rem 0 0.8rem 0',
                            color: '#ffffff',
                          }}
                        >
                          Come in for a Fitting
                        </h4>

                        <p
                          style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.92rem',
                            lineHeight: 1.6,
                            marginBottom: '1.8rem',
                          }}
                        >
                          Already have an outfit being sewn by Maria? Schedule an appointment to come directly to the office for your fitting.
                        </p>
                      </div>

                      <button
                        className="btn-outline-white"
                        style={{ width: '100%', padding: '0.85rem', fontSize: '0.82rem' }}
                      >
                        <span>Book a Fitting</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Detail Inputs */}
              {step === 2 && (
                <div className="animate-fade-in">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
                    <button
                      onClick={() => setStep(1)}
                      style={{
                        background: 'transparent',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        cursor: 'pointer',
                      }}
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <div>
                      <h3 className="font-serif-title" style={{ fontSize: '1.8rem', fontWeight: 400, color: '#ffffff' }}>
                        {bookingData.purpose === 'new_piece'
                          ? 'Details for Your New Piece'
                          : 'Fitting Appointment Details'}
                      </h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                        {bookingData.purpose === 'new_piece'
                          ? 'Please tell us the material and style you want so Maria can prepare for your consultation.'
                          : 'Just let us know which piece you are fitting so we have it ready at the office.'}
                      </p>
                    </div>
                  </div>

                  {bookingData.purpose === 'new_piece' ? (
                    /* NEW PIECE DETAILS */
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                      
                      {/* Kind of Material */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.8rem', fontWeight: 600 }}>
                          1. What kind of material / fabric do you want? *
                        </label>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                            gap: '0.7rem',
                          }}
                        >
                          {COMMON_MATERIALS.map((mat) => (
                            <button
                              key={mat}
                              type="button"
                              onClick={() => setBookingData({ ...bookingData, material: mat })}
                              style={{
                                padding: '0.85rem 1rem',
                                borderRadius: '10px',
                                textAlign: 'left',
                                background: bookingData.material === mat ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
                                color: bookingData.material === mat ? '#000000' : 'var(--text-secondary)',
                                border: bookingData.material === mat ? '1px solid #ffffff' : '1px solid var(--border-subtle)',
                                fontSize: '0.85rem',
                                fontWeight: bookingData.material === mat ? 600 : 400,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                              }}
                            >
                              {mat}
                            </button>
                          ))}
                        </div>
                        <input
                          type="text"
                          placeholder="Or type a specific material if not listed above..."
                          value={bookingData.customMaterial}
                          onChange={(e) => setBookingData({ ...bookingData, customMaterial: e.target.value })}
                          style={{
                            width: '100%',
                            marginTop: '0.8rem',
                            padding: '0.8rem 1.1rem',
                            borderRadius: '10px',
                            background: 'rgba(0, 0, 0, 0.5)',
                            border: '1px solid var(--border-subtle)',
                            color: '#ffffff',
                            fontSize: '0.88rem',
                            outline: 'none',
                          }}
                        />
                      </div>

                      {/* Style they want */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.8rem', fontWeight: 600 }}>
                          2. What style do you want? *
                        </label>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                            gap: '0.7rem',
                          }}
                        >
                          {COMMON_STYLES.map((st) => (
                            <button
                              key={st}
                              type="button"
                              onClick={() => setBookingData({ ...bookingData, style: st })}
                              style={{
                                padding: '0.85rem 1rem',
                                borderRadius: '10px',
                                textAlign: 'left',
                                background: bookingData.style === st ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
                                color: bookingData.style === st ? '#000000' : 'var(--text-secondary)',
                                border: bookingData.style === st ? '1px solid #ffffff' : '1px solid var(--border-subtle)',
                                fontSize: '0.85rem',
                                fontWeight: bookingData.style === st ? 600 : 400,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                              }}
                            >
                              {st}
                            </button>
                          ))}
                        </div>
                        <input
                          type="text"
                          placeholder="Or describe custom style in brief..."
                          value={bookingData.customStyle}
                          onChange={(e) => setBookingData({ ...bookingData, customStyle: e.target.value })}
                          style={{
                            width: '100%',
                            marginTop: '0.8rem',
                            padding: '0.8rem 1.1rem',
                            borderRadius: '10px',
                            background: 'rgba(0, 0, 0, 0.5)',
                            border: '1px solid var(--border-subtle)',
                            color: '#ffffff',
                            fontSize: '0.88rem',
                            outline: 'none',
                          }}
                        />
                      </div>

                      {/* Additional details */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>
                          Additional Details or Special Requests
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Any specific design ideas, color preferences, deadline, or references..."
                          value={bookingData.descriptionNotes}
                          onChange={(e) => setBookingData({ ...bookingData, descriptionNotes: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.85rem 1.1rem',
                            borderRadius: '10px',
                            background: 'rgba(0, 0, 0, 0.5)',
                            border: '1px solid var(--border-subtle)',
                            color: '#ffffff',
                            fontSize: '0.88rem',
                            outline: 'none',
                            resize: 'vertical',
                          }}
                        />
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="btn-white"
                        >
                          <span>Select Date & Time at Office</span>
                          <ChevronRight size={16} />
                        </button>
                      </div>

                    </div>
                  ) : (
                    /* FITTING DETAILS - SIMPLE FLOW */
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                      <div
                        style={{
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '12px',
                          padding: '1.2rem 1.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                        }}
                      >
                        <Scissors size={24} color="#ffffff" />
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#ffffff' }}>Coming for a Fitting</div>
                          <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                            All you have to do is just book an appointment to come to the office to fit your piece.
                          </div>
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>
                          Which piece or outfit are you fitting? *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Green velvet dress, Black tailored suit, Lace gown..."
                          value={bookingData.garmentDetails}
                          onChange={(e) => setBookingData({ ...bookingData, garmentDetails: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.85rem 1.1rem',
                            borderRadius: '10px',
                            background: 'rgba(0, 0, 0, 0.5)',
                            border: '1px solid var(--border-subtle)',
                            color: '#ffffff',
                            fontSize: '0.88rem',
                            outline: 'none',
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>
                          Order Reference or Your Name on Record (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. ML-2045 or client name used during order"
                          value={bookingData.orderNumber}
                          onChange={(e) => setBookingData({ ...bookingData, orderNumber: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.85rem 1.1rem',
                            borderRadius: '10px',
                            background: 'rgba(0, 0, 0, 0.5)',
                            border: '1px solid var(--border-subtle)',
                            color: '#ffffff',
                            fontSize: '0.88rem',
                            outline: 'none',
                          }}
                        />
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="btn-white"
                        >
                          <span>Select Fitting Date & Time</span>
                          <ChevronRight size={16} />
                        </button>
                      </div>

                    </div>
                  )}

                </div>
              )}

              {/* STEP 3: Choose Date, Time & Contact Info */}
              {step === 3 && (
                <form onSubmit={handleFormSubmit} className="animate-fade-in">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      style={{
                        background: 'transparent',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        cursor: 'pointer',
                      }}
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <div>
                      <h3 className="font-serif-title" style={{ fontSize: '1.8rem', fontWeight: 400, color: '#ffffff' }}>
                        Select Time & Date for Office Visit
                      </h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                        Pick your preferred appointment slot and provide your contact information.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    
                    {/* Office Location Notice */}
                    <div
                      style={{
                        padding: '1rem 1.2rem',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                      }}
                    >
                      <MapPin size={20} color="#ffffff" />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#ffffff' }}>Location: Maria Loran Tailoring Office</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          Consultations & fittings are conducted in person at our office by appointment.
                        </div>
                      </div>
                    </div>

                    {/* Date Picker Grid */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.8rem', fontWeight: 600 }}>
                        Select Date *
                      </label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.6rem' }}>
                        {availableDates.map((d) => (
                          <button
                            key={d.value}
                            type="button"
                            onClick={() => setBookingData({ ...bookingData, date: d.value })}
                            style={{
                              padding: '0.75rem 0.5rem',
                              borderRadius: '10px',
                              textAlign: 'center',
                              background: bookingData.date === d.value ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
                              color: bookingData.date === d.value ? '#000000' : '#ffffff',
                              border: bookingData.date === d.value ? '1px solid #ffffff' : '1px solid var(--border-subtle)',
                              fontWeight: 600,
                              fontSize: '0.85rem',
                              cursor: 'pointer',
                            }}
                          >
                            <div style={{ fontSize: '0.7rem', opacity: 0.75 }}>{d.label.split(',')[0]}</div>
                            <div>{d.label.split(',')[1]}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Slot Picker */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.8rem', fontWeight: 600 }}>
                        Select Time Slot *
                      </label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.6rem' }}>
                        {TIME_SLOTS.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setBookingData({ ...bookingData, timeSlot: slot })}
                            style={{
                              padding: '0.75rem 1rem',
                              borderRadius: '10px',
                              textAlign: 'left',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              background: bookingData.timeSlot === slot ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.04)',
                              border: bookingData.timeSlot === slot ? '1px solid #ffffff' : '1px solid var(--border-subtle)',
                              color: bookingData.timeSlot === slot ? '#ffffff' : 'var(--text-secondary)',
                              fontSize: '0.82rem',
                              fontWeight: 500,
                              cursor: 'pointer',
                            }}
                          >
                            <Clock size={14} />
                            <span>{slot}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.8rem', fontWeight: 600 }}>
                        Your Contact Information *
                      </label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                        <div>
                          <input
                            type="text"
                            required
                            placeholder="Full Name *"
                            value={bookingData.fullName}
                            onChange={(e) => setBookingData({ ...bookingData, fullName: e.target.value })}
                            style={{
                              width: '100%',
                              padding: '0.85rem 1.1rem',
                              borderRadius: '10px',
                              background: 'rgba(0, 0, 0, 0.5)',
                              border: '1px solid var(--border-subtle)',
                              color: '#ffffff',
                              fontSize: '0.88rem',
                              outline: 'none',
                            }}
                          />
                        </div>

                        <div>
                          <input
                            type="tel"
                            required
                            placeholder="Phone Number / WhatsApp *"
                            value={bookingData.phone}
                            onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                            style={{
                              width: '100%',
                              padding: '0.85rem 1.1rem',
                              borderRadius: '10px',
                              background: 'rgba(0, 0, 0, 0.5)',
                              border: '1px solid var(--border-subtle)',
                              color: '#ffffff',
                              fontSize: '0.88rem',
                              outline: 'none',
                            }}
                          />
                        </div>

                        <div>
                          <input
                            type="email"
                            required
                            placeholder="Email Address *"
                            value={bookingData.email}
                            onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                            style={{
                              width: '100%',
                              padding: '0.85rem 1.1rem',
                              borderRadius: '10px',
                              background: 'rgba(0, 0, 0, 0.5)',
                              border: '1px solid var(--border-subtle)',
                              color: '#ffffff',
                              fontSize: '0.88rem',
                              outline: 'none',
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        ✓ Maria will confirm your appointment via phone / email.
                      </span>
                      <button type="submit" className="btn-white">
                        <span>Confirm Office Appointment</span>
                        <CheckCircle2 size={16} />
                      </button>
                    </div>

                  </div>
                </form>
              )}
            </>
          )}

        </div>

      </div>
    </section>
  );
}
