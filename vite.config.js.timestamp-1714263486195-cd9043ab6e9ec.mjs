// vite.config.js
import { defineConfig } from "file:///D:/ThesisProjekt/Tools/osc-hydra/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///D:/ThesisProjekt/Tools/osc-hydra/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
var vite_config_default = defineConfig({
  server: {
    https: {
      key: "./osc-hydra-private.key",
      cert: "./osc-hydra.crt"
    }
  },
  plugins: [svelte()],
  build: {
    outDir: "./docs"
    // relative to index.html
    // emptyOutDir: true, // true if outDir is inside root. if outDir is not inside root, uncomment this.
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxUaGVzaXNQcm9qZWt0XFxcXFRvb2xzXFxcXG9zYy1oeWRyYVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcVGhlc2lzUHJvamVrdFxcXFxUb29sc1xcXFxvc2MtaHlkcmFcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1RoZXNpc1Byb2pla3QvVG9vbHMvb3NjLWh5ZHJhL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IHN2ZWx0ZSB9IGZyb20gJ0BzdmVsdGVqcy92aXRlLXBsdWdpbi1zdmVsdGUnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBzZXJ2ZXI6e1xuICAgIGh0dHBzOntcbiAgICAgIGtleTogJy4vb3NjLWh5ZHJhLXByaXZhdGUua2V5JyxcbiAgICAgIGNlcnQ6ICcuL29zYy1oeWRyYS5jcnQnXG4gICAgXG4gICAgfVxuICB9LFxuICBwbHVnaW5zOiBbc3ZlbHRlKCldLFxuICBidWlsZDoge1xuICAgIG91dERpcjogJy4vZG9jcycsIC8vIHJlbGF0aXZlIHRvIGluZGV4Lmh0bWxcbiAgICAvLyBlbXB0eU91dERpcjogdHJ1ZSwgLy8gdHJ1ZSBpZiBvdXREaXIgaXMgaW5zaWRlIHJvb3QuIGlmIG91dERpciBpcyBub3QgaW5zaWRlIHJvb3QsIHVuY29tbWVudCB0aGlzLlxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUixTQUFTLG9CQUFvQjtBQUN2VCxTQUFTLGNBQWM7QUFHdkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBTztBQUFBLElBQ0wsT0FBTTtBQUFBLE1BQ0osS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLElBRVI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsT0FBTyxDQUFDO0FBQUEsRUFDbEIsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBO0FBQUE7QUFBQSxFQUVWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
