import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: false,
    host: 'localhost',
    hmr: {
      overlay: false,
      port: 3001,
    },
    // Prevent file watching issues
    watch: {
      ignored: ['**/node_modules/**', '**/dist/**', '**/.git/**'],
      usePolling: false,
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Optimize chunks to prevent loading issues
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react'],
        },
      },
    },
  },
  // Optimize dependencies to prevent runtime issues
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'lucide-react',
    ],
  },
})
