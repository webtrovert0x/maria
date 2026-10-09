import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import TailorChatbot from '@/components/TailorChatbot';

export const metadata: Metadata = {
  title: 'Maria Lórán — Custom Tailoring & Bespoke Fashion',
  description: 'Custom tailoring, dresses, bespoke outfits, and fitting appointments with Maria Lórán.',
  keywords: ['Maria Lórán', 'Tailor', 'Custom Clothing', 'Dressmaker', 'Bespoke Tailoring', 'Fitting Appointment']
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
