import eslint from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

/** @type { import("eslint").Linter.Config[] } */
export default [
  // ESLint Configs
  eslint.configs.recommended,
  {
    rules: {
      // disallow console.log since that is typically used for debugging
      'no-console': ['error', { allow: ['warn', 'error', 'debug', 'info'] }],
      // Enforce object shorthand syntax to keep object properties concise.
      'object-shorthand': ['error', 'always'],
      // Enforce the use of template literals instead of string concatenation.
      'prefer-template': 'error',
      // Enforce using concise arrow function syntax when possible.
      'arrow-body-style': ['error', 'as-needed'],
      // Encourage the use of arrow functions for callbacks to avoid `this` binding issues.
      'prefer-arrow-callback': 'error',
      // Disallow renaming imports, exports, or destructured variables to the same name.
      'no-useless-rename': 'error',
    },
  },

  // Typescript ESLint Configs
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          // allow default project for root configs
          allowDefaultProject: ['*.{js,ts}'],
        },
      },
    },
    rules: {
      // require explicit return types for functions for faster type checking
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        { allowExpressions: true, allowTypedFunctionExpressions: true },
      ],
      // Enforce the use of destructuring for arrays and objects where applicable
      '@typescript-eslint/prefer-destructuring': [
        'error',
        { object: true, array: false },
      ],
    },
  },
  {
    // disable type checking for js files
    files: ['**/*.{js,jsx}'],
    ...tseslint.configs.disableTypeChecked,
  },

  // Unicorn Configs
  eslintPluginUnicorn.configs['flat/recommended'],
  { rules: { 'unicorn/prevent-abbreviations': 'off' } },

  // Perfectionist Configs
  {
    // perfectionist has some nice rules but can be a bit too strict for recommended config
    plugins: { perfectionist },
    rules: {
      'perfectionist/sort-imports': ['error', { internalPattern: ['@src/**'] }],
      'perfectionist/sort-exports': ['error'],
      'perfectionist/sort-named-imports': ['error'],
      'perfectionist/sort-named-exports': ['error'],
    },
  },

  // Vitest Configs
  {
    files: ['**/*.test.{ts,js,tsx,jsx}', 'tests/**'],
    plugins: { vitest },
    rules: vitest.configs.recommended.rules,
  },

  // Prettier Configs
  eslintConfigPrettier,

  // Global Ignores
  { ignores: ['dist', 'node_modules'] },
];
