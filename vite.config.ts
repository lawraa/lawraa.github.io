import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  // Routing is hash-based, so no SPA fallback: a missing asset should 404, not return index.html.
  appType: 'mpa',
  plugins: [react(), tailwindcss()],
})
