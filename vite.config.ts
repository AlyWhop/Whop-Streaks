import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Fixes asset paths for static hosts like Netlify
  build: {
    outDir: 'dist',  // Matches your publish dir
    assetsDir: 'assets',  // Bundles icons/CSS here
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',  // Your JS bundle
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  server: {
    port: 3000  // Local dev port
  }
});
