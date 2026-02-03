// @ts-check
import basePrettierConfig from '@ktam/lint-node/prettier';
import url from 'node:url';

/**
 * @typedef {Object} GeneratePrettierReactConfigOptions
 * @property {boolean} [tailwind=true] - Whether to include Tailwind CSS plugin
 * @property {string} [tailwindStylesheet='./src/styles.css'] - Path to the Tailwind CSS stylesheet (for Tailwind v4+)
 * @property {string[]} [tailwindFunctions=['clsx', 'cn', 'cva']] - Functions to sort Tailwind classes in
 */

/**
 * Generates a Prettier configuration for React projects
 * @param {GeneratePrettierReactConfigOptions} [options={}] - Configuration options
 * @returns {import("prettier").Config} The generated Prettier configuration
 */
export function generatePrettierReactConfig(options = {}) {
  const {
    tailwind = true,
    tailwindStylesheet = './src/styles.css',
    tailwindFunctions = ['clsx', 'cn', 'cva'],
  } = options;

  /** @type {import("prettier").Config} */
  const config = {
    ...basePrettierConfig,
    plugins: [...(basePrettierConfig.plugins ?? [])],
  };

  if (tailwind) {
    config.tailwindFunctions = tailwindFunctions;
    config.tailwindStylesheet = tailwindStylesheet;
    config.plugins = [
      ...(config.plugins ?? []),
      // workaround for this bug: https://github.com/prettier/prettier-vscode/issues/3641
      url.fileURLToPath(import.meta.resolve('prettier-plugin-tailwindcss')),
    ];
  }

  return config;
}

/** @type {import("prettier").Config} */
const defaultConfig = generatePrettierReactConfig();

export default defaultConfig;
