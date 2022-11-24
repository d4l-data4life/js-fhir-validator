import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const BASE_URL = process.env.BASE_URL || "";

export default defineConfig({
  plugins: [vue()],
  base: `${BASE_URL}/`,
});
