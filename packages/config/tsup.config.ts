import { defineConfig } from "tsup";

export default defineConfig({
  // If you add an index.ts later for app logic, tsup will bundle it
  entry: ["src/index.ts"],
  
  // Clean the dist folder before every build
  clean: true,
  
  // Output both ESM (modern) and CommonJS (compatibility)
  format: ["esm", "cjs"],
  
  // Generate the .d.ts files so other packages get autocomplete
  dts: true,
  
  // Source maps help you debug errors back to the original code
  sourcemap: true,
  
  // Since this is a config package, we want it to be as compatible as possible
  target: "esnext",
  
  // This ensures that json files are handled correctly if imported
  splitting: false,
  
  // Minify to keep the footprint small
  minify: true,
});