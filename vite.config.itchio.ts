import { defineConfig } from 'vite';
import { resolve } from 'path';

// Dedicated build config for itch.io deployment.
// Outputs a self-contained dist/ with index.html as the entry point.
// Usage: npm run build:itchio
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'ES2022',
    outDir: 'dist-itchio',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'kids.html'),
      },
      output: {
        // Rename kids.html → index.html in output
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
});
