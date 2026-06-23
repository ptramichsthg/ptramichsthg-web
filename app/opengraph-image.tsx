import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Putra Michael Sitohang - Full-Stack Laravel Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #18181b, #27272a)', // dark zinc gradient
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 100,
            fontWeight: 800,
            letterSpacing: '-0.05em',
            background: 'linear-gradient(to right, #fafafa, #a1a1aa)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Putra Michael Sitohang
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 500,
            color: '#a1a1aa', // zinc-400
            textAlign: 'center',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          Full-Stack Laravel Developer
        </div>
      </div>
    ),
    { ...size }
  )
}
