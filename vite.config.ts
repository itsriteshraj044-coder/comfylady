import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 700,
    rolldownOptions: {
      output: {
        /* Keep the long-lived libraries in their own cacheable chunks. */
        advancedChunks: {
          groups: [
            { name: 'react', test: /node_modules[\/](react|react-dom|react-router|react-router-dom)[\/]/ },
            { name: 'motion', test: /node_modules[\/]framer-motion[\/]/ },
            { name: 'scroll', test: /node_modules[\/](gsap|lenis)[\/]/ },
          ],
        },
      },
    },
  },
})
