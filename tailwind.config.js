/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: '#121417',
          darker: '#0B0D0F',
          card: '#1A1D23',
          cardhover: '#222730',
          border: '#2E3542',
          orange: '#F97316',
          orangeHover: '#EA580C',
          amber: '#F59E0B',
          steel: '#94A3B8',
          cyan: '#06B6D4'
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'Space Grotesk', 'sans-serif'],
        body: ['Inter', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
