/* eslint-disable import/no-commonjs */
const { createBaseEslintConfig } = require('./eslint.config');

function getNextEslintConfig({ overrides = [], projectPath }) {
  const baseConfig = createBaseEslintConfig({ projectPath });

  return {
    ...baseConfig,
    extends: [
      ...baseConfig.extends,
      'next/core-web-vitals',
      'plugin:@nx/react-typescript',
      'next',
    ],
    ignorePatterns: [...baseConfig.ignorePatterns, '*.json'],
    overrides: [
      ...baseConfig.overrides,
      {
        files: ['next-env.d.ts'],
        rules: {
          'unicorn/prevent-abbreviations': 'off',
        },
      },
      {
        files: ['next.config.js'],
        rules: {
          'import/no-commonjs': 'off',
        },
      },
      ...overrides,
    ],
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
    },
  };
}

module.exports = {
  getNextEslintConfig,
};
