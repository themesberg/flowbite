module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'tailwindcss'],
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:tailwindcss/recommended'
    ],
    rules: {
      'tailwindcss/classnames-order': [
        'warn',
        {
          officialSorting: true,
        },
      ],
    }
};
