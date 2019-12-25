module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'import', '@typescript-eslint'],
  rules: {
    'no-unused-vars': [
      1,
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
    '@typescript-eslint/ban-ts-ignore': 1,
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
