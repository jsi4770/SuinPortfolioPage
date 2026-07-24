/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Single Action Blue accent — every interactive element uses this scale.
        accent: {
          50: '#EAF2FC',
          100: '#D6E6FA',
          200: '#ADCDF5',
          300: '#7AAEEE',
          400: '#3D87E5',
          500: '#0066cc',
          600: '#0071e3',
          700: '#0056a8',
          800: '#004180',
          900: '#002d59',
          dark: '#2997ff',
        },
        ink: {
          900: '#1d1d1f',
          800: '#333333',
          700: '#484850',
          500: '#7a7a7a',
          300: '#cccccc',
          100: '#f0f0f0',
        },
        parchment: '#f5f5f7',
        pearl: '#fafafc',
        hairline: '#e0e0e0',
        tile: {
          1: '#272729',
          2: '#2a2a2c',
          3: '#252527',
        },
      },
      fontFamily: {
        display: ['var(--font-pretendard)', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['var(--font-pretendard)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero-display': ['56px', { lineHeight: '1.07', letterSpacing: '-0.28px', fontWeight: '600' }],
        'display-lg': ['40px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-md': ['34px', { lineHeight: '1.2', letterSpacing: '-0.374px', fontWeight: '600' }],
        lead: ['28px', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '400' }],
        tagline: ['21px', { lineHeight: '1.19', letterSpacing: '0.02em', fontWeight: '600' }],
        base17: ['17px', { lineHeight: '1.47', letterSpacing: '-0.374px', fontWeight: '400' }],
      },
      borderRadius: {
        xs: '5px',
        apple: '11px',
        card: '18px',
      },
      boxShadow: {
        product: '3px 5px 30px 0 rgba(0, 0, 0, 0.22)',
      },
      spacing: {
        18: '4.5rem',
        30: '7.5rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out both',
        'scale-in': 'scale-in 0.3s ease-out both',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
