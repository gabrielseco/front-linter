const prettierOptions = require('./../../.prettierrc.js');

const RULES = {
  OFF: 0,
  WARNING: 1,
  ERROR: 2
};

const COMMON_RULES = {
  'no-unused-vars': [
    RULES.ERROR,
    { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
  ],
  'no-var': RULES.ERROR,
  'no-console': RULES.WARNING,
  'no-debugger': RULES.ERROR
};

const REACT_RULES = {
  'react/jsx-no-undef': RULES.ERROR,
  'react/jsx-no-duplicate-props': [RULES.WARNING, { ignoreCase: true }],
  'react/no-access-state-in-setstate': RULES.ERROR,
  'react/no-deprecated': RULES.ERROR,
  'react/no-did-mount-set-state': RULES.ERROR,
  'react/no-typos': RULES.ERROR,
  'react/no-unused-prop-types': RULES.ERROR,
  'react/prop-types': RULES.ERROR,
  'react/sort-prop-types': RULES.ERROR,
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
  'react-hooks/rules-of-hooks': RULES.ERROR,
  'react-hooks/exhaustive-deps': RULES.WARNING
};

const GET_PRETTIER_OPTIONS = typescript => ({
  ...prettierOptions,
  parser: typescript ? 'typescript' : 'babel'
});

const GET_SETTINGS_REACT = ({ react }) => {
  if (react) {
    return {
      settings: {
        react: {
          pragma: 'React',
          version: 'detect'
        }
      }
    };
  }

  return undefined;
};

const GET_ESLINT_RULES = ({ javascript, typescript, react }) => {
  const commonRules = javascript || typescript ? COMMON_RULES : undefined;
  const reactRules = react ? REACT_RULES : undefined;
  return {
    ...commonRules,
    ...reactRules,
    'prettier/prettier': [RULES.ERROR, GET_PRETTIER_OPTIONS(typescript)]
  };
};

const GET_EXTENDS_ESLINT = ({ javascript, typescript, react }) => {
  const commonExtends = javascript || typescript ? ['prettier'] : [];
  const reactExtends = react
    ? ['plugin:react/recommended', 'plugin:jsx-a11y/recommended']
    : [];

  return [...commonExtends, ...reactExtends];
};

const GET_PLUGINS_ESLINT = ({ javascript, typescript, react }) => {
  const commonPlugins = javascript || typescript ? ['prettier'] : [];
  const reactPlugins = react ? ['react-hooks', 'jsx-a11y'] : [];

  return [...commonPlugins, ...reactPlugins];
};

module.exports = {
  GET_ESLINT_RULES,
  GET_EXTENDS_ESLINT,
  GET_PLUGINS_ESLINT,
  GET_SETTINGS_REACT
};
