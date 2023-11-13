/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        clear: "url('./src/assets/images/clear.webp')",
        clouds: "url('./src/assets/images/clouds.webp')",
        mist: "url('./src/assets/images/mist.webp')",
      },
      animation: {
        error: 'error 0.3s forwards',
      },
      keyframes: {
        error: {
          '25%': { transform: 'rotate(5deg)' },
          '50%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
}
