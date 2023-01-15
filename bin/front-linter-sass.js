#!/usr/bin/env node
/* eslint-disable no-console */

const stylelint = require('stylelint');

const config = require('../.stylelintrc.js');
const {
  checkFilesToLint,
  getGitIgnoredFiles,
  getFilesToLint,
  isOptionSet
} = require('../src/helpers');

const EXTENSIONS = ['scss'];
const IGNORE_PATTERNS = ['**/node_modules/**', '**/lib/**', '**/dist/**'];
const DEFAULT_PATTERN = '**/*.scss';
const fix = isOptionSet('fix');

(async function main() {
  const files = await getFilesToLint(EXTENSIONS, DEFAULT_PATTERN);

  if (
    !checkFilesToLint({
      files,
      fix: fix,
      language: 'SCSS',
      defaultPattern: DEFAULT_PATTERN
    })
  ) {
    return;
  }

  return stylelint
    .lint({
      files,
      fix: fix,
      formatter: 'string',
      syntax: 'scss',
      config: {
        ...config,
        ignoreFiles: IGNORE_PATTERNS.concat(getGitIgnoredFiles())
      }
    })
    .then(({ output, errored }) => {
      console.log(output);

      if (errored) {
        throw new Error('You must fix linting errors before continuing...');
      }
    });
})().catch((error) => {
  process.exitCode = 1;
  console.error('[front-linter]', error);
});
