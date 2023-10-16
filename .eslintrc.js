module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:github/recommended',
    'plugin:perfectionist/recommended-natural',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
  ],
  ignorePatterns: ['**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@nx/enforce-module-boundaries': [
          'error',
          {
            allow: [],
            depConstraints: [
              {
                onlyDependOnLibsWithTags: ['scope:shared'],
                sourceTag: 'scope:shared',
              },
              {
                onlyDependOnLibsWithTags: [
                  'type:lib',
                  'scope:shared',
                  'stack:web',
                ],
                sourceTag: 'app:web',
              },
              {
                notDependOnLibsWithTags: ['/^app:(^any)+$/'],
                onlyDependOnLibsWithTags: ['app:any'],
                sourceTag: 'app:any',
              },
              {
                onlyDependOnLibsWithTags: ['type:lib'],
                sourceTag: 'type:app',
              },
              {
                onlyDependOnLibsWithTags: ['type:lib'],
                sourceTag: 'type:lib',
              },
              {
                onlyDependOnLibsWithTags: ['stack:nest', 'stack:any'],
                sourceTag: 'stack:nest',
              },
              {
                onlyDependOnLibsWithTags: ['stack:web', 'stack:any'],
                sourceTag: 'stack:web',
              },
            ],
            enforceBuildableLibDependency: true,
          },
        ],
        'arrow-body-style': ['warn', 'as-needed'],
        'class-methods-use-this': 'off',
        curly: ['error', 'all'],
        'eslint-comments/disable-enable-pair': 'off',
        'eslint-comments/no-use': 'off',
        'i18n-text/no-en': 'off',
        'import/prefer-default-export': 'off',
        'no-console': 'warn',
        'no-void': 'off',
        'padding-line-between-statements': [
          'warn',
          { blankLine: 'always', next: 'block-like', prev: '*' },
          { blankLine: 'any', next: 'case', prev: 'case' },
          { blankLine: 'always', next: 'return', prev: '*' },
          {
            blankLine: 'always',
            next: '*',
            prev: ['const', 'let', 'var'],
          },
          {
            blankLine: 'any',
            next: ['const', 'let', 'var'],
            prev: ['const', 'let', 'var'],
          },
        ],
        'security/detect-non-literal-fs-filename': 'off',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // React comes first, followed by third-party dependencies
              ['^react', '^@?\\w'],
              // Side effect imports (ex: import '../some-module')
              ['^\\u0000'],
              // Aliased imports (ex: import { Type } from '~/types')
              ['^~/'],
              // Relative imports come last
            ],
          },
        ],
        'unicorn/no-null': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-top-level-await': 'off',
        'unicorn/prevent-abbreviations': [
          'error',
          {
            allowList: {
              Props: true,
              props: true,
            },
            replacements: {
              e: false,
              lib: false,
            },
          },
        ],
      },
    },
    {
      extends: [
        'airbnb-typescript/base',
        'plugin:@nx/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': 'allow-with-description',
          },
        ],
        '@typescript-eslint/strict-boolean-expressions': [
          'error',
          {
            allowNullableObject: true,
            allowNullableString: true,
          },
        ],
      },
    },
    {
      extends: ['plugin:@nx/javascript'],
      files: ['*.js', '*.jsx'],
      rules: {},
    },
    {
      files: ['jest.config.ts'],
      rules: {
        'import/no-relative-packages': 'off',
      },
    },
    {
      files: ['*.dtos.ts'],
      rules: {
        'max-classes-per-file': 'off',
      },
    },
    {
      env: {
        jest: true,
      },
      extends: [
        'plugin:jest-formatting/recommended',
        'plugin:jest/recommended',
      ],
      files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
      plugins: ['jest-formatting', 'jest-async'],
      rules: {
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/unbound-method': 'off',
        'global-require': 'off',
        'jest/expect-expect': [
          'error',
          { assertFunctionNames: ['expect', 'expectRequest'] },
        ],
        'jest-async/expect-return': 'error',
        'no-await-in-loop': 'off',
        'no-restricted-syntax': 'off',
        'security/detect-object-injection': 'off',
        'sonarjs/cognitive-complexity': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['**/__tests__/*.ts'],
      rules: {
        'max-classes-per-file': 'off',
      },
    },
    {
      extends: ['plugin:yml/standard', 'plugin:yml/prettier'],
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
    },
    {
      extends: ['plugin:jsonc/recommended-with-json', 'plugin:jsonc/prettier'],
      files: ['*.json'],
      parser: 'jsonc-eslint-parser',
    },
    {
      files: ['.mocharc.json'],
      rules: {
        'filenames/match-regex': 'off',
      },
    },
  ],
  plugins: ['@nx', 'github', 'perfectionist', 'promise', 'simple-import-sort'],
  root: true,
  rules: {
    'eol-last': ['error', 'always'],
    'filenames/match-regex': ['error', '^[a-z]+(-[a-z]+)*(.[a-z]+)+$'],
    'no-restricted-syntax': 'off',
  },
};
