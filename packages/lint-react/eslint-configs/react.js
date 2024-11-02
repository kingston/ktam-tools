// @ts-check

/**
 * @typedef {import('@typescript-eslint/utils/ts-eslint').FlatConfig.ConfigArray} ConfigArray
 * @typedef {import('@typescript-eslint/utils/ts-eslint').FlatConfig.Config} Config
 * @typedef {import('@ktam/lint-node/eslint-configs/typescript').GenerateTypescriptEslintConfigOptions} GenerateTypescriptEslintConfigOptions
 */

import eslintPluginImportX from 'eslint-plugin-import-x';
import reactJsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
// @ts-ignore eslint-plugin-react-hooks does not have typings
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import tsEslint from 'typescript-eslint';

/** @type {GenerateTypescriptEslintConfigOptions} */
export const reactTypescriptEslintOptions = {};

/** @type {ConfigArray} */
export const reactEslintConfig = tsEslint.config(
  // React & A11y
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    extends: [
      /** @type { Config } */ (reactPlugin.configs.flat?.recommended),
      /** @type { Config } */ (reactPlugin.configs.flat?.['jsx-runtime']),
      reactJsxA11yPlugin.flatConfigs.recommended,
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // React Hooks
  // eslint-plugin-react-hooks does not use FlatConfig yet (https://github.com/facebook/react/pull/30774)
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    plugins: {
      'react-hooks': /** @type { any } */ (reactHooksPlugin),
    },
    rules: /** @type { any } */ (reactHooksPlugin.configs.recommended).rules,
  },

  // Tailwind
  {
    extends: tailwindPlugin.configs['flat/recommended'],
    rules: {
      'tailwindcss/no-custom-classname': ['error', {}],
      'tailwindcss/classnames-order': 'off',
    },
  },

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
