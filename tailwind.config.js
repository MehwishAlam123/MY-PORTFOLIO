/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B1E',
        surface: {
          DEFAULT: '#14142E',
          hover: '#1B1B3D',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        primary: {
          DEFAULT: '#7C3AED', // electric violet
          hover: '#6D28D9',
          light: '#A78BFA',
        },
        secondary: {
          DEFAULT: '#FF5A5F', // hot coral
          hover: '#E0484D',
          light: '#FDA4AF',
        },
        highlight: {
          DEFAULT: '#22D3EE', // cyan
          light: '#67E8F9',
        },
        text: {
          DEFAULT: '#F8FAFC',
          muted: '#94A3B8',
          subtle: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #7C3AED 0%, #FF5A5F 100%)',
        'gradient-brand-subtle': 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(255, 90, 95, 0.15) 100%)',
        'gradient-glow': 'radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, rgba(255, 90, 95, 0.1) 50%, transparent 70%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-primary': '0 0 25px rgba(124, 58, 237, 0.35)',
        'glow-secondary': '0 0 25px rgba(255, 90, 95, 0.35)',
        'glow-brand': '0 0 35px rgba(124, 58, 237, 0.25), 0 0 15px rgba(255, 90, 95, 0.2)',
      },
      borderRadius: {
        'card': '16px',
      }
    },
  },
  plugins: [],
}

