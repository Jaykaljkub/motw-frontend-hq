import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/motw-frontend-hq/",
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['unauthwidget', 'homepageflair', 'acquisitionswidget', 'missionswidget', 'personelwidget', 'beastiarywidget'].includes(tag),
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
