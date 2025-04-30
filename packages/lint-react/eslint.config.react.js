// @ts-check

import { prettierEslintConfig } from '@ktam/lint-node/eslint-configs/prettier';
import { generateTypescriptEslintConfig } from '@ktam/lint-node/eslint-configs/typescript';

import {
  reactEslintConfig,
  reactTypescriptEslintOptions,
} from './eslint-configs/react.js';
import {
  storybookEslintConfig,
  storybookTypescriptEslintOptions,
} from './eslint-configs/storybook.js';
import { tailwindTypescriptEslintOptions } from './eslint-configs/tailwind.js';

/** @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig.ConfigArray} */
export default [
  ...generateTypescriptEslintConfig([
    reactTypescriptEslintOptions,
    tailwindTypescriptEslintOptions,
    storybookTypescriptEslintOptions,
  ]),
  ...reactEslintConfig,
  ...storybookEslintConfig,
  prettierEslintConfig,
];
