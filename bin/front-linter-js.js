#!/usr/bin/env node
/* eslint-disable no-console */
const {
  executeLintingCommand,
  getArrayArgs,
  getFilesToLint,
  getGitIgnoredFiles,
  isOptionSet,
  stageFilesIfRequired
} = require('../src/helpers');

const {
  PRESET_TYPES,
  getPresetsFromCommandLine,
  getEslintFilePreset,
  getTypeOfFile
} = require('../src/presets');

const BIN_PATH = require.resolve('eslint/bin/eslint');
const EXTENSIONS = ['js', 'jsx'];
const IGNORE_PATTERNS = ['lib', 'dist', 'public', 'node_modules'];

const patterns = IGNORE_PATTERNS.concat(getGitIgnoredFiles());

const presets = getPresetsFromCommandLine() || [PRESET_TYPES.JAVASCRIPT];

getFilesToLint(EXTENSIONS).then(
  files =>
    (files.length &&
      executeLintingCommand(BIN_PATH, [
        `-c ${getEslintFilePreset(presets)}`,
        ...getArrayArgs('--ext', EXTENSIONS),
        ...getArrayArgs('--ignore-pattern', patterns),
        ...files
      ]).then(
        () => isOptionSet('--fix') && stageFilesIfRequired(EXTENSIONS)
      )) ||
    console.log(`[front-linter js] No ${getTypeOfFile(presets)} files to lint.`)
);
