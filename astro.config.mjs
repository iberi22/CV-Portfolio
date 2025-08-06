// @ts-check

import yaml from "@rollup/plugin-yaml"
import { defineConfig } from "astro/config"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://astro.build/config
export default defineConfig({
  site: "https://brasaberi-portfolio.vercel.app",
  vite: {
    plugins: [yaml()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
})
