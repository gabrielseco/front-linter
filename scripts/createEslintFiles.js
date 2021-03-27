const fs = require('fs');

const prettier = require('prettier');

const prettierOptions = require('./../.prettierrc.js');
const CONFIGURATION = require('./../src/eslint');
const { PRESET_TYPES } = require('./../src/presets');

const presets = {
  defaultPreset: [PRESET_TYPES.DEFAULT],
  reactPreset: [PRESET_TYPES.REACT]
};

const MAKE_CONFIG_FILE = (config) =>
  prettier.format(
    `module.exports = ${JSON.stringify(config, null, 2)}`,
    prettierOptions
  );

fs.writeFile(
  './eslint.js',
  MAKE_CONFIG_FILE(CONFIGURATION(presets.defaultPreset)),
  (err) => {
    console.log('error default', err);
  }
);

fs.writeFile(
  './eslint-react.js',
  MAKE_CONFIG_FILE(CONFIGURATION(presets.reactPreset)),
  (err) => {
    console.log('error react default', err);
  }
);
