// @ts-check

/**
 * @typedef {import('eslint').Linter.Config} Config
 * @typedef {import('@ktam/lint-node/eslint-configs/typescript').GenerateTypescriptEslintConfigOptions} GenerateTypescriptEslintConfigOptions
 */

import eslintPluginImportX from 'eslint-plugin-import-x';
import reactJsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

/** @type {GenerateTypescriptEslintConfigOptions} */
export const reactTypescriptEslintOptions = {
  extraDefaultProjectFiles: [],
};

/** @type {Config[]} */
export const reactEslintConfig = defineConfig(
  // React & A11y
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...reactPlugin.configs.flat.recommended,
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  reactPlugin.configs.flat['jsx-runtime'],

  // @ts-ignore - bug with incompatible types between @types/eslint and the new defineConfig helper
  reactJsxA11yPlugin.flatConfigs.recommended,

  // React Hooks
  reactHooks.configs['recommended-latest'],

  // Import-X
  eslintPluginImportX.flatConfigs.react,

  // Unicorn
  {
    rules: {
      // We use replace since it is not supported by ES2020
      'unicorn/prefer-string-replace-all': 'off',
    },
  },
);

export default reactEslintConfig;
