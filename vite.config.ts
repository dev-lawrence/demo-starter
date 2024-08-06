import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import PurgeCSS from 'vite-plugin-purgecss';

export default defineConfig({
  plugins: [
    react(),
    PurgeCSS({
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }) as unknown as Plugin,
  ],

  server: {
    port: 3000,
  },
});


