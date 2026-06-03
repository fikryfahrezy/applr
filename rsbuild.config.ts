import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  environments: {
    popup: {
      plugins: [pluginVue()],
      source: {
        entry: { index: "./src/index.ts" },
      },
    },
    background: {
      source: {
        entry: { background: "./src/background.ts" },
      },
      output: {
        target: "web-worker",
        filename: { js: "[name].js" },
        distPath: { js: "" },
      },
      // bundle all dependencies inline — service workers must be a single file
      performance: {
        chunkSplit: { strategy: "all-in-one" },
      },
      // no HTML needed for a service worker
      tools: {
        htmlPlugin: false,
      },
    },
  },
});
