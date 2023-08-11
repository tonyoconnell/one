import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import preact from "@astrojs/preact";
import tailwind from '@astrojs/tailwind';
import cloudflare from "@astrojs/cloudflare";
import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [tailwind(), svelte(), preact()]
});