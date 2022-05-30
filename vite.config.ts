import { defineConfig } from "vite";
import ruby from "vite-plugin-ruby";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    dedupe: ["axios"],
  },
  plugins: [ruby(), react()],
});
