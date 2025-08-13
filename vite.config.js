import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,   // <-- key fix
      interval: 100,
    },
    host: true,
    hmr: {
      overlay: true,
    },
  },
})
