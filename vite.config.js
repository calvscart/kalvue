import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import md from 'vite-plugin-md-vue'

export default defineConfig({
  plugins: [
    vue({ include: [/\\.vue$/, /\\.md$/] }),
    md()
  ]
})