#!/usr/bin/env node
/* eslint-disable no-console */
const { ESLint } = require('eslint');

const {
  getFilesToLint,
  getGitIgnoredFiles,
  isOptionSet,
  stageFilesIfRequired,
  checkFilesToLint
} = require('../src/helpers');
const {
  PRESET_TYPES,
  getPresetsFromCommandLine,
  getEslintFilePreset
} = require('../src/presets');

const { CI } = process.env;

const IGNORE_PATTERNS = ['lib', 'dist', 'public', 'node_modules'];
const DEFAULT_PATTERN = './';
const formatterName = CI ? 'stylish' : 'codeframe';

const presets = getPresetsFromCommandLine() || [PRESET_TYPES.DEFAULT];

const EXTENSIONS = ['ts', 'tsx', 'js', 'jsx'];

const config = getEslintFilePreset(presets);

const baseConfig = {
  ...config,
  ignorePatterns: IGNORE_PATTERNS.concat(getGitIgnoredFiles())
};

(async function main() {
  const files = await getFilesToLint(EXTENSIONS, DEFAULT_PATTERN);
  if (
    !checkFilesToLint({
      files,
      language: 'JavaScript',
      defaultPattern: DEFAULT_PATTERN
    })
  ) {
    return;
  }

  const fix = isOptionSet('fix');
  // check config passing to eslint
  const eslint = new ESLint({
    baseConfig,
    fix,
    extensions: EXTENSIONS,
    useEslintrc: false
  });

  const results = await eslint.lintFiles(files);

  if (fix) {
    await ESLint.outputFixes(results);
    // check stage files
    stageFilesIfRequired(EXTENSIONS);
  }

  // check formatter
  const formatter = await eslint.loadFormatter(formatterName);
  const errors = ESLint.getErrorResults(results);
  // check CI variable
  const resultsToShow = CI ? errors : results;
  const resultText = formatter.format(resultsToShow);

  console.log(resultText);

  if (errors.length > 0) {
    throw new Error('You must fix linting errores before continuing...');
  }
})().catch((error) => {
  process.exitCode = 1;
  console.error('[sui-lint]', error);
});
