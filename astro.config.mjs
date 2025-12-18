// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://runtara.com',
  integrations: [sitemap(), pagefind()],
  build: {
    format: 'directory'
  },
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()]
  }
});