# @ktam/lint-node

This package provides a reusable set of **ESLint** and **Prettier** configurations for **ESM Node.js** projects.

## Features

- **ESLint configuration** tailored for ESM-based Node.js projects.
- **Prettier configuration** with enforced code style rules.
- Compatibility with **Vitest** for testing and **Unicorn** for improving code quality.
- **Prettier Plugin** for formatting and automatically sorting `package.json` properties.

## Installation

To install this package, you'll need **pnpm** (version 9 or higher) and **Node.js** (version 20 or higher):

```bash
pnpm add -D @ktam/lint-node
```

Ensure your project is using **TypeScript** and **ESLint** compatible versions:

```bash
pnpm add -D typescript eslint
```

## Usage

### ESLint Configuration

To use the **ESLint** configuration, create an `eslint.config.js` in the root of your project and import the configuration:

```js
export { default } from '@ktam/lint-node/eslint';
```

You can adjust or extend the configuration if needed by modifying the imported rules.

### Prettier Configuration

To apply the **Prettier** configuration, create a `prettier.config.js` file in the root of your project and import the configuration:

```js
export { default } from '@ktam/lint-node/prettier';
```

## File Structure

- `eslint.config.base.js`: Base ESLint configuration, including rules for JavaScript, TypeScript, and Node.js projects.
- `prettier.config.base.js`: Base Prettier configuration enforcing code styles such as 2-space tabs, single quotes, and trailing commas.

## Configuration Highlights

- **ESLint**:
  - Enforces best practices for JavaScript and TypeScript.
  - Integrates TypeScript linting via `@typescript-eslint` for stricter type checks.
  - Includes **Unicorn** and **Perfectionist** plugins for improved code quality and import/export ordering.
  - Custom rules to ensure concise, maintainable code (e.g., disallowing `console.log`, enforcing template literals).
  - Special configurations for **Vitest** testing files.

- **Prettier**:
  - Ensures consistent formatting across JavaScript, TypeScript, and `package.json` files.
  - Uses `prettier-plugin-packagejson` to format `package.json`.

## Peer Dependencies

Ensure you have the following peer dependencies installed:

- `eslint@^9.36`
- `prettier@^3.6`
- `typescript@^5.8`
