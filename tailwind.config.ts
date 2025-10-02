import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--brand-primary)',
          secondary: 'var(--brand-secondary)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          white: 'var(--surface-white)',
        },
        text: {
          base: 'var(--text-base)',
          light: 'var(--text-light)',
          muted: 'var(--text-muted)',
        },
        link: {
          DEFAULT: 'var(--link)',
          hover: 'var(--link-hover)',
          active: 'var(--link-active)',
        },
        border: {
          DEFAULT: 'var(--header-border)',
        },
      },
      fontFamily: {
        sans: ['Chillax', 'system-ui', '-apple-system', 'sans-serif'],
      },
      container: { center: true, padding: '1rem' },
    },
  },
  plugins: [],
} satisfies Config


