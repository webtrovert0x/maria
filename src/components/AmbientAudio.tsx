'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscNodesRef = useRef<OscillatorNode[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAtmosphere = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Filter for warmth
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);
      filter.connect(masterGain);

      // Ethereal chord frequencies (F minor 9th / atmospheric fashion chord: F2, C3, Eb3, G3, Ab3)
      const frequencies = [87.31, 130.81, 155.56, 196.00, 207.65];
      const oscillators: OscillatorNode[] = [];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Subtle detune for shimmer
        osc.detune.setValueAtTime((idx - 2) * 4, ctx.currentTime);

        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0.18, ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(filter);

        osc.start();
        oscillators.push(osc);
      });

      oscNodesRef.current = oscillators;

      // Gentle filter sweep
      let phase = 0;
      intervalRef.current = setInterval(() => {
        if (!audioCtxRef.current || !filter) return;
        phase += 0.05;
        const targetFreq = 260 + Math.sin(phase) * 120;
        filter.frequency.setTargetAtTime(targetFreq, audioCtxRef.current.currentTime, 1.5);
      }, 2000);

      setIsPlaying(true);
      setHasInteracted(true);
    } catch (e) {
      console.warn('Audio synthesis initialized with fallback', e);
    }
  };

  const stopAtmosphere = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, audioCtxRef.current.currentTime);
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1.2);

      setTimeout(() => {
        oscNodesRef.current.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // safely ignore
          }
        });
        oscNodesRef.current = [];
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsPlaying(false);
      }, 1200);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopAtmosphere();
    } else {
      startAtmosphere();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try {
          audioCtxRef.current.close();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 990 }}>
      <button
        onClick={toggleAudio}
        aria-label="Toggle Runway Atmosphere Audio"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.6rem 1.1rem',
          borderRadius: '9999px',
          background: isPlaying ? 'rgba(212, 175, 55, 0.15)' : 'rgba(18, 18, 24, 0.85)',
          border: isPlaying ? '1px solid #d4af37' : '1px solid rgba(255, 255, 255, 0.12)',
          color: isPlaying ? '#f7e8b6' : 'var(--text-secondary)',
          backdropFilter: 'blur(16px)',
          cursor: 'pointer',
          boxShadow: isPlaying ? '0 0 20px rgba(212, 175, 55, 0.3)' : '0 10px 25px rgba(0, 0, 0, 0.4)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          fontSize: '0.78rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontWeight: 500,
        }}
        className="ambient-sound-btn"
      >
        {isPlaying ? (
          <>
            <Volume2 size={16} color="#d4af37" />
            <span>Atmosphere Live</span>
            <span
              style={{
                display: 'inline-block',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#d4af37',
                boxShadow: '0 0 8px #d4af37',
                animation: 'pulse 1.8s infinite',
              }}
            />
          </>
        ) : (
          <>
            <VolumeX size={16} />
            <span>Soundscape: Off</span>
          </>
        )}
      </button>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}
