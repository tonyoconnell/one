import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import preact from "@astrojs/preact";
import tailwind from '@astrojs/tailwind';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    experimental: {
   assets: true
  },
  output: "hybrid",
  adapter: cloudflare(),
  integrations: [tailwind(), svelte(), preact()]
});
