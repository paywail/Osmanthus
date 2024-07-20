import { defineConfig } from 'tsup'


export default defineConfig((options) => ({
  minify: false,
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ["esm"],
  external: ["react", "@craftjs/core"],
  dts: true,
}))