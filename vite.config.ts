import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Default build = one self-contained offline HTML file.
  // `vite build --mode web` = a conventional, cacheable multi-file web build.
  const web = mode === "web";

  return {
    base: web ? "/" : "./",
    plugins: web ? [react(), tailwindcss()] : [react(), tailwindcss(), viteSingleFile()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    build: web
      ? {
          outDir: "dist-web",
          sourcemap: true,
          rollupOptions: {
            output: {
              manualChunks: {
                react: ["react", "react-dom"],
              },
            },
          },
        }
      : {
          outDir: "dist",
        },
  };
});
