/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'custom-bg': '#0a192f',
        'custom-accent': '#64ffda',
        'custom-text': '#e6f1ff',
        'custom-subtle': '#8892b0'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
};