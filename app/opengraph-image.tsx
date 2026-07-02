import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Adrián Álvarez'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#111111',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '80px',
        }}
      >
        {/* Subtle top rule */}
        <div
          style={{
            position: 'absolute',
            top: '80px',
            left: '80px',
            right: '80px',
            height: '1px',
            background: '#252523',
          }}
        />

        {/* Name */}
        <div
          style={{
            color: '#F0EFE9',
            fontSize: '72px',
            fontWeight: '500',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
            fontFamily: 'sans-serif',
            marginBottom: '20px',
          }}
        >
          Adrián Álvarez
        </div>

        {/* Description */}
        <div
          style={{
            color: '#888880',
            fontSize: '24px',
            fontWeight: '400',
            letterSpacing: '-0.01em',
            lineHeight: '1.4',
            fontFamily: 'sans-serif',
            maxWidth: '640px',
          }}
        >
          Finance and technology student in Amsterdam.
          Interested in AI, digital markets, and economic behavior.
        </div>
      </div>
    ),
    { ...size }
  )
}
