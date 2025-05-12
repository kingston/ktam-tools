// @ts-check
import basePrettierConfig from '@ktam/lint-node/prettier';
import url from 'node:url';

/** @type {import("prettier").Config} */
export default {
  ...basePrettierConfig,
  tailwindFunctions: ['clsx', 'cn', 'cva'],
  // For Tailwind CSS v4, specify the CSS file that contains your theme and configuration
  tailwindStylesheet: './src/styles.css',
  plugins: [
    ...(basePrettierConfig.plugins ?? []),
    // workaround for this bug: https://github.com/prettier/prettier-vscode/issues/3641
    url.fileURLToPath(import.meta.resolve('prettier-plugin-tailwindcss')),
  ],
};
