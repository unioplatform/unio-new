import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: {
    resolve: true,
  },
  clean: true,
  sourcemap: true,
  splitting: false,
  target: "esnext",
  treeshake: true,

  external: [
    "react",
    "react-dom",
    "react-router-dom",
    "clsx",
    "@unio/ui",
    "@unio/lib"
  ]
});