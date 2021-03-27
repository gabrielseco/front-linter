const prettierOptions = require('./../../.prettierrc.js');

const RULES = {
  OFF: 0,
  WARNING: 1,
  ERROR: 2
};

const COMMON_RULES = {
  'no-unused-vars': [
    RULES.WARNING,
    { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
  ],
  'no-undef': RULES.ERROR,
  'no-var': RULES.ERROR,
  'no-console': RULES.WARNING,
  'no-debugger': RULES.ERROR,
  'no-const-assign': RULES.ERROR,
  'import/newline-after-import': RULES.ERROR,
  'import/order': [
    RULES.ERROR,
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
  'import/no-default-export': 'error'
};

const REACT_RULES = {
  'react/jsx-no-undef': RULES.ERROR,
  'react/jsx-no-duplicate-props': [RULES.WARNING, { ignoreCase: true }],
  'react/react-in-jsx-scope': RULES.OFF,
  'react/no-access-state-in-setstate': RULES.ERROR,
  'react/no-deprecated': RULES.ERROR,
  'react/no-did-mount-set-state': RULES.ERROR,
  'react/no-typos': RULES.ERROR,
  'react/no-unused-prop-types': RULES.ERROR,
  'react/prop-types': RULES.ERROR,
  'react/sort-prop-types': RULES.ERROR,
  'react/jsx-fragments': ['error', 'element'],
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
  'react-hooks/exhaustive-deps': RULES.WARNING,
  'react-perf/jsx-no-new-object-as-prop': RULES.WARNING,
  'react-perf/jsx-no-new-array-as-prop': RULES.WARNING,
  'react-perf/jsx-no-new-function-as-prop': RULES.WARNING,
  'react-perf/jsx-no-jsx-as-prop': RULES.WARNING
};

const TYPESCRIPT_RULES = {
  'no-undef': RULES.OFF,
  'no-unused-vars': RULES.OFF,
  '@typescript-eslint/no-unused-vars': [RULES.WARNING]
};

const GET_PRETTIER_OPTIONS = (typescript) => ({
  ...prettierOptions,
  parser: typescript ? 'typescript' : 'babel'
});

const GET_SETTINGS = ({ reactPreset, typescriptPreset }) => {
  let settings = {
    settings: {}
  };

  if (reactPreset) {
    settings = {
      ...settings,
      settings: {
        ...settings.settings,
        react: {
          pragma: 'React',
          version: 'detect'
        }
      }
    };
  }

  if (typescriptPreset) {
    settings = {
      ...settings,
      settings: {
        ...settings.settings,
        'import/resolver': {
          typescript: {}
        }
      }
    };
  }

  return settings;
};

const GET_ESLINT_RULES = ({ reactPreset, typescriptPreset }) => {
  const commonRules = COMMON_RULES;
  const reactRules = reactPreset ? REACT_RULES : undefined;
  const typescriptRules = typescriptPreset ? TYPESCRIPT_RULES : undefined;

  return {
    ...commonRules,
    ...reactRules,
    ...typescriptRules,
    'prettier/prettier': [RULES.ERROR, GET_PRETTIER_OPTIONS(typescriptPreset)]
  };
};

const getCommonExtends = () => {
  const commonExtends = ['prettier'];
  return commonExtends;
};

const GET_EXTENDS_ESLINT = ({ reactPreset, typescriptPreset }) => {
  const commonExtends = getCommonExtends();
  const reactExtends = reactPreset
    ? ['plugin:react/recommended', 'plugin:jsx-a11y/recommended']
    : ['plugin:import/recommended'];

  const typescriptExtends = typescriptPreset
    ? ['plugin:@typescript-eslint/recommended']
    : [];

  return [...commonExtends, ...reactExtends, ...typescriptExtends];
};

const getCommonPlugins = () => {
  const commonPlugins = ['prettier', 'import'];

  return commonPlugins;
};

const GET_PLUGINS_ESLINT = ({ reactPreset, typescriptPreset }) => {
  const commonPlugins = getCommonPlugins();
  const reactPlugins = reactPreset
    ? ['react-hooks', 'jsx-a11y', 'react-perf']
    : [];

  const typescriptPlugins = typescriptPreset ? ['@typescript-eslint'] : [];

  return [...commonPlugins, ...reactPlugins, ...typescriptPlugins];
};

module.exports = {
  GET_ESLINT_RULES,
  GET_EXTENDS_ESLINT,
  GET_PLUGINS_ESLINT,
  GET_SETTINGS
};
