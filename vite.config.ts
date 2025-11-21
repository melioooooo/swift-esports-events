import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration pour le déploiement sur GitHub Pages
// base: './' assure que les chemins sont relatifs, ce qui évite les erreurs 404
export default defineConfig({
  plugins: [react()],
  base: './',
});