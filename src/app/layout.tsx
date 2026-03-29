import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amarveer Singh — Software Engineer',
  description:
    'Software Engineer delivering scalable web applications with a focus on modern front-end technologies and seamless user experiences. Based in Bangalore, India.',
  keywords: ['Software Engineer', 'React', 'Next.js', 'TypeScript', 'Amarveer Singh'],
  authors: [{ name: 'Amarveer Singh' }],
  openGraph: {
    title: 'Amarveer Singh — Software Engineer',
    description:
      'Crafting web applications using modern front-end technologies and robust backend integrations to deliver seamless user experiences.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
