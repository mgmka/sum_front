import { defineConfig } from 'astro/config';
//import cloudflare from '@astrojs/cloudflare';
import vercel from '@astrojs/vercel/serverless';
//import { inject } from '@vercel/analytics';
//inject();
import zeabur from '@zeabur/astro-adapter/serverless';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: zeabur()
  //adapter: cloudflare(),
  //outDir: './dist'
  //output: 'server',
  //adapter: vercel(),
  ,
  integrations: [tailwind()]
});