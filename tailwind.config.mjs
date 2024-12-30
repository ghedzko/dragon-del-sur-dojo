/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#C41E3A',
        secondary: '#1A1A1A',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        japanese: ['"Noto Sans JP"', 'sans-serif'],
        sans: ['"Noto Sans JP"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}