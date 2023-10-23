/* eslint-disable import/no-commonjs */
const path = require('node:path');

function createBaseEslintConfig({ projectPath }) {
  return {
    extends: [path.join(__dirname, '../.eslintrc.js')],
    ignorePatterns: ['!**/*', 'src/generated/'],
    overrides: [
      {
        files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
        rules: {
          'import/no-extraneous-dependencies': [
            'error',
            { packageDir: `${process.cwd()}` },
          ],
        },
      },
      {
        files: ['*.ts', '*.tsx'],
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 2023,
          lib: ['es2022'],
          project: `${projectPath}/tsconfig.eslint.json`,
        },
      },
    ],
  };
}

module.exports = { createBaseEslintConfig };
