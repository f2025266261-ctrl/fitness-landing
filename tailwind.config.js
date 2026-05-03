/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(212, 175, 55, 0.12), 0 20px 80px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
}
