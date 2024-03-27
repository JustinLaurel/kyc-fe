import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/src": path.resolve(__dirname, "./src"),
      "@/app": path.resolve(__dirname, "./src/app"),
      "@/frontoffice": path.resolve(__dirname, "./src/app/frontoffice"),
      "@/backoffice": path.resolve(__dirname, "./src/app/backoffice"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/services": path.resolve(__dirname, "./src/services"),
      "@/config": path.resolve(__dirname, "./src/config"),
      "@/util": path.resolve(__dirname, "./src/util"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/src/app/global.scss";`,
      },
    },
  },
});
