import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build:
    mode === "library"
      ? {
          lib: {
            entry: path.resolve(__dirname, "src/index.jsx"),
            name: "MyComponentLibrary",
            fileName: (format) => `my-component-library.${format}.js`,
          },
          rollupOptions: {
            external: ["react", "react-dom"],
            output: {
              globals: {
                react: "React",
                "react-dom": "ReactDOM",
              },
            },
            plugins: [peerDepsExternal(), terser()],
          },
        }
      : {
          outDir: "dist", // For the website build
        },
}));
