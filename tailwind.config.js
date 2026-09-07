/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        autumn: {
          50: '#FDFBF7',
          100: '#F7F0E6',
          200: '#EEDAC2',
          300: '#E1C099',
          400: '#D59F67',
          500: '#C87D38',
          600: '#B86221',
          700: '#944715',
          800: '#6C3414',
          900: '#431F0C',
          950: '#271105',
        },
        terracotta: {
          light: '#F8A985',
          DEFAULT: '#D86843',
          dark: '#B34A28'
        },
        warmBrown: {
          light: '#8D5B4C',
          DEFAULT: '#5A382E',
          dark: '#38221B'
        },
        caramel: {
          light: '#F4D39E',
          DEFAULT: '#D99849',
          dark: '#B07228'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        sway: 'sway 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
