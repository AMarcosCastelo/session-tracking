/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { readFileSync } from 'node:fs';
import path, { join } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import {
  getViteBaseConfig,
  type VitestConfigExport,
} from '../base/base.config';

export const baseWebViteConfig = (dirname: string, isLib?: boolean) => {
  const { name } = JSON.parse(
    readFileSync(path.join(dirname, 'project.json'), 'utf8'),
  );
  const baseConfig = getViteBaseConfig(dirname);

  return defineConfig({
    plugins: [
      ...(baseConfig.plugins ?? []),
      isLib
        ? dts({
            tsConfigFilePath: join(dirname, 'tsconfig.lib.json'),
          })
        : null,
      react(),
    ],

    build: {
      lib: {
        entry: 'src/index.ts',
        name,
        fileName: 'index',
        formats: ['es'],
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'react/jsx-runtime'],
      },
    },

    test: {
      ...baseConfig.test,
      environment: 'jsdom',
      setupFiles: './jest.setup.ts',
    },

    define: {
      'process.env': JSON.stringify('development'),
    },
  } as VitestConfigExport);
};
