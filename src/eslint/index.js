const {
  GET_ESLINT_RULES,
  GET_EXTENDS_ESLINT,
  GET_PLUGINS_ESLINT,
  GET_SETTINGS
} = require('./common');
const { PRESET_TYPES } = require('./../presets');

const TYPESCRIPT = 'typescript';

const AVAILABLE_PRESETS_OPTIONS = (presets) => ({
  defaultPreset: presets.includes(PRESET_TYPES.DEFAULT),
  reactPreset: presets.includes(PRESET_TYPES.REACT),
  typescriptPreset: presets.includes(TYPESCRIPT)
});

const getEslintEnv = () => ({
  browser: true,
  node: true,
  es6: true,
  jest: true
});

const getFilesOverrides = (presets) => {
  if (!presets.reactPreset) {
    return ['**/*.ts'];
  }
  return ['**/*.ts', '**/*.tsx'];
};

const getParserOptions = () => {
  return {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 2018,
      sourceType: 'module'
    }
  };
};

const CONFIG = (presets) => {
  const defaultConfig = {
    env: getEslintEnv(),
    extends: GET_EXTENDS_ESLINT(AVAILABLE_PRESETS_OPTIONS(presets)),
    parser: 'babel-eslint',
    plugins: GET_PLUGINS_ESLINT(AVAILABLE_PRESETS_OPTIONS(presets)),
    rules: GET_ESLINT_RULES(AVAILABLE_PRESETS_OPTIONS(presets)),
    ...GET_SETTINGS(AVAILABLE_PRESETS_OPTIONS(presets)),
    overrides: [
      {
        files: getFilesOverrides(AVAILABLE_PRESETS_OPTIONS(presets)),
        env: getEslintEnv(),
        extends: GET_EXTENDS_ESLINT(
          AVAILABLE_PRESETS_OPTIONS([...presets, TYPESCRIPT])
        ),
        plugins: GET_PLUGINS_ESLINT(
          AVAILABLE_PRESETS_OPTIONS([...presets, TYPESCRIPT])
        ),
        rules: GET_ESLINT_RULES(
          AVAILABLE_PRESETS_OPTIONS([...presets, TYPESCRIPT])
        ),
        ...GET_SETTINGS(AVAILABLE_PRESETS_OPTIONS([...presets, TYPESCRIPT])),
        ...getParserOptions()
      }
    ]
  };

  const typescriptConfig = {
    parser: '@typescript-eslint/parser',
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
