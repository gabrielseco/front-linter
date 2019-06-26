const {
  GET_ESLINT_RULES,
  GET_EXTENDS_ESLINT,
  GET_PLUGINS_ESLINT,
  GET_SETTINGS_REACT
} = require('./common');

const { PRESET_TYPES } = require('./../presets');

const AVAILABLE_PRESETS_OPTIONS = presets => ({
  javascript: presets.includes(PRESET_TYPES.JAVASCRIPT),
  react: presets.includes(PRESET_TYPES.REACT),
  typescript: presets.includes(PRESET_TYPES.TYPESCRIPT)
});

const CONFIG = presets => {
  const defaultConfig = {
    env: {
      browser: true,
      node: true,
      es6: true,
      jest: true
    },
    extends: GET_EXTENDS_ESLINT(AVAILABLE_PRESETS_OPTIONS(presets)),
    parser: 'babel-eslint',
    plugins: GET_PLUGINS_ESLINT(AVAILABLE_PRESETS_OPTIONS(presets)),
    rules: GET_ESLINT_RULES(AVAILABLE_PRESETS_OPTIONS(presets)),
    ...GET_SETTINGS_REACT(AVAILABLE_PRESETS_OPTIONS(presets))
  };

  const typescriptConfig = {
    parser: 'pluggable-babel-eslint',
    parserOptions: {
      plugins: ['typescript'],
      ecmaVersion: 2018,
      sourceType: 'module'
    }
  };

  const addTypescriptConfig = presets.includes(PRESET_TYPES.TYPESCRIPT)
    ? typescriptConfig
    : undefined;

  return {
    ...defaultConfig,
    ...addTypescriptConfig
  };
};

module.exports = CONFIG;
