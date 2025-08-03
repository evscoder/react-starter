import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: './',
    plugins: [react()],
    css: {
      modules: {
        localsConvention: 'dashes'
      }
    },
    server: {
      port: Number(env.VITE_PORT) || 3000,
      host: true
    }
  };
});
