import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: 'index.html',  // Vite processes this, swaps ./src/index.tsx to /assets/[hash].js
      external: []  // Bundle everything—no externals for clean static
    }
  },
  server: { port: 3000 }
});
