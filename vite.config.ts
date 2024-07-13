import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { getSrcPath } from './config/utils'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const srcPath = getSrcPath()
  return {
    plugins: [TanStackRouterVite(), viteReact()],
    resolve: {
      alias: {
        '@': srcPath,
      },
    },
  }
})
