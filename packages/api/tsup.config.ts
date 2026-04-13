import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: {
    // 🚀 This tells tsup to resolve types from your local workspace 
    // without checking the rootDir constraints of the current package.
    resolve: true,
  },
  clean: true,
  sourcemap: true,
  splitting: false,
  target: "esnext",

  // Keeps the bundle clean
  external: ["@unio/types"],

  treeshake: true,
});