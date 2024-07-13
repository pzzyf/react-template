import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getSrcPath } from './config/utils'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const srcPath = getSrcPath()
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': srcPath,
      },
    },
  }
})
