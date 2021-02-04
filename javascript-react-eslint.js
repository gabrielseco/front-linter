module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    'prettier',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  parser: 'babel-eslint',
  plugins: ['prettier', 'import', 'react-hooks', 'jsx-a11y', 'react-perf'],
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
    'no-const-assign': 2,
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
    'import/no-default-export': 'error',
    'react/jsx-no-undef': 2,
    'react/jsx-no-duplicate-props': [
      1,
      {
        ignoreCase: true
      }
    ],
    'react/react-in-jsx-scope': 0,
    'react/no-access-state-in-setstate': 2,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-typos': 2,
    'react/no-unused-prop-types': 2,
    'react/prop-types': 2,
    'react/sort-prop-types': 2,
    'react/jsx-fragments': ['error', 'element'],
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
    'react-hooks/exhaustive-deps': 1,
    'react-perf/jsx-no-new-object-as-prop': 1,
    'react-perf/jsx-no-new-array-as-prop': 1,
    'react-perf/jsx-no-new-function-as-prop': 1,
    'react-perf/jsx-no-jsx-as-prop': 1,
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
        arrowParens: 'always',
        quoteProps: 'consistent'
      }
    ]
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
};
