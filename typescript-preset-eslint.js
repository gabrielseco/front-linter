module.exports = {
  extends: ['prettier'],
  parser: 'pluggable-babel-eslint',
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    'no-var': 2,
    'no-console': 1,
    'no-debugger': 2,
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
