import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react-swc';
import { join } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['es', 'cjs'],
      name: 'ui',
    },
    rollupOptions: {
      external: ["'react'", "'react-dom'", "'react/jsx-runtime'"],
    },
  },

  cacheDir: '../../node_modules/.vite/ui',

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  plugins: [
    react(),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      skipDiagnostics: true,
      tsConfigFilePath: join(__dirname, 'tsconfig.lib.json'),
    }),
  ],

  test: {
    cache: { dir: '../../node_modules/.vitest' },
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
