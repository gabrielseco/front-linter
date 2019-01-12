const prettierOptions = require('./.prettierrc.js');

const RULES = {
  OFF: 0,
  WARNING: 1,
  ERROR: 2
};

module.exports = {
  extends: ['plugin:react/recommended', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': [
      RULES.ERROR,
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    ],
    'react/no-unused-prop-types': RULES.ERROR,
    'react/sort-prop-types': RULES.ERROR,
    'react/prop-types': RULES.ERROR,
    'react/no-deprecated': RULES.ERROR,
    'react/no-access-state-in-setstate': RULES.ERROR,
    'react/no-did-mount-set-state': RULES.ERROR,
    'react/no-typos': RULES.ERROR,
    'react/sort-comp': [
      RULES.ERROR,
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'render'],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount'
          ]
        }
      }
    ],
    'prettier/prettier': [RULES.ERROR, prettierOptions]
  }
};
