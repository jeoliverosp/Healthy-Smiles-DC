/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0908',
        deep: '#22333B',
        cream: '#EAE0D5',
        gold: '#C6AC8F',
        brown: '#5E503F',
        'cream-hover': '#D4C9B8',
        'cream-dark': '#D4C9B8',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'step--1': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.1em' }],
        'step-0': ['1rem', { lineHeight: '1.6' }],
        'step-1': ['1.25rem', { lineHeight: '1.5' }],
        'step-2': ['1.563rem', { lineHeight: '1.4' }],
        'step-3': ['1.953rem', { lineHeight: '1.3' }],
        'step-4': ['2.441rem', { lineHeight: '1.2' }],
        'step-5': ['3.052rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'step-6': ['3.815rem', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
      },
      spacing: {
        '3xs': '0.25rem',
        '2xs': '0.5rem',
        'xs': '0.75rem',
        's': '1rem',
        'm': '1.5rem',
        'l': '2rem',
        'xl': '3rem',
        '2xl': '4.5rem',
        '3xl': '7rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'pill': '999px',
      },
      transitionDuration: {
        'fast': '120ms',
        'normal': '220ms',
        'slow': '420ms',
      },
      transitionTimingFunction: {
        'ease': 'cubic-bezier(0.2, 0, 0, 1)',
        'ease-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
