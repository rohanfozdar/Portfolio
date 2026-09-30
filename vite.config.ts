import { defineConfig } from 'vite'

// User site (username.github.io): leave BASE_PATH unset.
// Project site (username.github.io/repo): BASE_PATH=/repo/
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  server: {
    host: '0.0.0.0',
    port: 43123,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 43123,
    strictPort: true,
  },
})
