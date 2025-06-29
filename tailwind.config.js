/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';
import tailwindcssFilters from 'tailwindcss-filters';

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
      },
      boxShadow: {
        custom:
        'inset 20px 10px 20px rgba(0, 0, 0, 0.1), 15px 20px 10px rgba(0, 0, 0, 0.1), 15px 20px 20px rgba(0, 0, 0, 0.1), inset -10px -10px 15px rgba(255, 255, 255, 0.6)',
        customTwo:
        'inset 10px 10px 10px rgba(0, 0, 0, 0.1), 10px 10px 10px rgba(0, 0, 0, 0.1), 15px 15px 20px rgba(0, 0, 0, 0.1), inset -10px -10px 15px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [tailwindScrollbar,tailwindcssFilters],
}