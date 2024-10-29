import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  // base: process.env.NODE_ENV === "production" ? "/" : "/",
  base: "/",
});

//"predeploy": "cross-env NODE_ENV=production npm run build",
