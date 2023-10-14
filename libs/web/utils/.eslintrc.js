const {
  createBaseEslintConfig,
} = require('../../../.eslint/base.eslint.config');

const baseConfig = createBaseEslintConfig({ projectPath: __dirname });

baseConfig.extends.push('plugin:@nx/react');

module.exports = {
  ...baseConfig,
  overrides: [{ files: ['*.tsx'] }],
  parserOptions: {
    project: [`${__dirname}/tsconfig.json`],
  },
};
