import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { siteConfig } from '@/content/site';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.positioning}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: `${siteConfig.name} — ${siteConfig.positioning}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} Engineering Portfolio`,
  },
};

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#0b0d10' };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main className="site-container page-stack" id="main-content">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
