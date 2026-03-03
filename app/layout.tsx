import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insomnia Icon Set',
  description: 'Animated 5×5 dot grid · 163 icons',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#000' }}>{children}</body>
    </html>
  );
}
