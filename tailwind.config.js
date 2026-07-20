/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#EFF5FF',
          100: '#DCE9FF',
          200: '#B9D2FF',
          300: '#8AB4FF',
          400: '#528DFF',
          500: '#2563FF',
          600: '#1246E0',
          700: '#0C34AD',
          800: '#0A2B8A',
          900: '#092468',
        },
        ink: {
          900: '#111827',
          800: '#1F2937',
          700: '#334155',
          500: '#64748B',
          300: '#CBD5E1',
          100: '#F1F5F9',
        },
        academic: '#6D28D9',
        activity: '#B45309',
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '1.15', fontWeight: '700' }],
        'display-sm': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
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
