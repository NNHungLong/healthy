/** @type {import('tailwindcss').Config} */
import colors from './src/styles/colors';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        hiragino: ['Hiragino Kaku Gothic Pro', 'sans-serif']
      }
    }
  },
  plugins: []
};
