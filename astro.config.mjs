import { defineConfig } from 'astro/config';

// Served as a GitHub Pages project site under the account's custom domain.
export default defineConfig({
  site: 'https://www.theodoreoy.com',
  base: '/BLOG-Etude-Sky',
  devToolbar: { enabled: false },
});
