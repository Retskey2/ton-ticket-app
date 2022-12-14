import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import svgr from 'vite-plugin-svgr'
import pluginRewriteAll from 'vite-plugin-rewrite-all';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
    server: {
      port: 3000,
    },
  plugins: [
    svgr({ exportAsDefault: true}), react(), pluginRewriteAll()],
  resolve: {
    alias: {
      '@common': path.resolve(__dirname, './src/common'),
      '@providers': path.resolve(__dirname, './src/providers'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@utils/api': path.resolve(__dirname, './src/utils/api'),
      '@utils/firebase': path.resolve(__dirname, './src/utils/firebase'),
      '@utils/constants': path.resolve(__dirname, './src/utils/constants'),
      '@utils/helpers': path.resolve(__dirname, './src/utils/helpers'),
      '@utils/contexts': path.resolve(__dirname, './src/utils/contexts'),
      '@utils/hooks': path.resolve(__dirname, './src/utils/hooks'),
      '@features': path.resolve(__dirname, './src/features'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
  }
});
