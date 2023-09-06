module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['build', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react-refresh', 'simple-import-sort'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    'import/no-absolute-path': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
