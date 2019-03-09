const ESLINT_FILES = {
  defaultPreset: require.resolve('./../default-preset-eslint.js'),
  reactJavascript: require.resolve('./../javascript-react-eslint.js'),
  reactTypescript: require.resolve('./../typescript-react-eslint.js')
};

const PRESET_TYPES = {
  JAVASCRIPT: 'javascript',
  TYPESCRIPT: 'typescript',
  REACT: 'react'
};

/**
 * Get Presets passed by the commandLine
 * @return {Array<String>} array of strings with the presets or undefined
 */
const getPresetsFromCommandLine = () => {
  const presetsArgument = process.argv.find(arg => arg.includes('--presets'));

  if (presetsArgument === undefined) {
    return;
  }

  return presetsArgument.split('=')[1].split(',');
};

/**
 * Get eslint file
 * @return an eslint file is returned
 */
const getEslintFilePreset = presets => {
  if (
    presets.includes(PRESET_TYPES.JAVASCRIPT) &&
    !presets.includes(PRESET_TYPES.TYPESCRIPT) &&
    !presets.includes(PRESET_TYPES.REACT)
  ) {
    return ESLINT_FILES.defaultPreset;
  }

  if (
    presets.includes(PRESET_TYPES.JAVASCRIPT) &&
    presets.includes(PRESET_TYPES.REACT) &&
    !presets.includes(PRESET_TYPES.TYPESCRIPT)
  ) {
    return ESLINT_FILES.reactJavascript;
  }

  if (
    presets.includes(PRESET_TYPES.TYPESCRIPT) &&
    !presets.includes(PRESET_TYPES.JAVASCRIPT) &&
    !presets.includes(PRESET_TYPES.REACT)
  ) {
    return ESLINT_FILES.defaultPreset;
  }

  if (
    presets.includes(PRESET_TYPES.TYPESCRIPT) &&
    presets.includes(PRESET_TYPES.REACT) &&
    !presets.includes(PRESET_TYPES.JAVASCRIPT)
  ) {
    return ESLINT_FILES.reactTypescript;
  }
};

/**
 * Get the type of file
 * @return a type of file is returned
 */
const getTypeOfFile = presets => {
  if (presets.includes(PRESET_TYPES.JAVASCRIPT)) {
    return PRESET_TYPES.JAVASCRIPT;
  }
  if (presets.includes(PRESET_TYPES.TYPESCRIPT)) {
    return PRESET_TYPES.TYPESCRIPT;
  }
};

module.exports = {
  PRESET_TYPES,
  getPresetsFromCommandLine,
  getEslintFilePreset,
  getTypeOfFile
};
