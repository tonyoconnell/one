
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import preact from "@astrojs/preact";
import tailwind from '@astrojs/tailwind';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
const __unconfig_default =  defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [tailwind(), svelte(), preact()]
});

if (typeof __unconfig_default === "function") __unconfig_default(...[]);export default __unconfig_data;