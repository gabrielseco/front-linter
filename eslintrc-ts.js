const {
  COMMON_RULES,
  EXTENDS_ESLINT,
  PLUGINS_ESLINT
} = require('./eslintrc-common');

module.exports = {
  extends: EXTENDS_ESLINT,
  parser: 'pluggable-babel-eslint',
  plugins: PLUGINS_ESLINT,
  rules: COMMON_RULES
};
