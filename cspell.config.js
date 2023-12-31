/* eslint-disable import/no-commonjs */
const vsCodeSettings = require('./.vscode/settings.json');

module.exports = {
  $schema:
    'https://raw.githubusercontent.com/streetsidesoftware/cspell/main/cspell.schema.json',
  allowCompoundWords: true,
  caseSensitive: true,
  dictionaries: [
    'airbnb',
    'companies',
    'cpp',
    'en_us',
    'en-gb',
    'fonts',
    'fullstack',
    'html',
    'lcov',
    'lorem-ipsum',
    'mocharc',
    'node',
    'npm',
    'Pomodoros',
    'svgr',
    'Swimm',
    'typescript',
  ],
  ignorePaths: [
    'dist',
    '.swm',
    'node_modules',
    'local',
    'nx.json',
    'package.json',
    'pnpm-lock.yaml',
    'tmp',
    '.vscode',
    '.gitignore',
    'cspell.config.js',
    '*.tfstate*',
    '.env-files',
    'apps/infra/terraform-cloud/src/aws-iam',
  ],
  language: 'en',
  useGitignore: true,
  version: '0.2',
  words: vsCodeSettings['cSpell.words'],
};
