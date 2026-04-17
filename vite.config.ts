import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

const pagesBase = '/cayleypy-web/'

export default defineConfig({
  base: pagesBase,
  plugins: [preact()],
})
