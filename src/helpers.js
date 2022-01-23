/* eslint-disable no-console */
const { existsSync, readFileSync } = require('fs');
const { promisify } = require('util');
const { extname } = require('path');

const exec = promisify(require('child_process').exec);
const { getSpawnPromise } = require('./cli');

const GIT_IGNORE_PATH = `${process.cwd()}/.gitignore`;
const OPTIONS = {
  staged: '--staged',
  addFixes: '--add-fixes',
  pattern: '--pattern'
};

/**
 * Get lines of a text file as an array of strings
 * @param {String} path
 * @returns {Array<String>}
 */
const getFileLinesAsArray = (path) =>
  existsSync(path)
    ? readFileSync(path, 'utf8').split('\n').filter(Boolean)
    : [];

/**
 * Get as array .gitignore files and filter lines that are comments
 * @returns {Array<String>}
 */
const getGitIgnoredFiles = () =>
  getFileLinesAsArray(GIT_IGNORE_PATH).filter((line) => !line.startsWith('#'));

/**
 * Get files to lint according to command options
 * @param {string[]} extensions Extensions list: ['js', 'sass', 'css']
 * @param {string} defaultFiles Pattern with the files in case no other options are set
 * @returns {Promise<string[]>} Array of file patterns
 */
const getFilesToLint = async (extensions, defaultFiles) => {
  const staged = process.argv.includes(OPTIONS.staged);
  const getFromDiff = staged;

  return getFromDiff ? getGitDiffFiles({ extensions, staged }) : [defaultFiles];
};

/**
 * If --staged option is on, it will staged made changes
 * @param {Array<String>} extensions Extensions list: ['js', 'sass', 'css']
 * @returns {Promise}
 */
const stageFilesIfRequired = async (extensions) => {
  const { argv } = process;
  const staged = argv.includes(OPTIONS.staged);
  const addFixes = argv.includes(OPTIONS.addFixes);

  if (staged && addFixes) {
    const files = await getGitDiffFiles({ extensions, staged });
    return getSpawnPromise('git', ['add', ...files]);
  }
};

/**
 * Get from git status name of staged files
 * @param {object} params
 * @param {string[]} params.extensions Extensions list. Example: ['js', 'sass', 'css']
 * @param {string=} params.range Range of commits to lint
 * @param {boolean} params.staged If true, it will get staged files
 * @returns {Promise<string[]>} Array of file paths
 */
const getGitDiffFiles = async ({ extensions, staged = true }) => {
  const command = ['git diff --name-only --diff-filter=d', staged && '--cached']
    .filter(Boolean)
    .join(' ');

  return exec(command).then(({ stdout: summary = '' }) =>
    getFilesFromDiff({ summary, extensions })
  );
};

/**
 * Filter files from git diff status stdout
 * @param {object} params
 * @param {string[]} params.extensions Extensions list. Example: ['js', 'sass', 'css']
 * @param {string} params.summary stdout from git diff
 * @returns {string[]} Array of file paths
 */
const getFilesFromDiff = ({ extensions, summary }) =>
  summary
    .split('\n')
    .filter((file) => extensions.includes(extname(file).substring(1)));

/**
 * Get if current process has option set
 * @param {String} option
 */
const isOptionSet = (option) => process.argv.includes(`--${option}`);

/**
 * Check if there're files to lint and output a message
 * @param {Object}                params
 * @param {String[]}              params.files Files to lint
 * @param {"JavaScript" | "SCSS"} params.language Language to lint
 * @param {String}                params.defaultPattern Default pattern to lint
 * @returns {boolean} If there's files to lint
 */
const checkFilesToLint = ({ files, language, defaultPattern }) => {
  if (!files.length) {
    console.log(`[front-linter] No ${language} files to lint`);
    return false;
  }

  if (files.length === 1 && files[0] === defaultPattern) {
    console.log(`[front-linter] Linting all ${language} files...`);
    return true;
  }

  console.log(`[front-linter] Linting ${files.length} ${language} files...`);
  return true;
};

exports.getFileLinesAsArray = getFileLinesAsArray;
exports.getFilesToLint = getFilesToLint;
exports.getGitIgnoredFiles = getGitIgnoredFiles;
exports.stageFilesIfRequired = stageFilesIfRequired;
exports.isOptionSet = isOptionSet;
exports.checkFilesToLint = checkFilesToLint;
exports.GIT_IGNORE_PATH = GIT_IGNORE_PATH;
