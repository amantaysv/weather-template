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
    },
  },
  plugins: [],
}
