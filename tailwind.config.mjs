/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        holiday: {
          red: '#C41E3A',
          green: '#165B33'
        }
      }
    },
  },
  plugins: [],
}