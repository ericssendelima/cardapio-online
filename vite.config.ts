import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // gera `.vite/manifest.json` no diretório de saída
    manifest: true,
    rollupOptions: {
      // sobrescreve a entrada de `.html` padrão
      input: '/path/to/main.js',
    },
  },
  server: {
    host: '0.0.0.0', // Permite acesso de qualquer IP
    port: 5173,       // Ou qualquer porta que você esteja usando
  },
})
