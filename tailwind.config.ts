import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          accent: 'rgb(var(--brand-accent) / <alpha-value>)',
          ink: 'rgb(var(--brand-ink) / <alpha-value>)',
          muted: 'rgb(var(--brand-muted) / <alpha-value>)',
          surface: 'rgb(var(--brand-surface) / <alpha-value>)',
          line: 'rgb(var(--brand-line) / <alpha-value>)',
          soft: 'rgb(var(--brand-soft) / <alpha-value>)',
          dark: '#15281c',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)',
        lift: '0 18px 50px rgba(0,0,0,0.14)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(1200px 600px at 30% 10%, rgba(63, 143, 86,0.22), rgba(63, 143, 86,0) 60%), radial-gradient(900px 500px at 80% 20%, rgba(143,184,110,0.14), rgba(143,184,110,0) 55%)',
      },
    },
  },
  plugins: [],
};

export default config;
