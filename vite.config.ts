import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Ensures /assets paths on Netlify
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: 'index.html'  // Key: Builds from index.html, injects scripts
    }
  },
  server: {
    port: 3000
  }
});
