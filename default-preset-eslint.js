module.exports = {
  extends: ['prettier'],
  parser: 'babel-eslint',
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
        parser: 'babel',
        jsxBracketSameLine: false,
        arrowParens: 'avoid'
      }
    ]
  }
};
