import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#111111',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: '#F9F9F7',
            fontSize: '13px',
            fontWeight: '500',
            letterSpacing: '-0.02em',
            fontFamily: 'sans-serif',
          }}
        >
          AA
        </span>
      </div>
    ),
    { ...size }
  )
}
