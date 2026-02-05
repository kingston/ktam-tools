// @ts-check

/**
 * @typedef {import('@typescript-eslint/utils/ts-eslint').FlatConfig.ConfigArray} ConfigArray
 * @typedef {import('./eslint-configs/tailwind.js').GenerateTailwindEslintConfigOptions} GenerateTailwindEslintConfigOptions
 */

import { prettierEslintConfig } from '@ktam/lint-node/eslint-configs/prettier';
import { generateTypescriptEslintConfig } from '@ktam/lint-node/eslint-configs/typescript';

import astroEslintConfig, {
  astroTypescriptEslintOptions,
} from './eslint-configs/astro.js';
import {
  generateTailwindEslintConfig,
  tailwindTypescriptEslintOptions,
} from './eslint-configs/tailwind.js';

/**
 * @typedef {Object} GenerateAstroEslintConfigOptions
 * @property {GenerateTailwindEslintConfigOptions} [tailwind] - Tailwind CSS linting options (omit to disable)
 */

/**
 * Generates an ESLint configuration for Astro projects
 * @param {GenerateAstroEslintConfigOptions} [options={}] - Configuration options
 * @returns {ConfigArray} The generated ESLint configuration
 */
export function generateAstroEslintConfig(options = {}) {
  const { tailwind: tailwindOptions } = options;

  return [
    ...generateTypescriptEslintConfig([
      astroTypescriptEslintOptions,
      ...(tailwindOptions ? [tailwindTypescriptEslintOptions] : []),
    ]),
    ...astroEslintConfig,
    ...(tailwindOptions ? generateTailwindEslintConfig(tailwindOptions) : []),
    prettierEslintConfig,
  ];
}

/** @type {ConfigArray} */
export default generateAstroEslintConfig();
