import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from 'path';
import { templateCompilerOptions } from '@tresjs/core';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/motw-frontend-hq/",
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['unauthwidget', 'homepageflair', 'acquisitionswidget', 'missionswidget', 'personelwidget', 'beastiarywidget', 'homewidget'].includes(tag),
        }
      }
    }), 
    svgLoader(
      {
        svgo: false
      }
    )
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },
})
