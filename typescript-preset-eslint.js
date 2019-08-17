module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: ['prettier', 'plugin:import/recommended'],
  parser: 'pluggable-babel-eslint',
  plugins: ['prettier', 'import'],
  rules: {
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    'no-undef': 2,
    'no-var': 2,
    'no-console': 1,
    'no-debugger': 2,
    'import/newline-after-import': 2,
    'import/order': [
      2,
      {
        'newlines-between': 'always',
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ]
      }
    ],
    'prettier/prettier': [
      2,
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        semi: true,
        useTabs: false,
        parser: 'typescript',
        jsxBracketSameLine: false,
        arrowParens: 'avoid',
        quoteProps: 'consistent'
      }
    ]
  },
  parserOptions: {
    plugins: ['typescript'],
    ecmaVersion: 2018,
    sourceType: 'module'
  }
};
