import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24,
    },
  }),
});
