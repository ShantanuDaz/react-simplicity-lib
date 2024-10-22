import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { libInjectCss } from "vite-plugin-lib-inject-css";
export default defineConfig(({ mode }) => ({
  plugins: [react(), libInjectCss()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "react-simplicity-lib",
      fileName: (format) => `react-simplicity-lib.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
}));
