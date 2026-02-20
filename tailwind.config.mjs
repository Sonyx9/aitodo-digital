/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          50: '#fef3f2',
          100: '#fde4e1',
          200: '#fcd0cc',
          300: '#f9b0a8',
          400: '#f58475',
          500: '#f05d4a',
          600: '#dd3d2a',
          700: '#b92e1f',
          800: '#98291d',
          900: '#7e281d',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        warm: {
          peach: '#ffb3a7',
          pink: '#ff9ec8',
          purple: '#a78bfa',
          orange: '#fb923c',
        },
      },
    },
  },
  plugins: [],
};
