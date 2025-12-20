// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

import tailwindcss from '@tailwindcss/vite';

// Custom Shiki theme matching main page colors
const runtaraLightTheme = {
  name: 'runtara-light',
  type: 'light',
  colors: {
    'editor.background': '#f8fafc',
    'editor.foreground': '#475569',
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#94a3b8' }
    },
    {
      scope: ['keyword', 'storage.type', 'storage.modifier'],
      settings: { foreground: '#0891b2' }
    },
    {
      scope: ['string', 'string.quoted'],
      settings: { foreground: '#7c3aed' }
    },
    {
      scope: ['constant.numeric', 'constant.language'],
      settings: { foreground: '#ea580c' }
    },
    {
      scope: ['entity.name.function', 'support.function', 'meta.function-call'],
      settings: { foreground: '#16a34a' }
    },
    {
      scope: ['entity.name.type', 'support.type', 'support.class'],
      settings: { foreground: '#ca8a04' }
    },
    {
      scope: ['meta.attribute', 'entity.name.tag.attribute', 'meta.annotation'],
      settings: { foreground: '#2563eb' }
    },
    {
      scope: ['variable', 'entity.name'],
      settings: { foreground: '#475569' }
    },
    {
      scope: ['punctuation'],
      settings: { foreground: '#64748b' }
    }
  ]
};

const runtaraDarkTheme = {
  name: 'runtara-dark',
  type: 'dark',
  colors: {
    'editor.background': '#111113',
    'editor.foreground': '#71717a',
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#3f3f46' }
    },
    {
      scope: ['keyword', 'storage.type', 'storage.modifier'],
      settings: { foreground: '#22d3ee' }
    },
    {
      scope: ['string', 'string.quoted'],
      settings: { foreground: '#a78bfa' }
    },
    {
      scope: ['constant.numeric', 'constant.language'],
      settings: { foreground: '#fb923c' }
    },
    {
      scope: ['entity.name.function', 'support.function', 'meta.function-call'],
      settings: { foreground: '#4ade80' }
    },
    {
      scope: ['entity.name.type', 'support.type', 'support.class'],
      settings: { foreground: '#fbbf24' }
    },
    {
      scope: ['meta.attribute', 'entity.name.tag.attribute', 'meta.annotation'],
      settings: { foreground: '#60a5fa' }
    },
    {
      scope: ['variable', 'entity.name'],
      settings: { foreground: '#71717a' }
    },
    {
      scope: ['punctuation'],
      settings: { foreground: '#52525b' }
    }
  ]
};

// https://astro.build/config
export default defineConfig({
  site: 'https://runtara.com',
  integrations: [sitemap(), pagefind()],
  build: {
    format: 'directory'
  },
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: {
      themes: {
        light: runtaraLightTheme,
        dark: runtaraDarkTheme
      },
      defaultColor: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});