import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Enable server-side rendering and API routes
  integrations: [
    tailwind({
      applyBaseStyles: true, // Enable Tailwind base styles
    }),
  ],
});

