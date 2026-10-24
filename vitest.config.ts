import { defineConfig } from "vitest/config";
const vitestConfig = defineConfig({
  test: {
    experimental: {
      viteModuleRunner: false,
    },
  },
});

export default vitestConfig;
