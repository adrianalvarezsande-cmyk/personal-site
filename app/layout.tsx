import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Providers } from '@/components/providers'
import { Nav } from '@/components/layout/nav'
import { Footer } from '@/components/layout/footer'
import { CustomCursor } from '@/components/custom-cursor'
import { CommandPalette } from '@/components/command-palette'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://adriansande.com'),
  alternates: {
    canonical: 'https://adriansande.com',
  },
  title: {
    default: 'Adrián Álvarez Sande',
    template: '%s | Adrián Álvarez Sande',
  },
  description:
    'Adrián Álvarez Sande — finance and technology student at Amsterdam University College. From A Coruña, Spain.',
  keywords: [
    'Adrián Álvarez Sande',
    'Adrian Alvarez Sande',
    'Adrian Sande',
    'adriansande',
    'AUC Amsterdam',
    'Amsterdam University College',
    'finance technology student',
    'A Coruña',
  ],
  authors: [{ name: 'Adrián Álvarez Sande' }],
  creator: 'Adrián Álvarez Sande',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adriansande.com',
    siteName: 'Adrián Álvarez Sande',
    title: 'Adrián Álvarez Sande',
    description:
      'Finance and technology student at Amsterdam University College. From A Coruña, Spain.',
  },
  twitter: {
    card: 'summary',
    title: 'Adrián Álvarez Sande',
    description:
      'Finance and technology student at Amsterdam University College. From A Coruña, Spain.',
    creator: '@adriansadee_',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-icon',
  },
  verification: {
    google: 'Ty1fD44mc4cuhy0NA7c6gX1rpqxwU0uKw1iYYUR2Wkw',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Adrián Álvarez Sande',
              alternateName: [
                'Adrian Alvarez Sande',
                'Adrian Sande',
                'Adrián Sande',
              ],
              url: 'https://adriansande.com',
              image: 'https://adriansande.com/images/Adrian.png',
              sameAs: [
                'https://www.linkedin.com/in/adrian-alvarez-7513a4252',
                'https://www.instagram.com/adriansandee_',
                'https://x.com/adriansadee_',
              ],
              jobTitle: 'Student',
              affiliation: {
                '@type': 'Organization',
                name: 'Amsterdam University College',
              },
              alumniOf: {
                '@type': 'Organization',
                name: 'Amsterdam University College',
              },
              nationality: 'Spanish',
              birthPlace: 'A Coruña, Galicia, Spain',
              knowsLanguage: ['Spanish', 'Galician', 'English', 'Portuguese'],
              description:
                'Finance and technology student at Amsterdam University College, from A Coruña, Spain.',
            }),
          }}
        />
      </head>
      <body className="bg-surface text-ink font-sans">
        {/* Film grain overlay — fixed, pointer-events:none, barely perceptible */}
        <svg
          aria-hidden="true"
          focusable="false"
          style={{
            position: 'fixed',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 9998,
            pointerEvents: 'none',
            opacity: 'var(--grain-opacity)',
          }}
        >
          <filter id="grain-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain-filter)" />
        </svg>

        <Providers>
          <div className="flex min-h-screen flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CustomCursor />
          <CommandPalette />
        </Providers>
      </body>
    </html>
  )
}
