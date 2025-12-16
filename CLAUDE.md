# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Runtara website built with Astro 5 and Tailwind CSS v4.

## Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally

## Tech Stack

- **Framework**: Astro 5 (static site generator)
- **Styling**: Tailwind CSS v4 (via Vite plugin)
- **TypeScript**: Strict mode enabled
- **Integrations**: @astrojs/sitemap for SEO

## Architecture

- `src/pages/` - File-based routing (.astro or .md files become routes)
- `src/styles/global.css` - Global styles with Tailwind import
- `public/` - Static assets served at root (favicon, etc.)
- `astro.config.mjs` - Astro configuration with Tailwind Vite plugin
