import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@icons': '/src/components/icons',
      '@components': '/src/components',
      '@interfaces': '/src/interfaces',
      '@images': '/src/assets/images',
      '@assets': '/src/assets',
    },
  },
})
