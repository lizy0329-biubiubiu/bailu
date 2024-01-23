import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
