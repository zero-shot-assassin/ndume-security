/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8eaf6',
          100: '#c5cae9',
          200: '#9fa8da',
          300: '#7986cb',
          400: '#5c6bc0',
          500: '#3949ab',
          600: '#1a237e',
          700: '#0d1b4b',
          800: '#0a1535',
          900: '#060d21',
        },
        gold: {
          50:  '#fdf8ee',
          100: '#faefd0',
          200: '#f5dfa0',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#c9a84c',
          600: '#b8860b',
          700: '#9a6f0a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(6,13,33,0.82), rgba(6,13,33,0.90))",
      },
    },
  },
  plugins: [],
}
