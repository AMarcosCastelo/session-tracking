const { createBaseEslintConfig } = require('../../../.eslint/eslint.config');

const baseConfig = createBaseEslintConfig({ projectPath: __dirname });

// baseConfig.extends.push('plugin:@nx/react');

module.exports = {
  ...baseConfig,
  overrides: [{ files: ['*.tsx'] }],
};
