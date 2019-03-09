const fs = require('fs');
const prettier = require('prettier');
const prettierOptions = require('./../.prettierrc.js');
const CONFIGURATION = require('./../src/eslint');
const { PRESET_TYPES } = require('./../src/presets');

const presets = {
  defaultPreset: [PRESET_TYPES.JAVASCRIPT],
  reactJavascript: [PRESET_TYPES.JAVASCRIPT, PRESET_TYPES.REACT],
  reactTypescript: [PRESET_TYPES.TYPESCRIPT, PRESET_TYPES.REACT]
};

const MAKE_CONFIG_FILE = config =>
  prettier.format(
    `module.exports = ${JSON.stringify(config, null, 2)}`,
    prettierOptions
  );

fs.writeFile(
  './default-preset-eslint.js',
  MAKE_CONFIG_FILE(CONFIGURATION(presets.defaultPreset)),
  err => {
    console.log('error default', err);
  }
);

fs.writeFile(
  './javascript-react-eslint.js',
  MAKE_CONFIG_FILE(CONFIGURATION(presets.reactJavascript)),
  err => {
    console.log('error javascript-react', err);
  }
);

fs.writeFile(
  './typescript-react-eslint.js',
  MAKE_CONFIG_FILE(CONFIGURATION(presets.reactTypescript)),
  err => {
    console.log('error typescript-react', err);
  }
);
