import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
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
          borderRadius: '40px',
        }}
      >
        <span
          style={{
            color: '#F9F9F7',
            fontSize: '72px',
            fontWeight: '500',
            letterSpacing: '-0.04em',
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
