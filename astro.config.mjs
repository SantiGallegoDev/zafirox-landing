// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zafirox.com.co',
  output: 'static',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-CO' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
