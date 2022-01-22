module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: ['prettier', 'plugin:import/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false
  },
  plugins: ['prettier', 'import'],
  rules: {
    'no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    'no-undef': 2,
    'no-var': 2,
    'no-console': 1,
    'no-debugger': 2,
    'no-const-assign': 2,
    'import/newline-after-import': 2,
    'import/order': [
      2,
      {
        'newlines-between': 'always',
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ]
      }
    ],
    'import/no-default-export': 'error',
    'prettier/prettier': [
      2,
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        semi: true,
        useTabs: false,
        parser: 'babel',
        bracketSameLine: false,
        arrowParens: 'always',
        quoteProps: 'consistent'
      }
    ]
  },
  settings: {},
  overrides: [
    {
      files: ['**/*.ts'],
      env: {
        browser: true,
        node: true,
        es6: true,
        jest: true
      },
      extends: [
        'prettier',
        'plugin:import/recommended',
        'plugin:@typescript-eslint/recommended'
      ],
      plugins: ['prettier', 'import', '@typescript-eslint'],
      rules: {
        'no-unused-vars': 0,
        'no-undef': 0,
        'no-var': 2,
        'no-console': 1,
        'no-debugger': 2,
        'no-const-assign': 2,
        'import/newline-after-import': 2,
        'import/order': [
          2,
          {
            'newlines-between': 'always',
            'groups': [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index'
            ]
          }
        ],
        'import/no-default-export': 'error',
        '@typescript-eslint/no-unused-vars': [1],
        'prettier/prettier': [
          2,
          {
            printWidth: 80,
            tabWidth: 2,
            singleQuote: true,
            trailingComma: 'none',
            bracketSpacing: true,
            semi: true,
            useTabs: false,
            parser: 'typescript',
            bracketSameLine: false,
            arrowParens: 'always',
            quoteProps: 'consistent'
          }
        ]
      },
      settings: {
        'import/resolver': {
          typescript: {}
        }
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
      }
    }
  ]
};
