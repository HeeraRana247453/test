/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans':['Inter','sans-serif']
      },
      animation:{
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [tailwindScrollbar],
}