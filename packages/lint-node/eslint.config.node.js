// @ts-check

import globals from 'globals';

import prettierConfig from './eslint-configs/prettier.js';
import { generateTypescriptEslintConfig } from './eslint-configs/typescript.js';

/** @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig.ConfigArray} */
export default [
  ...generateTypescriptEslintConfig(),
  { languageOptions: { globals: globals.node } },
  prettierConfig,
];
