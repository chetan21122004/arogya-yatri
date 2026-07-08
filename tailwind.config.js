/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './app/**/*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Anton', 'sans-serif'],
        body: ['Lexend', 'sans-serif'],
        brand: ['Anton', 'sans-serif']
      },
      colors: {
        primaryDark: '#0F172A',
        medicalGreen: '#2F6F5E'
      },
      keyframes: {
        smoothIn: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        smoothIn: 'smoothIn 900ms cubic-bezier(0.22, 1, 0.36, 1) both'
      }
    }
  },
  plugins: []
};
