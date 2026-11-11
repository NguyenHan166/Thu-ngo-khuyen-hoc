/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          950: '#4C0810',
          900: '#710C18',
          800: '#931625',
          700: '#B12332',
        },
        gold: {
          700: '#9B6B22',
          500: '#C99D4B',
          300: '#F1D58C',
          glow: '#FFD979',
        },
        paper: {
          50: '#FFFCF4',
          100: '#F8F0DF',
        },
        ink: {
          900: '#263343',
          700: '#34547A',
        },
        'line-gold': '#D8BD81',
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['"Noto Serif"', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      },
      boxShadow: {
        'paper': '0 24px 80px rgba(40, 15, 10, 0.18)',
        'paper-lg': '0 30px 100px rgba(40, 15, 10, 0.22)',
        'gold-glow': '0 0 25px rgba(241, 213, 140, 0.35)',
        'gold-glow-lg': '0 0 45px rgba(255, 217, 121, 0.45)',
      },
    },
  },
  plugins: [],
};
