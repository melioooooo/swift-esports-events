import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration pour le déploiement sur GitHub Pages (site de projet)
export default defineConfig({
  plugins: [react()],
  base: '/swift-esports-events/',
});