import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // استيراد التايل ويند

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // إضافة التايل ويند هنا
  ],
})