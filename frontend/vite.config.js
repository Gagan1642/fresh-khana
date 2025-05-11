// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     react()
//   ],
// })







import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Assuming you're using React

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@mapbox/node-pre-gyp', 'aws-sdk', 'mock-aws-s3', 'nock']
  },
  resolve: {
    // Prevent Vite from trying to resolve backend dependencies
    alias: {
      '@mapbox/node-pre-gyp': 'empty-module',
    }
  },
  build: {
    rollupOptions: {
      external: [
        '@mapbox/node-pre-gyp',
        'aws-sdk',
        'mock-aws-s3',
        'nock'
      ]
    }
  }
})
