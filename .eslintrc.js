const path = require('path');

const OFF = 'off';
const ERROR = 'error';
const WARNING = 'warn';
const NEVER = 'never';

const webpackConfigPath = path.resolve(__dirname, 'builder/webpack.config.ts');

module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:import/typescript',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'import',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: webpackConfigPath,
      },
    },
  },
  rules: {
    semi: OFF,
    'no-plusplus': OFF,
    'no-use-before-define': OFF,
    'max-len': [WARNING, {
      code: 120,
      tabWidth: 2,
    }],
    'import/no-extraneous-dependencies': OFF,
    'import/prefer-default-export': OFF,
    'import/extensions': [ERROR,
      'ignorePackages',
      {
        js: NEVER,
        ts: NEVER,
      },
    ],
    'import/order': [ERROR, {
      groups: [
        'builtin',
        'external',
        'parent',
        'sibling',
        'index',
        'internal',
        'object',
        'unknown',
        'type',
      ],
    }],
    // VUE
    'vue/component-name-in-template-casing': [
      ERROR,
      'PascalCase',
      { registeredComponentsOnly: false },
    ],
    // TS
    '@typescript-eslint/semi': ERROR,
    '@typescript-eslint/no-use-before-define': ERROR,
    '@typescript-eslint/consistent-type-imports': ERROR,
    '@typescript-eslint/member-delimiter-style': ERROR,
    '@typescript-eslint/type-annotation-spacing': [ERROR, {
      before: false,
      after: true,
      overrides: {
        arrow: { before: true, after: true },
      },
    }],
  },
  overrides: [
    // JS files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': OFF,
      },
    },
  ],
};
