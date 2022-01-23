const ESLINT_FILES = {
  defaultPreset: require('./../eslint.js'),
  reactPreset: require('./../eslint-react.js')
};

const PRESET_TYPES = {
  DEFAULT: 'default',
  REACT: 'react'
};

/**
 * Get Presets passed by the commandLine
 * @return {Array<String>} array of strings with the presets or undefined
 */
const getPresetsFromCommandLine = () => {
  const presetsArgument = process.argv.find((arg) => arg.includes('--presets'));

  if (presetsArgument === undefined) {
    return;
  }

  if (presetsArgument.indexOf('=') !== -1) {
    return presetsArgument.split('=')[1].split(',');
  }

  throw new Error(
    `Pass me the presets arguments like front-linter js -- --presets=${PRESET_TYPES.REACT}`
  );
};

/**
 * Get eslint file
 * @return an eslint file is returned
 */
const getEslintFilePreset = (presets) => {
  if (presets && presets.includes(PRESET_TYPES.REACT)) {
    return ESLINT_FILES.reactPreset;
  }

  return ESLINT_FILES.defaultPreset;
};

/**
 * Get the type of file
 * @return a type of file is returned
 */
const getTypeOfFile = (presets) => {
  if (presets.includes(PRESET_TYPES.REACT)) {
    return PRESET_TYPES.REACT;
  }
  return PRESET_TYPES.DEFAULT;
};

module.exports = {
  PRESET_TYPES,
  getPresetsFromCommandLine,
  getEslintFilePreset,
  getTypeOfFile
};
