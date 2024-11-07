/** @type {import('tailwindcss').Config} */
const no_scroll = require('tailwind-scrollbar-hide');
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [no_scroll],
}

