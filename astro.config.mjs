import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});