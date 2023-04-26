import {defineConfig } from 'vite'
import javascript from '@vitejs/plugin-javascript'

export default defineConfig({
   plugins: [javascript()],
   base: '/resume/'
})
