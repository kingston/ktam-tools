// @ts-check

/**
 * @typedef {import('eslint').Linter.Config} Config
 * @typedef {import('@ktam/lint-node/eslint-configs/typescript').GenerateTypescriptEslintConfigOptions} GenerateTypescriptEslintConfigOptions
 */

import eslintPluginAstro from 'eslint-plugin-astro';
import { defineConfig } from 'eslint/config';
import tsEslint from 'typescript-eslint';

/** @type {GenerateTypescriptEslintConfigOptions} */
export const astroTypescriptEslintOptions = {
  extraTsFileGlobs: ['**/*.astro'],
  extraDefaultProjectFiles: ['astro.config.ts'],
};

/** @type {Config[]} */
export const astroEslintConfig = defineConfig(
  // Astro
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],

  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        projectService: false,
        project: true,
      },
    },
  },
  {
    files: [
      '**/*.astro/*.ts',
      '*.astro/*.ts',
      '**/*.astro/*.js',
      '*.astro/*.js',
    ],
    extends: [tsEslint.configs.disableTypeChecked],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },

  {
    rules: {
      // It incorrectly flags <meta charset="UTF-8" /> as an error for Astro
      'unicorn/text-encoding-identifier-case': 'off',
      // Ignore astro: modules for no-unresolved (https://github.com/ota-meshi/eslint-plugin-astro/issues/300)
      'import-x/no-unresolved': ['error', { ignore: ['^astro:.*$'] }],
    },
  },

  // Ignores
  {
    ignores: ['.astro', '.wrangler', 'src/env.d.ts', '.vercel'],
  },
);

export default astroEslintConfig;
