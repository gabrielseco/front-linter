#!/usr/bin/env node
/* eslint-disable no-console */
const {
  executeLintingCommand,
  getGitIgnoredFiles,
  getFilesToLint
} = require('../src/helpers');
const BIN_PATH = require.resolve('stylelint/bin/stylelint');
const CONFIG_PATH = require.resolve('../.stylelintrc');
const EXTENSIONS = ['scss'];
const IGNORE_PATTERNS = ['**/node_modules/**', '**/lib/**', '**/dist/**'];

const patterns = IGNORE_PATTERNS.concat(getGitIgnoredFiles());

getFilesToLint(EXTENSIONS, '**/*.scss').then(
  files =>
    (files.length &&
      executeLintingCommand(BIN_PATH, [
        '--config',
        CONFIG_PATH,
        '--ip',
        `'${patterns.join(', ')}'`,
        `'${files.join(', ')}'`
      ])) ||
    console.log('[front-linter sass] No sass files to lint.')
);
