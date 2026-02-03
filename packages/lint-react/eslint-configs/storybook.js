// @ts-check

/**
 * @typedef {import('eslint').Linter.Config} Config
 * @typedef {import('@ktam/lint-node/eslint-configs/typescript').GenerateTypescriptEslintConfigOptions} GenerateTypescriptEslintConfigOptions
 */

import storybookPlugin from 'eslint-plugin-storybook';
import { defineConfig, globalIgnores } from 'eslint/config';

/** @type {GenerateTypescriptEslintConfigOptions} */
export const storybookTypescriptEslintOptions = {
  extraDevDependencies: [
    // allow dev dependencies for Storybook
    '**/*.stories.{js,ts,tsx,jsx}',
    // allow dev dependencies for MDX files
    '**/*.mdx',
  ],
};

/** @type {Config[]} */
export const storybookEslintConfig = defineConfig(
  // Storybook
  // @ts-ignore - bug with types with typescript-eslint (https://github.com/storybookjs/storybook/issues/32405)
  ...storybookPlugin.configs['flat/recommended'],

  // Ignores
  globalIgnores(['storybook-static']),
);

export default storybookEslintConfig;
