import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteFonts from 'vite-plugin-fonts'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteFonts({
      google: {
        preconnect: true,
        families: [
          {
            name: "Mochiy Pop One",
            defer: true
          }
        ]
      }
    }),
  ],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  }
})
