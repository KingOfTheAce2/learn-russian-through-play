import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'ES2022',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        kids: resolve(__dirname, 'kids.html'),
        adults: resolve(__dirname, 'adults.html'),
      },
    },
  },
});
