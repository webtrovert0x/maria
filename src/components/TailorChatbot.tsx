'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Scissors, 
  ChevronRight, 
  Calendar 
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  quickActions?: { label: string; action: () => void }[];
}

export default function TailorChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBooking = () => {
    setIsOpen(false);
    const el = document.getElementById('consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const initialMessages: ChatMessage[] = [
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Hello! Welcome to Maria Loran. How can I help you today? Whether you want to make a new custom outfit or book a fitting at our office, I am here to help.',
      time: 'Just now',
      quickActions: [
        {
          label: '✂️ Make a New Custom Piece',
          action: () => handleSendPrompt('I want to make a new piece.')
        },
        {
          label: '👗 Book a Fitting for an Existing Piece',
          action: () => handleSendPrompt('I need to book an appointment for a fitting.')
        },
        {
          label: '🧵 What fabrics can I choose from?',
          action: () => handleSendPrompt('What materials and fabrics do you work with?')
        },
        {
          label: '📍 Office Location & Hours',
          action: () => handleSendPrompt('Where is your office located and how do I visit?')
        }
      ]
    }
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateBotReply = (userQuery: string): { text: string; quickActions?: { label: string; action: () => void }[] } => {
    const q = userQuery.toLowerCase();

    if (q.includes('new') || q.includes('make') || q.includes('custom') || q.includes('sew') || q.includes('dress') || q.includes('suit')) {
      return {
        text: 'Great! When making a new piece, you can tell us the material (velvet, silk, lace, brocade, etc.) and the style you want (gown, suit, two-piece, party dress). You can select your details and pick a date/time to consult with Maria in our office.',
        quickActions: [
          {
            label: '📅 Fill Out New Piece Booking Form',
            action: scrollToBooking
          }
        ]
      };
    }

    if (q.includes('fit') || q.includes('fitting') || q.includes('alter') || q.includes('existing') || q.includes('appointment')) {
      return {
        text: 'If you already have a piece in progress with Maria, all you need to do is pick an appointment slot to visit our office for your fitting session.',
        quickActions: [
          {
            label: '🗓️ Book a Fitting Slot',
            action: scrollToBooking
          }
        ]
      };
    }

    if (q.includes('fabric') || q.includes('material') || q.includes('cloth') || q.includes('velvet') || q.includes('silk') || q.includes('lace')) {
      return {
        text: 'We work with a wide range of quality fabrics including stretch velvet, silk & satin, delicate lace, brocade, organza, wool suitings, and cotton/linen blends. You can also bring your own fabric to the office if you prefer!',
        quickActions: [
          {
            label: '✂️ Book Consultation',
            action: scrollToBooking
          }
        ]
      };
    }

    if (q.includes('location') || q.includes('address') || q.includes('office') || q.includes('hours') || q.includes('where')) {
      return {
        text: 'Our tailoring office is open Monday through Saturday by appointment. Consultations and fittings are held in person so we can take exact measurements and fit your garments properly.',
        quickActions: [
          {
            label: '📅 Book an Office Visit',
            action: scrollToBooking
          }
        ]
      };
    }

    return {
      text: 'Thanks for reaching out! You can easily book an appointment below to come to the office for either a new piece consultation or a garment fitting.',
      quickActions: [
        {
          label: '📅 Book Appointment',
          action: scrollToBooking
        },
        {
          label: '👁️ Browse Gallery',
          action: () => {
            setIsOpen(false);
            document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
          }
        }
      ]
    };
  };

  const handleSendPrompt = (promptText: string) => {
    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: promptText,
      time: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateBotReply(promptText);
      const botMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'bot',
        text: reply.text,
        time: 'Just now',
        quickActions: reply.quickActions
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const text = inputText;
    setInputText('');
    handleSendPrompt(text);
  };

  return (
    <>
      {/* Floating Toggle Button with Logo */}
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 995 }}>
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Chatbot"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1.4rem',
              borderRadius: '9999px',
              background: '#ffffff',
              color: '#000000',
              border: '1px solid #ffffff',
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(255, 255, 255, 0.25)',
              fontWeight: 600,
              fontSize: '0.82rem',
              letterSpacing: '0.04em',
              transition: 'all 0.25s ease',
            }}
            className="interactive-card"
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                overflow: 'hidden',
                background: '#000000',
              }}
            >
              <img src="/logo.jpg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span>Chat with Us</span>
          </button>
        )}
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: 'min(420px, calc(100vw - 2.5rem))',
            height: 'min(560px, calc(100vh - 5rem))',
            background: 'rgba(12, 12, 16, 0.98)',
            backdropFilter: 'blur(25px)',
            border: '1px solid var(--border-highlight)',
            borderRadius: '20px',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.95)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 998,
            overflow: 'hidden',
          }}
          className="animate-fade-in"
        >
          {/* Header */}
          <div
            style={{
              padding: '1.1rem 1.3rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1px solid #ffffff',
                }}
              >
                <img src="/logo.jpg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#ffffff' }}>
                  Maria Loran Assistant
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                  Online • Ready to help
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                padding: '4px',
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Body */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1.2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '85%',
                    padding: '0.85rem 1.1rem',
                    borderRadius: msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                    background: msg.sender === 'user' ? '#ffffff' : 'rgba(255, 255, 255, 0.06)',
                    color: msg.sender === 'user' ? '#000000' : '#ffffff',
                    fontSize: '0.86rem',
                    lineHeight: 1.5,
                  }}
                >
                  {msg.text}
                </div>

                {/* Quick Action Buttons */}
                {msg.quickActions && msg.quickActions.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.6rem', width: '100%' }}>
                    {msg.quickActions.map((qa, i) => (
                      <button
                        key={i}
                        onClick={qa.action}
                        style={{
                          textAlign: 'left',
                          padding: '0.6rem 0.9rem',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-subtle)',
                          color: '#ffffff',
                          fontSize: '0.78rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                          e.currentTarget.style.borderColor = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                          e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        }}
                      >
                        <span>{qa.label}</span>
                        <ChevronRight size={13} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '0.6rem 0.9rem',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--text-muted)',
                  fontSize: '0.78rem',
                }}
              >
                Typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form
            onSubmit={handleSubmit}
            style={{
              padding: '0.8rem 1rem',
              background: 'rgba(0, 0, 0, 0.5)',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}
          >
            <input
              type="text"
              placeholder="Ask about making a piece or fittings..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              style={{
                flex: 1,
                padding: '0.7rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                fontSize: '0.84rem',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              aria-label="Send message"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#ffffff',
                color: '#000000',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
