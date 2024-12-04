/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      colors: {
        holiday: {
          red: '#C41E3A',
          green: '#165B33',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
