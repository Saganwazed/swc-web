/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        base: '#0a0a0c',
        accent: {
          DEFAULT: '#818cf8',
          dim: '#6366f1',
        },
      },
      maxWidth: {
        content: '68rem',
      },
    },
  },
  plugins: [],
};
