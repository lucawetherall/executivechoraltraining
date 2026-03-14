import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lucawetherall.github.io',
  base: '/executivechoraltraining',
  integrations: [sitemap()],
  output: 'static',
});
