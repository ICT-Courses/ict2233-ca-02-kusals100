import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/ict2233-ca-02-kusals100/",
  plugins: [react(),
  tailwindcss(),],
})
