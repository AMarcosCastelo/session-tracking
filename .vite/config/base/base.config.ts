/// <reference types="vitest" />
import path from 'path';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import type { UserConfig } from 'vite';
import type { InlineConfig } from 'vitest';

export interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export const getViteBaseConfig = (dirname: string): VitestConfigExport => {
  const relativePath = path.relative(process.cwd(), dirname);

  return {
    plugins: [
      viteTsConfigPaths({
        root: process.cwd(),
      }),
    ],

    test: {
      globals: true,
      reporters: ['default'],
      cache: {
        dir: `${process.cwd()}/node_modules/.vitest`,
      },
      coverage: {
        reporter: ['text', 'json', 'lcov'],
        reportsDirectory: `${process.cwd()}/coverage/${relativePath}`,
        '100': true,
      },
      environment: 'node',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
  };
};
