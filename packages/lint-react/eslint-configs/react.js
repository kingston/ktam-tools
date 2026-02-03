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

  reactJsxA11yPlugin.flatConfigs.recommended,

  // React Hooks
  reactHooks.configs.flat['recommended-latest'],

  // Import-X
  // @ts-ignore - bug with types with typescript-eslint (https://github.com/un-ts/eslint-plugin-import-x/issues/421)
  eslintPluginImportX.flatConfigs.react,
);

export default reactEslintConfig;
