# @ktam/tools-sample-project

## 0.3.0

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

## 0.2.2

### Patch Changes

- aa69717: Upgrade dependencies across all packages
  - **lint-node**: Updated ESLint, TypeScript ESLint, and related plugins to latest versions
  - **lint-react**: Updated ESLint plugins, TypeScript ESLint, and Storybook plugin to latest versions
  - **tools-sample-astro**: Updated Astro to 5.13.5 and Tailwind CSS to 4.1.12
  - **tools-sample-node**: Updated Vitest to 3.2.4
  - **tools-sample-react**: Updated React to 19.1.1, Vite to 7.1.4, and related type definitions

## 0.2.1

### Patch Changes

- 2f2db56: Upgrade lint dependencies and add split out side-effects in imports

## 0.2.0

### Minor Changes

- baebef3: Upgrade ESLint to 9.17 and Prettier to 3.4

## 0.1.1

### Patch Changes

- 782805d: Initial release
