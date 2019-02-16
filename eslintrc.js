const {
  GET_ESLINT_RULES,
  EXTENDS_ESLINT,
  PLUGINS_ESLINT
} = require('./eslintrc-common');

const CONFIG = {
  extends: EXTENDS_ESLINT,
  parser: 'babel-eslint',
  plugins: PLUGINS_ESLINT,
  rules: GET_ESLINT_RULES({
    typescript: false
  })
};

module.exports = CONFIG;
