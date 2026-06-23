import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#18181b', // zinc-900
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fafafa', // zinc-50
          borderRadius: '20%',
          fontWeight: 800,
          fontFamily: 'sans-serif',
        }}
      >
        P
      </div>
    ),
    { ...size }
  )
}
