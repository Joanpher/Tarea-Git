import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Poppins, Fraunces } from 'next/font/google';
import './globals.css';
import ParticlesBackground from './particles-background';
import TransitionProvider from './transition-provider';
import ThemeToggle from './theme-toggle';

const fontSans = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

const fontDisplay = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'NewCard',
  description: 'Create your digital profile in seconds.',
  metadataBase: new URL('https://helloecard.com'),
  openGraph: {
    title: 'NewCard',
    description: 'Create your digital profile in seconds.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${fontSans.variable} ${fontDisplay.variable} overflow-x-hidden font-sans antialiased`}>
        <ParticlesBackground />
        <div className="relative z-10">
          <TransitionProvider>{children}</TransitionProvider>
        </div>
        <ThemeToggle />
      </body>
    </html>
  );
}
