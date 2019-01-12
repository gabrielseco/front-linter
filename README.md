# front-linter

> CLI to lint your code and make it compliant.

It provides:

* Same js and sass style of code across for all my repos.
* Linting rules a reference package, not duplicated linting config in every project.
* Implemented as a reusable CLI.

This package is a fork of [SUI](https://github.com/SUI-Components/sui/blob/master/packages/sui-lint), version 2.20.0

## Installation

```sh
$ npm install @dry/front-linter --save-dev
```

## CLI

When installed, a new CLI `front-linter` is automatically available to lint your files according to the conventions.

### Lint JS files

```sh
$ front-linter js [options]
```

It lints all `js|jsx` files in your project, excluding `.eslintignore` and `.gitignore` file patterns.

Same options available in [eslint](https://eslint.org/docs/user-guide/command-line-interface) except one: `-c, --config`. If you try to use this option, an exception will be thrown.



### Format JS files

```sh
$ front-linter js --fix [options]
```

### Lint SASS files

```
$ front-linter sass [options]
```

Lints all `**/src/**/*.scss` files in the project, excluding `node_modules`, `lib`, `dist`, `public`.

> **`.gitignore` file patterns are also excluded but interpretation may differ as only glob patterns are understood**

### Scope commands to staged files

```sh
$ front-linter js --staged
$ front-linter js --fix --staged
```

Same command but applied only on staged files (obtained with `git diff --cached --name-only --diff-filter=d` command).

For integrations, prettier config is located in `@dry/front-linter/lint/.prettierrc.js`.

### Add fixes to the stage

```sh
$ front-linter js --staged --add-fixes
$ front-linter js --fix --staged --add-fixes
```

This option can only be used with `--staged`.

In fix mode like with `front-linter js --fix`, the `--add-fixes` option will stage the files again (`git add <file...>`)

It's usefull to make your code autoformat before any commit.

## IDE integration

Steps to integrate front-linter with an IDE:

1.  Install (if needed) eslint/sassLint plugin in your IDE.
2.  Add these lines to `package.json`:

```json
{
  "eslintConfig": {
    "extends": ["./node_modules/@dry/front-linter/eslintrc.js"]
  },
  "stylelint": {
    "extends": [
      "./node_modules/@dry/front-linter/.stylelintrc.json"
    ]
  }
}
```

### Example package.json

```json
{
  "name": "test-project",
  "version": "1.0.0",
  "scripts": {
    "lint": "npm run lint:js",
    "lint:js": "front-linter js"
  },
  "devDependencies": {
    "front-linter": "1.0.0"
  },
  "eslintConfig": { "extends": ["./node_modules/@dry/front-linter/eslintrc.js"] },
  "stylelint": {
    "extends": [
      "./node_modules/@dry/front-linter/.stylelintrc.json"
    ]
  }
}
```

### VSCode and prettier

Prettier is integrated in front-linter thanks to specific eslint rules.
If you want VSCode to format your code exactly as `front-linter js --fix` would do, you need specific config.+

#### prettier + eslint

If you have installed [prettier in VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) you can launch it with `CMD + Shift + P -> Format Document` over an opened file to format it with [prettier](https://github.com/prettier/prettier)

By adding this line to your settings 

```json
{
  "prettier.eslintIntegration": true
}
```

when you do `CMD + Shift + P -> Format Document` the format tool will use [`prettier-eslint`](https://github.com/prettier/prettier-eslint)^[`prettier-eslint` is a dependency of [prettier-vscode](https://github.com/prettier/prettier-vscode/blob/1843acb5defac7898862a1df61cb67c7a8355d69/package.json#L204)] that will do a [`eslint --fix`](http://eslint.org/) after formatting your JavaScript file with [`prettier`](https://github.com/prettier/prettier)

So this shortcut will format our files ( w/ _prettier_) according to our `front-linter` rules

> you will need the `eslintConfig` property added to the `package.json` as explained above

#### eslint extension
Install [VSCode ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), and set `eslint.autoFixOnSave` to true:

```json
{
  "eslint.autoFixOnSave": true
}
```

#### Conflict with `formatOnSave`



If you have prettier enabled, or the default VSCode formatter activated with `editor.formatOnSave` to true, it may conflict with the `eslint.autoFixOnSave` option.

```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false,
  },
}
```
