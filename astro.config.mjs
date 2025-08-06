// @ts-check

import yaml from "@rollup/plugin-yaml"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://brasaberi-portfolio.vercel.app",
  vite: {
    plugins: [yaml()],
  },
})
