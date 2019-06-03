const path = require('path')
const aliases = require('./webpack.config.alias')

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jest/recommended', // https://github.com/jest-community/eslint-plugin-jest
  ],
  env: {
    es6: true,
    browser: true,
  },
  plugins: [
    'no-loops',
    'react',
    'prefer-object-spread',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: { resolve: aliases },
      },
    },
  },
  globals: {},
  rules: {
    // react
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-find-dom-node': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/no-array-index-key': 'off',
    // one class per file, even if it"s stateless func
    'react/no-multi-comp': [2, { ignoreStateless: true }],
    'react/jsx-sort-props': 'error',
    // a11y
    'jsx-a11y/label-has-for': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    // code complexity
    'max-len': ['error', { code: 130 }],
    'max-lines': ['error', { max: 200 }],
    'func-names': ['error', 'never'],
    'max-depth': ['error', 4],
    'max-statements': ['error', 15],
    'max-nested-callbacks': ['error', 3],
    // code aesthetics & idioms
    semi: [2, 'never'],
    'no-unexpected-multiline': 'error', // guards against ASI edge cases so !semi is safe
    'no-loops/no-loops': 2,
    'spaced-comment': ['error', 'always', { exceptions: ['/**'] }],
    'no-named-as-default': 0,
    'import/first': ['error', 'never'],
    'import/extensions': ['error', 'never'],
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-return-assign': 'off',
    'class-methods-use-this': 'off',
    'function-paren-newline': 'off',
    'arrow-body-style': 'off',
    'no-param-reassign': 'off',
    'lines-between-class-members': ['error', 'never'],
  },
}
