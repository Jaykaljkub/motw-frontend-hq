import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/motw-frontend-hq/",
  plugins: [vue()],
  resolve: {
    alias: [
      
    ]
  },
})
