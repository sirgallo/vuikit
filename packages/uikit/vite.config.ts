import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'


export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      formats: ['es'],
      fileName: 'index',
      name: 'graceuikit',
    },
    rollupOptions: {
      external: [ 'lodash', 'pinia', 'vue', 'vue-router', '@vueuse/core' ],
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    }
  },
  plugins: [
    dts({ 
      copyDtsFiles: true,
      outDir: [ 'dist' ],
      compilerOptions: {
        declarationMap: true
      }
    }),
    vue()
  ]
})
