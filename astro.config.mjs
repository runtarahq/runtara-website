// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://runtara.com',
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});