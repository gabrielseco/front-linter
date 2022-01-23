/* eslint no-console:0 */
const { spawn } = require('child_process');
const path = require('path');

const CODE_OK = 0;
const log = console.log;

const isWin = process.platform === 'win32';

/**
 * Spawn given command and return a promise of the exit code value
 * @param  {String} bin     Binary path or alias
 * @param  {Array} args    Array of args, like ['npm', ['run', 'test']]
 * @param  {Object} options Options to pass to child_process.spawn call
 * @return {Promise<Number>} Process exit code
 */
function getSpawnPromise(bin, args, options = {}) {
  return new Promise(function (resolve, reject) {
    if (options.stdio !== 'ignore') {
      log('');
      log(getCommandCallMessage(bin, args, options));
    }
    getSpawnProcess(bin, args, options).on('exit', (code) => {
      code === CODE_OK ? resolve(code) : reject(code);
    });
  });
}

/**
 * Spawn given command and return a promise of the exit code value
 * @param  {String} bin     Binary path or alias
 * @param  {Array} args    Array of args, like ['npm', ['run', 'test']]
 * @param  {Object} [options={shell: true, stdio: 'inherit'}] Options to pass to child_process.spawn call
 * @return {ChildProcess}
 */
function getSpawnProcess(bin, args, options = {}) {
  options = Object.assign(
    { shell: true, stdio: 'inherit', cwd: process.cwd() },
    options
  );
  return spawn(...getArrangedCommand(bin, args, options));
}

/**
 * Returns modified command to work on linux, osx and windows.
 * The flag '#!/usr/bin/env node' is ignored by Windows. So the scripts must
 * be executed by node explicitely.
 * We assume that if `bin` is an abolsute path, it's always a js file to execute.
 * @param  {String} bin     Binary path or alias
 * @param  {Array} args    Array of args, like ['npm', ['run', 'test']]
 * @param  {Object} opts to pass to child_process.spawn call
 * @returns {Object} {bin, args, options}
 */
function getArrangedCommand(bin, args, opts) {
  return path.isAbsolute(bin) && isWin // check if it's a file or an alias
    ? ['node', [bin, ...args], opts]
    : [bin, args, opts];
}

/**
 * Get caption presenting comman execution in a folder
 * @param  {String} bin     Binary path or alias
 * @param  {Array} args    Array of args, like ['npm', ['run', 'test']]
 * @param  {Object} Options to pass to child_process.spawn call
 * @return {Striog}
 */
function getCommandCallMessage(bin, args, options = {}) {
  const folder = options.cwd
    ? '@' + options.cwd.split(path.sep).slice(-2).join(path.sep)
    : '';
  const command = bin.split(path.sep).pop() + ' ' + args.join(' ');
  return `${command} ${folder.grey}`;
}

module.exports = {
  getSpawnPromise
};
