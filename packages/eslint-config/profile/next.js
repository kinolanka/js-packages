module.exports = {
  root: true,
  extends: 'next/core-web-vitals',
  plugins: ['testing-library', 'simple-import-sort'],
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        'simple-import-sort/imports': [
          'warn',
          {
            groups: [
              [
                '^react\\u0000$', // react types
                '^react$', // react
                '^next\\u0000$', // next types
                '^next$', // next
                '^next/', // next components
                '^@?\\w', // other packages,
              ],
              // shared code
              ['^(@)(/.*|$)'],
              // project code
              ['^(src)(/.*|$)'],
              // public imports
              ['^(public)(/.*|$)'],
              // relative imports
              [
                '^\\.\\.(?!/?$)',
                '^\\.\\./?$',
                '^\\./(?=.*/)(?!/?$)',
                '^\\.(?!/?$)',
                '^\\./?$',
              ],
              // style imports
              ['^.+\\.s?css$'],
            ],
          },
        ],
        'simple-import-sort/exports': 'error',
        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: '*', next: '*' },
          {
            blankLine: 'any',
            prev: ['import', 'cjs-import'],
            next: ['import', 'cjs-import'],
          },
          {
            blankLine: 'any',
            prev: ['export', 'cjs-export'],
            next: ['export', 'cjs-export'],
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/consistent-type-imports': 'error',
      },
    },
  ],
};
