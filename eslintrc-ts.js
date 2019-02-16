const {
  GET_ESLINT_RULES,
  EXTENDS_ESLINT,
  PLUGINS_ESLINT
} = require('./eslintrc-common');

const CONFIG = {
  extends: EXTENDS_ESLINT,
  parser: 'pluggable-babel-eslint',
  parserOptions: {
    plugins: ['typescript'],
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: PLUGINS_ESLINT,
  rules: GET_ESLINT_RULES({
    typescript: true
  })
};

module.exports = CONFIG;
