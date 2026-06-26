import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";

const root = fileURLToPath(new URL(".", import.meta.url));

// Multi-page build: the homepage (/) and a Chennai page (/chennai).
// Each entry produces its own index.html so GitHub Pages can serve the
// path directly without any SPA fallback hack.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        chennai: resolve(root, "chennai/index.html")
      }
    }
  }
});
