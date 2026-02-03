// @ts-check
import basePrettierConfig from '@ktam/lint-node/prettier';
import url from 'node:url';

/**
 * @typedef {Object} GeneratePrettierAstroConfigOptions
 * @property {boolean} [tailwind=true] - Whether to include Tailwind CSS plugin
 * @property {string} [tailwindStylesheet] - Path to the Tailwind CSS stylesheet (for Tailwind v4+)
 * @property {string[]} [tailwindFunctions=['clsx', 'cn', 'cva']] - Functions to sort Tailwind classes in
 */

/**
 * Generates a Prettier configuration for Astro projects
 * @param {GeneratePrettierAstroConfigOptions} [options={}] - Configuration options
 * @returns {import("prettier").Config} The generated Prettier configuration
 */
export function generatePrettierAstroConfig(options = {}) {
  const {
    tailwind = true,
    tailwindStylesheet,
    tailwindFunctions = ['clsx', 'cn', 'cva'],
  } = options;

  /** @type {import("prettier").Config} */
  const config = {
    ...basePrettierConfig,
    plugins: [
      ...(basePrettierConfig.plugins ?? []),
      // workaround for this bug: https://github.com/prettier/prettier-vscode/issues/3641
      url.fileURLToPath(import.meta.resolve('prettier-plugin-astro')),
    ],
    overrides: [
      {
        files: '*.astro',
        options: {
          parser: 'astro',
        },
      },
    ],
  };

  if (tailwind) {
    config.tailwindFunctions = tailwindFunctions;
    if (tailwindStylesheet) {
      config.tailwindStylesheet = tailwindStylesheet;
    }
    config.plugins = [
      ...(config.plugins ?? []),
      url.fileURLToPath(import.meta.resolve('prettier-plugin-tailwindcss')),
    ];
  }

  return config;
}

/** @type {import("prettier").Config} */
const defaultConfig = generatePrettierAstroConfig();

export default defaultConfig;
