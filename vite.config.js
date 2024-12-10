import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    optimizeDeps: {
      include: ['react-typing-effect']
  }
,  
    rollupOptions: {
      external: ["react-typing-effect"], // Mark as external
    },
  },
});
