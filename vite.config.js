import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  devServer: {
    headers: {
      "Cross-Origin-Embedder-Policy": "unsafe-none",
    },
  },
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:5000/",
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
