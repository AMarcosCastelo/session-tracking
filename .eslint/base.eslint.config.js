const path = require('path');

function createBaseEslintConfig() {
  return {
    extends: [path.join(__dirname, '../.eslintrc.js')],
    ignorePatterns: ['**/*', 'src/generated/'],
  };
}

module.exports = { createBaseEslintConfig };
