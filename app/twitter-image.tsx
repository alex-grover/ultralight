import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = "Ultralight - Don't pack your fears"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const geistRegular = fetch(
    new URL(
      'https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.3/files/geist-sans-latin-400-normal.woff'
    )
  ).then((res) => res.arrayBuffer())

  const geistSemibold = fetch(
    new URL(
      'https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.3/files/geist-sans-latin-600-normal.woff'
    )
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a0a',
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 96,
            letterSpacing: '-0.02em',
            color: '#fafafa',
          }}
        >
          <span style={{ fontWeight: 300 }}>ULTRA</span>
          <span style={{ fontWeight: 600 }}>LIGHT</span>
        </div>
        <div
          style={{
            width: 180,
            height: 3,
            backgroundColor: '#fafafa',
            marginTop: 8,
          }}
        />
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: 32,
          color: '#a1a1aa',
          marginTop: 48,
          fontWeight: 400,
        }}
      >
        Don&apos;t pack your fears
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Geist',
          data: await geistRegular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Geist',
          data: await geistSemibold,
          style: 'normal',
          weight: 600,
        },
      ],
    }
  )
}
