import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F9F9F7',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: '#111111',
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            fontFamily: 'sans-serif',
            lineHeight: 1,
          }}
        >
          A
        </span>
      </div>
    ),
    { ...size }
  )
}
