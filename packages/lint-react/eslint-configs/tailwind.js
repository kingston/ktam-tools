// @ts-check

/**
 * @typedef {import('eslint').Linter.Config} Config
 * @typedef {import('@ktam/lint-node/eslint-configs/typescript').GenerateTypescriptEslintConfigOptions} GenerateTypescriptEslintConfigOptions
 */

import betterTailwindcss from 'eslint-plugin-better-tailwindcss';
import { defineConfig } from 'eslint/config';

/** @type {GenerateTypescriptEslintConfigOptions} */
export const tailwindTypescriptEslintOptions = {
  extraDefaultProjectFiles: ['tailwind.config.ts'],
};

/**
 * @typedef {Object} GenerateTailwindEslintConfigOptions
 * @property {string} [entryPoint='./src/styles.css'] - Path to the Tailwind CSS entry point
 * @property {string[]} [customClasses=[]] - Custom class names to allow (treated as regex patterns)
 */

/**
 * Generates an ESLint configuration for Tailwind CSS linting
 * @param {GenerateTailwindEslintConfigOptions} [options={}] - Configuration options
 * @returns {Config[]} The generated ESLint configuration
 */
export function generateTailwindEslintConfig(options = {}) {
  const { entryPoint = './src/styles.css', customClasses = [] } = options;

  return defineConfig(
    betterTailwindcss.configs['recommended'],

    {
      settings: {
        'better-tailwindcss': {
          entryPoint,
        },
      },
    },

    {
      rules: {
        // Disable class ordering and line wrapping since prettier-plugin-tailwindcss handles formatting
        'better-tailwindcss/enforce-consistent-class-order': 'off',
        'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
        // Detect custom component classes defined in @layer components
        'better-tailwindcss/no-unknown-classes': [
          'error',
          {
            detectComponentClasses: true,
            ...(customClasses.length > 0 ? { ignore: customClasses } : {}),
          },
        ],
      },
    },
  );
}

/** @type {Config[]} */
export const tailwindEslintConfig = generateTailwindEslintConfig();

export default tailwindEslintConfig;
