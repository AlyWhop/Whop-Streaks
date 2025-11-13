import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // FIX: Replaced 'process.cwd()' with '.' to avoid a TypeScript type error where 'cwd' is not found on 'process'.
  // Vite resolves '.' relative to the config file, which is the project root.
  const env = loadEnv(mode, '.', '');

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.SUPABASE_URL': JSON.stringify(env.SUPABASE_URL),
      'process.env.SUPABASE_ANON_KEY': JSON.stringify(env.SUPABASE_ANON_KEY),
    },
    resolve: {
      alias: {
        // FIX: Replaced '__dirname' which is not available in all module systems (like ESM).
        // 'path.resolve('./')' correctly resolves to the project root where vite is typically run.
        '@': path.resolve('./'),
      },
    },
    build: {
      outDir: 'dist', // ✅ Ensures Vercel finds the output folder
      emptyOutDir: true,
    },
  };
});