import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 2000,
    assetsInlineLimit: 0,
    sourcemap: true,
    rollupOptions: {
      output: { manualChunks: undefined },
    },
  },
});
