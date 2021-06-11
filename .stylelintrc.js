module.exports = {
  plugins: ['stylelint-scss', 'stylelint-declaration-strict-value'],
  ignoreFiles: '**/*.js',
  extends: ['stylelint-config-sass-guidelines'],
  rules: {
    'color-hex-length': 'long',
    'color-hex-case': 'upper',
    'comment-whitespace-inside': 'always',
    'declaration-no-important': true,
    'declaration-block-no-duplicate-properties': true,
    'no-extra-semicolons': true,
    'no-missing-end-of-source-newline': null,
    'rule-empty-line-before': 'always',
    'max-nesting-depth': 5,
    'selector-class-pattern': [
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
      {
        resolveNestedSelectors: true
      }
    ],
    'string-quotes': 'double',
    'scale-unlimited/declaration-strict-value': [
      ['/color$/', 'box-shadow', 'background', 'z-index'],
      {
        ignoreValues: ['currentColor', 'transparent', 'inherit']
      }
    ],
    'scss/at-extend-no-missing-placeholder': null,
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/at-mixin-pattern': null,
    'scss/dollar-variable-pattern': '.*',
    'unit-disallowed-list': [
      ['px', 'em'],
      {
        ignoreMediaFeatureNames: {
          px: ['min-width'],
          dpi: ['resolution']
        }
      }
    ]
  }
};
