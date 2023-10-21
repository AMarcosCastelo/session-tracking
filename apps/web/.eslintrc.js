const { getNextEslintConfig } = require('../../.eslint/eslint.next.config');

const test = {
  ...getNextEslintConfig({
    projectPath: __dirname,
  }),
};

module.exports = test;
