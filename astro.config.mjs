// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    site: 'https://hoya.tpgd.jp',

    vite: {
      resolve: {
          alias: {
              '@layouts': '/src/layouts',
              '@components': '/src/components',
              '@assets': '/src/assets',
          },
      },
  },

    adapter: cloudflare()
});