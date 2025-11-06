import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
  input: 'index.html',
  external: [],
  resolve: {
    alias: { '@': '.' }  // Maps @ to root for any imports
      }
    }
  },
  server: { port: 3000 }
});
