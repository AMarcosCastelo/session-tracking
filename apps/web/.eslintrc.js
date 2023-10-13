module.exports = {
  extends: [
    'plugin:@nx/react-typescript',
    'next',
    'next/core-web-vitals',
    '../../.eslintrc.js',
  ],
  ignorePatterns: ['**/*', '.next/**/*'],
  overrides: [
    {
      files: ['*.*'],
      rules: {
        '@next/next/no-html-link-for-pages': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@next/next/no-html-link-for-pages': ['error', 'apps/web/pages'],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {},
    },
    {
      env: {
        jest: true,
      },
      files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
    },
  ],
};
