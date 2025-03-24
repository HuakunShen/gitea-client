import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/hey-api-client/index.ts", "src/hey-api-client/client.gen.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["esm", "cjs"],
  outDir: "dist",
});
