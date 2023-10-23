const { createBaseEslintConfig } = require('./eslint.config');

const createReactEslintConfig = ({ projectPath }) => {
  const baseConfig = createBaseEslintConfig({ projectPath });

  return {
    ...baseConfig,
    extends: [...baseConfig.extends, 'airbnb', 'airbnb-typescript'],
    parser: '@typescript-eslint/parser',
    ignorePatterns: [...baseConfig.ignorePatterns, '*.json'],
    parserOptions: {
      ...baseConfig.parserOptions,
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      ...baseConfig.rules,
      'react/react-in-jsx-scope': 'off',
    },
    plugins: ['react', '@typescript-eslint'],
  };
};

module.exports = {
  createReactEslintConfig,
};
