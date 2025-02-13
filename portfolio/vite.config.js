import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/OmarOukhtite/', // Remplacez "mon-portfolio" par le nom de votre dépôt GitHub
});
