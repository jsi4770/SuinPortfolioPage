import { ImageResponse } from 'next/og';
import card from '../../data/config/card.json';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 120,
            borderRadius: '50%',
            backgroundColor: '#0066cc',
            color: '#ffffff',
            fontSize: 44,
            fontWeight: 600,
            marginBottom: 32,
          }}
        >
          {card.initials}
        </div>
        <div style={{ fontSize: 64, fontWeight: 600, color: '#1d1d1f', letterSpacing: -1 }}>
          {card.name}
        </div>
        <div style={{ fontSize: 30, fontWeight: 500, color: '#0066cc', marginTop: 16 }}>
          {card.title}
        </div>
      </div>
    ),
    { ...size }
  );
}
