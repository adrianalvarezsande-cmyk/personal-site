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
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT ?? 3000}`
  ),
  title: {
    default: 'Adrián Álvarez',
    template: '%s — Adrián Álvarez',
  },
  description:
    'Finance and technology student in Amsterdam. Interested in AI, digital markets, and how technology reshapes economic behavior.',
  openGraph: {
    title: 'Adrián Álvarez',
    description:
      'Finance and technology student in Amsterdam. Interested in AI, digital markets, and how technology reshapes economic behavior.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Adrián Álvarez',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adrián Álvarez',
    description:
      'Finance and technology student in Amsterdam. Interested in AI, digital markets, and how technology reshapes economic behavior.',
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
