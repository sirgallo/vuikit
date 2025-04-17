import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'


export default defineConfig({
  base: './',
  build: {
    outDir: 'showcase-dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  plugins: [
    vue(),
    VueDevTools(),
  ],
})
