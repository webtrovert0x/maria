import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import TailorChatbot from '@/components/TailorChatbot';

export const metadata: Metadata = {
  title: 'Maria Loran — Custom Tailoring & Bespoke Fashion',
  description: 'Custom tailoring, dresses, bespoke outfits, and fitting appointments with Maria Loran.',
  keywords: ['Maria Loran', 'Tailor', 'Custom Clothing', 'Dressmaker', 'Bespoke Tailoring', 'Fitting Appointment']
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="ambient-glow-layer" />
        <div className="noise-overlay" />
        <CustomCursor />
        {children}
        <TailorChatbot />
      </body>
    </html>
  );
}
