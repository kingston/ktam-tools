# @ktam/lint-node

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
