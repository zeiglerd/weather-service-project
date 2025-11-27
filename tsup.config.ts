import { defineConfig } from "tsup";

export default defineConfig((options) => {
  if (options.watch) {
    options.onSuccess = "tsx watch src/index.ts";
    options.watch = ["openapi", "src"];
  }

  return {
    entry: ["src/**/*.ts"],
    format: ["esm"],
    dts: false,
    splitting: false,
    sourcemap: true,
    clean: true,
    outDir: "dist",
    bundle: false,
    target: "node24",
    platform: "node",
    shims: true,
  };
});
