# Eslint detailed rules

## Rules used by eslint

These are the rules resulting of current configuration in `eslintrc.js`

```json
{
  "globals": {},
  "env": {},
  "rules": {
    "react/display-name": 2,
    "react/jsx-key": 2,
    "react/jsx-no-comment-textnodes": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-target-blank": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-children-prop": 2,
    "react/no-danger-with-children": 2,
    "react/no-deprecated": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-find-dom-node": 2,
    "react/no-is-mounted": 2,
    "react/no-render-return-value": 2,
    "react/no-string-refs": 2,
    "react/no-unescaped-entities": 2,
    "react/no-unknown-property": 2,
    "react/no-unsafe": 0,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-render-return": 2,
    "curly": 0,
    "lines-around-comment": 0,
    "max-len": 0,
    "no-confusing-arrow": 0,
    "no-mixed-operators": 0,
    "no-tabs": 0,
    "no-unexpected-multiline": 0,
    "quotes": 0,
    "array-bracket-newline": "off",
    "array-bracket-spacing": "off",
    "array-element-newline": "off",
    "arrow-parens": "off",
    "arrow-spacing": "off",
    "block-spacing": "off",
    "brace-style": "off",
    "comma-dangle": "off",
    "comma-spacing": "off",
    "comma-style": "off",
    "computed-property-spacing": "off",
    "dot-location": "off",
    "eol-last": "off",
    "func-call-spacing": "off",
    "function-paren-newline": "off",
    "generator-star": "off",
    "generator-star-spacing": "off",
    "implicit-arrow-linebreak": "off",
    "indent": "off",
    "indent-legacy": "off",
    "jsx-quotes": "off",
    "key-spacing": "off",
    "keyword-spacing": "off",
    "multiline-ternary": "off",
    "newline-per-chained-call": "off",
    "new-parens": "off",
    "no-arrow-condition": "off",
    "no-comma-dangle": "off",
    "no-extra-parens": "off",
    "no-extra-semi": "off",
    "no-floating-decimal": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-multi-spaces": "off",
    "no-multiple-empty-lines": "off",
    "no-reserved-keys": "off",
    "no-space-before-semi": "off",
    "no-spaced-func": "off",
    "no-trailing-spaces": "off",
    "no-whitespace-before-property": "off",
    "no-wrap-func": "off",
    "nonblock-statement-body-position": "off",
    "object-curly-newline": "off",
    "object-curly-spacing": "off",
    "object-property-newline": "off",
    "one-var-declaration-per-line": "off",
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "quote-props": "off",
    "rest-spread-spacing": "off",
    "semi": "off",
    "semi-spacing": "off",
    "semi-style": "off",
    "space-after-function-name": "off",
    "space-after-keywords": "off",
    "space-before-blocks": "off",
    "space-before-function-paren": "off",
    "space-before-function-parentheses": "off",
    "space-before-keywords": "off",
    "space-in-brackets": "off",
    "space-in-parens": "off",
    "space-infix-ops": "off",
    "space-return-throw-case": "off",
    "space-unary-ops": "off",
    "space-unary-word-ops": "off",
    "switch-colon-spacing": "off",
    "template-curly-spacing": "off",
    "template-tag-spacing": "off",
    "unicode-bom": "off",
    "wrap-iife": "off",
    "wrap-regex": "off",
    "yield-star-spacing": "off",
    "no-unused-vars": [
      2,
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false
      }
    ],
    "react/no-unused-prop-types": 2,
    "react/sort-prop-types": 2,
    "react/no-access-state-in-setstate": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-typos": 2,
    "react/sort-comp": [
      2,
      {
        "order": [
          "static-methods",
          "lifecycle",
          "everything-else",
          "render"
        ],
        "groups": {
          "lifecycle": [
            "displayName",
            "propTypes",
            "contextTypes",
            "childContextTypes",
            "mixins",
            "statics",
            "defaultProps",
            "constructor",
            "getDefaultProps",
            "state",
            "getInitialState",
            "getChildContext",
            "getDerivedStateFromProps",
            "componentWillMount",
            "UNSAFE_componentWillMount",
            "componentDidMount",
            "componentWillReceiveProps",
            "UNSAFE_componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "UNSAFE_componentWillUpdate",
            "getSnapshotBeforeUpdate",
            "componentDidUpdate",
            "componentDidCatch",
            "componentWillUnmount"
          ]
        }
      }
    ],
    "prettier/prettier": [
      2,
      {
        "printWidth": 80,
        "tabWidth": 2,
        "singleQuote": true,
        "trailingComma": "none",
        "bracketSpacing": true,
        "semi": true,
        "useTabs": false,
        "parser": "babel",
        "jsxBracketSameLine": false,
        "arrowParens": "avoid"
      }
    ]
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react",
    "prettier"
  ],
  "extends": [
    "plugin:react/recommended",
    "prettier",
    "./eslintrc.js"
  ],
  "parser": "/Users/usuario/front-linter/node_modules/babel-eslint/lib/index.js"
}
```

---

This output was obtained executing:

```sh
$ npm run eslint:print-rules
```

## Rules conflicting with prettier

No rules that are unnecessary or conflict with Prettier were found.

---

This output was obtained executing:

```sh
$ npm run eslint:prettier-check
```

