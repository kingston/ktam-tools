# @ktam/lint-react

## 0.6.0

### Minor Changes

- a999f3f: Add configurable Prettier Tailwind support

  ### New Generator Functions

  Added `generatePrettierReactConfig` and `generatePrettierAstroConfig` functions that allow customizing Tailwind CSS settings:

  ```js
  import { generatePrettierReactConfig } from '@ktam/lint-react/prettier';

  export default generatePrettierReactConfig({
    tailwind: false, // Disable Tailwind support
    tailwindStylesheet: './styles/main.css', // Custom stylesheet path
    tailwindFunctions: ['clsx', 'cn', 'cva'], // Functions to sort classes in
  });
  ```

  ### Options

  | Option               | Type       | Default                 | Description                               |
  | -------------------- | ---------- | ----------------------- | ----------------------------------------- |
  | `tailwind`           | `boolean`  | `true`                  | Enable/disable Tailwind CSS plugin        |
  | `tailwindStylesheet` | `string`   | `'./src/styles.css'`    | Path to Tailwind CSS stylesheet (for v4+) |
  | `tailwindFunctions`  | `string[]` | `['clsx', 'cn', 'cva']` | Functions to sort Tailwind classes in     |

  ### Backward Compatible

  Existing usage continues to work unchanged:

  ```js
  export { default } from '@ktam/lint-react/prettier';
  ```

- a999f3f: Upgrade dependencies and Node 24 support

  ### Node 24 / TypeScript Config Updates
  - Updated minimum Node version to 24 (LTS)
  - Updated tsconfig to use `target: ES2024` and `lib: ["ES2024"]`
  - Changed `moduleResolution` to `NodeNext` for better ESM compatibility

  ### @ktam/lint-node
  - `@eslint/js`: 9.34.0 → 9.39.2
  - `@vitest/eslint-plugin`: 1.3.12 → 1.6.6
  - `eslint-plugin-perfectionist`: 4.15.0 → 5.4.0
  - `eslint-plugin-unicorn`: 61.0.2 → 62.0.0
  - `globals`: 16.4.0 → 17.1.0
  - `prettier-plugin-packagejson`: 2.5.19 → 3.0.0
  - `typescript-eslint`: 8.44.0 → 8.53.1

  ### @ktam/lint-react
  - `@typescript-eslint/parser`: 8.44.0 → 8.53.1
  - `eslint-plugin-astro`: 1.3.1 → 1.5.0
  - `eslint-plugin-react-hooks`: 5.2.0 → 7.0.1
  - `eslint-plugin-storybook`: 9.1.7 → 10.2.0
  - `prettier-plugin-tailwindcss`: 0.6.14 → 0.7.2
  - `typescript-eslint`: 8.44.0 → 8.53.1

  ### Peer Dependencies

  Updated minimum peer dependency versions:
  - `eslint`: ^9.36 → ^9.39
  - `prettier`: ^3.6 → ^3.8
  - `typescript`: ^5.8 → ^5.9.3

### Patch Changes

- Updated dependencies [a999f3f]
  - @ktam/lint-node@0.6.0

## 0.5.1

### Patch Changes

- 474b363: Fix peer dependency version in README
- Updated dependencies [474b363]
  - @ktam/lint-node@0.5.1

## 0.5.0

### Minor Changes

- c511ab1: Upgrade to Node.js 22 and latest dependencies

  This release upgrades the minimum Node.js version requirement from 20 to 22 and updates all dependencies to their latest versions. Key changes include:
  - **Node.js**: Upgraded minimum version from 20 to 22 (Volta pinned to 22.19.0)
  - **Package manager**: Updated pnpm from 10.6.5 to 10.17.0
  - **TypeScript**: Now using catalog version (5.8.2) for consistency
  - **ESLint**: Updated ESLint to 9.36.0
  - **Linting tools**: Updated ESLint plugins and TypeScript ESLint to latest versions
  - **Build tools**: Updated Astro, Vite, and other build dependencies
  - **Configuration**: Migrated from .node-version/.npmrc to mise.toml for better tool management

  All packages maintain backward compatibility while requiring the newer Node.js runtime.

### Patch Changes

- Updated dependencies [c511ab1]
  - @ktam/lint-node@0.5.0

## 0.4.3

### Patch Changes

- aa69717: Upgrade dependencies across all packages
  - **lint-node**: Updated ESLint, TypeScript ESLint, and related plugins to latest versions
  - **lint-react**: Updated ESLint plugins, TypeScript ESLint, and Storybook plugin to latest versions
  - **tools-sample-astro**: Updated Astro to 5.13.5 and Tailwind CSS to 4.1.12
  - **tools-sample-node**: Updated Vitest to 3.2.4
  - **tools-sample-react**: Updated React to 19.1.1, Vite to 7.1.4, and related type definitions

- Updated dependencies [aa69717]
  - @ktam/lint-node@0.4.3

## 0.4.2

### Patch Changes

- Updated dependencies [88c0bb3]
  - @ktam/lint-node@0.4.2

## 0.4.1

### Patch Changes

- 7cebd48: Upgrade eslint-plugin-import-x to 4.14.1 and @vitest/eslint-plugin to 1.2.1
- 96e2f21: feat: Add support for Tailwind CSS v4 and update PNPM v10 compatibility
  - Add Tailwind CSS v4 stylesheet configuration in prettier.config.react.js
  - Add documentation for PNPM v10 compatibility with Astro projects
  - Document Tailwind CSS v4 configuration requirements in README

- Updated dependencies [7cebd48]
  - @ktam/lint-node@0.4.1

## 0.4.0

### Minor Changes

- 2f2db56: Upgrade React to v19 and Tailwind to v4

  As ESLint Tailwind does not support v4 yet, we removed the Tailwind config from the linting configs.

## 0.3.0

### Minor Changes

- a1cfb96: Upgrade ESLint (9.17 -> 9.22) and ESLint plugin and Prettier (3.4 -> 3.5)
- a1cfb96: Upgrade Typescript to 5.7

### Patch Changes

- Updated dependencies [a1cfb96]
- Updated dependencies [a1cfb96]
  - @ktam/lint-node@0.4.0

## 0.2.3

### Patch Changes

- Updated dependencies [d6670c1]
  - @ktam/lint-node@0.3.2

## 0.2.2

### Patch Changes

- 14c500d: Add browser globals when parsing without TypeScript
- Updated dependencies [14c500d]
  - @ktam/lint-node@0.3.1

## 0.2.1

### Patch Changes

- 953a83d: Improve inline script handling and add .vercel to eslint ignore

## 0.2.0

### Minor Changes

- baebef3: Upgrade ESLint to 9.17 and Prettier to 3.4
- baebef3: Upgrade Astro to 5.1
- baebef3: Upgrade Vite to 6.0.4

### Patch Changes

- baebef3: Upgrade various linter/prettier plugins
- Updated dependencies [baebef3]
- Updated dependencies [baebef3]
  - @ktam/lint-node@0.3.0

## 0.1.2

### Patch Changes

- a065e56: Add react default config and fix Astro astro: imports

## 0.1.1

### Patch Changes

- 60368ed: Introduce new lint-react package
- Updated dependencies [60368ed]
  - @ktam/lint-node@0.2.0
