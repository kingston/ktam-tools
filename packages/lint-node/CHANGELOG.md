# @ktam/lint-node

## 0.6.1

### Patch Changes

- bfe2a16: Enable `preserve-caught-error`, `no-shadow` (via `@typescript-eslint/no-shadow` on TS files), `@typescript-eslint/no-unnecessary-parameter-property-assignment`, `@typescript-eslint/no-useless-empty-export`, and `@typescript-eslint/require-array-sort-compare` in the base lint configs.
- 3a99c6a: Upgrade lint dependencies to latest versions, including typescript-eslint 8.58.2, eslint-plugin-unicorn 64.0.0, eslint-plugin-perfectionist 5.8.0, and eslint-plugin-astro 1.7.0.

## 0.6.0

### Minor Changes

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

## 0.5.1

### Patch Changes

- 474b363: Fix peer dependency version in README

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

## 0.4.3

### Patch Changes

- aa69717: Upgrade dependencies across all packages
  - **lint-node**: Updated ESLint, TypeScript ESLint, and related plugins to latest versions
  - **lint-react**: Updated ESLint plugins, TypeScript ESLint, and Storybook plugin to latest versions
  - **tools-sample-astro**: Updated Astro to 5.13.5 and Tailwind CSS to 4.1.12
  - **tools-sample-node**: Updated Vitest to 3.2.4
  - **tools-sample-react**: Updated React to 19.1.1, Vite to 7.1.4, and related type definitions

## 0.4.2

### Patch Changes

- 88c0bb3: Relax rules for typescript-eslint template expressions, various unicorn rules, and disable no-unresolved since Tyepscript handles that

## 0.4.1

### Patch Changes

- 7cebd48: Upgrade eslint-plugin-import-x to 4.14.1 and @vitest/eslint-plugin to 1.2.1

## 0.4.0

### Minor Changes

- a1cfb96: Upgrade ESLint (9.17 -> 9.22) and ESLint plugin and Prettier (3.4 -> 3.5)
- a1cfb96: Upgrade Typescript to 5.7

## 0.3.2

### Patch Changes

- d6670c1: Add root-level mjs/mts/cjs/cts files to dev dependencies

## 0.3.1

### Patch Changes

- 14c500d: Add Node.js globals when parsing without TypeScript

## 0.3.0

### Minor Changes

- baebef3: Upgrade ESLint to 9.17 and Prettier to 3.4

### Patch Changes

- baebef3: Upgrade various linter/prettier plugins

## 0.2.0

### Minor Changes

- 60368ed: Updated to use composeable generators instead of one generator

## 0.1.4

### Patch Changes

- bb0cdc3: Upgrade dependencies and add more docs to rule overrides

## 0.1.3

### Patch Changes

- 1182793: Disable no-null rule on unicorn and improve disable typecheck/dev dependencies

## 0.1.2

### Patch Changes

- f5ed27a: Add eslint-import-x to check for extraneous dependencies and add missing dependencies

## 0.1.1

### Patch Changes

- 782805d: Initial release
