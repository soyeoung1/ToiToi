import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Use relative paths for assets so the app works under /ToiToi/ on GitHub Pages
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name]-[hash]-${Date.now()}.[ext]`,
        chunkFileNames: `assets/[name]-[hash]-${Date.now()}.js`,
        entryFileNames: `assets/[name]-[hash]-${Date.now()}.js`,
        manualChunks: undefined,
      },
    },
    assetsInlineLimit: 0,
    cssCodeSplit: false,
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/socket.io": {
        target: "http://localhost:5000",
        changeOrigin: true,
        ws: true,
      },
    },
  },
});
