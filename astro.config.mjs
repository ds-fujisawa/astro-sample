import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ds-fujisawa.github.io',
  base: '/astro-sample',
	integrations: [mdx(), sitemap()],
});
