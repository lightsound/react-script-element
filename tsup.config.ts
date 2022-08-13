import { defineConfig } from "tsup";

export default defineConfig((options) => {
  const isDev = options.env?.NODE_ENV === "development";

  return {
    entry: ["src"],
    format: ["iife"],
    watch: isDev,
    sourcemap: isDev,
    clean: !isDev,
    treeshake: !isDev,
    minify: !isDev,
  };
});
