module.exports = {
  extends: ['prettier', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    'react/no-unused-prop-types': 2,
    'react/sort-prop-types': 2,
    'react/prop-types': 2,
    'react/no-deprecated': 2,
    'react/no-access-state-in-setstate': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-typos': 2,
    'react/sort-comp': [
      2,
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
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
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
