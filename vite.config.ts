import preact from '@preact/preset-vite'
import { defineConfig } from 'vite'

const pagesBase = '/cayleypy-web/'

export default defineConfig({
  base: pagesBase,
  plugins: [preact()],
})
