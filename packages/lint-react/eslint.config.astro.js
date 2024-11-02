// @ts-check

import { prettierEslintConfig } from '@ktam/lint-node/eslint-configs/prettier';
import { generateTypescriptEslintConfig } from '@ktam/lint-node/eslint-configs/typescript';

import astroEslintConfig, {
  astroTypescriptEslintOptions,
} from './eslint-configs/astro.js';
import tailwindEslintConfig, {
  tailwindTypescriptEslintOptions,
} from './eslint-configs/tailwind.js';

/** @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig.ConfigArray} */
export default [
  ...generateTypescriptEslintConfig([
    astroTypescriptEslintOptions,
    tailwindTypescriptEslintOptions,
  ]),
  ...astroEslintConfig,
  ...tailwindEslintConfig,
  prettierEslintConfig,
];
