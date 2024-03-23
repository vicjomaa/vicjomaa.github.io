import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  rollupOptions: {
    external: ['three/examples/jsm/addons.js',
    'three/examples/jsm/loaders/RGBELoader.js',
    'three/examples/jsm/loaders/DRACOLoader.js']
  }
}
