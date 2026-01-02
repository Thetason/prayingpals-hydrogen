import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        contrast: 'rgb(var(--color-contrast) / <alpha-value>)',
        notice: 'rgb(var(--color-accent) / <alpha-value>)',
        shopPay: 'rgb(var(--color-shop-pay) / <alpha-value>)',
        // Little Nazareth Custom Colors
        'sunset': {
          DEFAULT: '#FF9B71',
          light: '#FFB893',
          dark: '#E67A4F',
        },
        'heaven': {
          DEFAULT: '#B5A4D9',
          light: '#D4C8ED',
          dark: '#9384BF',
        },
        'peace': {
          DEFAULT: '#9CC5A1',
          light: '#C4E3C9',
          dark: '#7BA580',
        },
        'holy': {
          DEFAULT: '#FFD700',
          light: '#FFE34D',
          dark: '#D4AF37',
        },
        'neutral': {
          cloud: '#FFF8F0',
          cream: '#F5E6D3',
          sand: '#E8D4B8',
        },
        'text': {
          primary: '#4A3828',
          secondary: '#8B7355',
          muted: '#B8A692',
        },
        'char-lamb': {
          DEFAULT: '#FFE5E5',
          accent: '#FFB3BA'
        }
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        handwriting: ['"Nanum Pen Script"', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'holy-glow': 'holy-glow 3s ease-in-out infinite',
        'reveal': 'reveal 0.8s ease-out forwards',
        'spin-reveal': 'spin-reveal 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'holy-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 215, 0, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 215, 0, 0.5)'
          },
        },
        reveal: {
          'from': { opacity: '0', transform: 'scale(0.8) translateY(40px)' },
          'to': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'spin-reveal': {
          'from': { opacity: '0', transform: 'rotateY(180deg) scale(0)' },
          'to': { opacity: '1', transform: 'rotateY(0deg) scale(1)' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        }
      },
    },
  },
  plugins: [formsPlugin, typographyPlugin],
};
