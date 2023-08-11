import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte'
import preact from "@astrojs/preact";
import tailwind from '@astrojs/tailwind';
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [tailwind(), svelte(), preact()],
});
