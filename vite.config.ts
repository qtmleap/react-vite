import { resolve } from 'node:path'
import devServer from '@hono/vite-dev-server'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { intlayerPlugin } from 'vite-intlayer'
import { VitePWA } from 'vite-plugin-pwa'
import removeConsole from 'vite-plugin-remove-console'
import { ViteSharedBuffer } from './src/lib/plugins/isolation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    devServer({
      entry: './api/index.ts',
      exclude: [/^(?!\/api)/]
    }),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      routesDirectory: resolve(__dirname, './src/app/routes'),
      generatedRouteTree: resolve(__dirname, './src/app/routeTree.gen.ts')
    }),
    react(),
    tailwindcss(),
    intlayerPlugin(),
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Vite + React',
        short_name: 'Vite + React',
        description: 'Vite + React',
        theme_color: '#f3f4f6',
        display: 'fullscreen',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: {
        enabled: true
      }
    }),
    ViteSharedBuffer(),
    removeConsole()
  ],
  worker: {
    format: 'es'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
