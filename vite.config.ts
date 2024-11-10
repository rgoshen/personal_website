import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
  },
  plugins: [
    react(),
    compression({
      algorithm: 'gzip', // You can also use 'brotliCompress' for Brotli
      ext: '.gz', // Extension for compressed files
      deleteOriginFile: false, // Keeps the original file for S3 uploads
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
});
