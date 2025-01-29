// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: "https://FernandoArriaga87.github.io/astromipag.github.io",
  base: "/astromipag.github.io",
  integrations: [tailwind()]
});