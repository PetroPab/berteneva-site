/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:            '#F4F1EA',
        surface:       '#FFFFFF',
        ink:           '#1A1A1A',
        'ink-muted':   '#6B6B6B',
        rule:          '#D9D5CB',
        accent:        '#C2410C',
        'accent-soft': '#FED7AA',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
        mono:  ['var(--font-jetbrains-mono)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['9rem',     { lineHeight: '0.9',  letterSpacing: '-0.02em' }],
        'display-lg': ['6.5rem',   { lineHeight: '0.92', letterSpacing: '-0.02em' }],
        'display-md': ['4.5rem',   { lineHeight: '1',    letterSpacing: '-0.01em' }],
        'display-sm': ['3rem',     { lineHeight: '1.1',  letterSpacing: '-0.01em' }],
        'heading':    ['2rem',     { lineHeight: '1.2' }],
        'subheading': ['1.5rem',   { lineHeight: '1.3' }],
        'lead':       ['1.125rem', { lineHeight: '1.5' }],
        'body':       ['1rem',     { lineHeight: '1.6' }],
        'caption':    ['0.75rem',  { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        site: '1280px',
      },
      borderColor: {
        DEFAULT: '#D9D5CB',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
