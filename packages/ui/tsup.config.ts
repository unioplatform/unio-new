import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true, // This should now pass because there is no version mismatch
  clean: true,
  sourcemap: true,
  splitting: false,
  target: "esnext",
  treeshake: true,
  external: [
    "react", 
    "react-dom", 
    "@unio/types"]
});