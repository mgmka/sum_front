import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import vercel from '@astrojs/vercel/serverless';
import { inject } from '@vercel/analytics';
inject();

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: cloudflare(),
    //outDir: './dist'
    //output: 'server',
    //adapter: vercel(),
});
