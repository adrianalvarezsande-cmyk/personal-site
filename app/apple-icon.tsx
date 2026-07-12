import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
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
          borderRadius: 40,
        }}
      >
        <span
          style={{
            color: '#111111',
            fontSize: 110,
            fontWeight: 600,
            letterSpacing: '-0.03em',
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
