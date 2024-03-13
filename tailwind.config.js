/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mains': '#194599',
        'link':'#4ab5e2',
        "purple-button":"#8316B5",
        'purple-hover':'#7512a2'
      },
      fontSize:{
        '14':'14px',
      }
    },
  },
  plugins: [],
}

