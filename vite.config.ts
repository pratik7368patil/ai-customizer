import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
  },
  server: {
    allowedHosts: [
      "637b-2402-e280-3e65-1e9-d43b-75ec-1d74-6883.ngrok-free.app",
      "localhost",
      "127.0.0.1",
    ],
  },
});
