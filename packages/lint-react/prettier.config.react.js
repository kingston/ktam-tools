import basePrettierConfig from '@ktam/lint-node/prettier';

/** @type {import("prettier").Config} */
export default {
  ...basePrettierConfig,
  tailwindFunctions: ['clsx', 'cn', 'cva'],
  plugins: [
    ...(basePrettierConfig.plugins ?? []),
    'prettier-plugin-tailwindcss',
  ],
};
