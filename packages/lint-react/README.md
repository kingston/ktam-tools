# @ktam/lint-react

This package provides reusable **ESLint** and **Prettier** configurations for **React** and **Astro** projects.

## Features

- **ESLint configuration** tailored for React and Astro projects
- **Prettier configuration** with Tailwind CSS support
- **Tailwind CSS linting** via `eslint-plugin-better-tailwindcss` (opt-in)
- Integration with React hooks linting, JSX accessibility, and Storybook
- Extends `@ktam/lint-node` with React-specific rules

## Installation

```bash
pnpm add -D @ktam/lint-react
```

Ensure your project has the required peer dependencies:

```bash
pnpm add -D typescript eslint prettier
```

## Usage

### ESLint Configuration

Create an `eslint.config.js` in the root of your project:

```js
// For React projects
export { default } from '@ktam/lint-react/eslint';

// For Astro projects
export { default } from '@ktam/lint-react/eslint-astro';
```

### Customizing ESLint Configuration

Use the generator functions for more control:

```js
import { generateReactEslintConfig } from '@ktam/lint-react/eslint';

export default generateReactEslintConfig({
  // Enable Tailwind CSS linting (uses default entry point ./src/styles.css)
  tailwind: {},
});
```

```js
import { generateReactEslintConfig } from '@ktam/lint-react/eslint';

export default generateReactEslintConfig({
  // Custom Tailwind CSS entry point and allowed custom classes
  tailwind: {
    entryPoint: './src/app.css',
    customClasses: ['my-custom-class'],
  },
});
```

For Astro projects:

```js
import { generateAstroEslintConfig } from '@ktam/lint-react/eslint-astro';

export default generateAstroEslintConfig({
  tailwind: {
    entryPoint: './src/styles/global.css',
  },
});
```

### ESLint Generator Options

| Option                   | Type       | Default              | Description                                             |
| ------------------------ | ---------- | -------------------- | ------------------------------------------------------- |
| `tailwind`               | `object`   | —                    | Enable Tailwind CSS linting (omit to disable)           |
| `tailwind.entryPoint`    | `string`   | `'./src/styles.css'` | Path to the Tailwind CSS entry point                    |
| `tailwind.customClasses` | `string[]` | `[]`                 | Custom class names to allow (treated as regex patterns) |

### Prettier Configuration

Create a `prettier.config.js` file in the root of your project:

```js
// Basic usage (includes Tailwind support with default stylesheet path)
export { default } from '@ktam/lint-react/prettier';

// For Astro projects
export { default } from '@ktam/lint-react/prettier-astro';
```

### Customizing Prettier Configuration

Use the generator functions for more control:

```js
import { generatePrettierReactConfig } from '@ktam/lint-react/prettier';

export default generatePrettierReactConfig({
  // Disable Tailwind support
  tailwind: false,
});
```

```js
import { generatePrettierReactConfig } from '@ktam/lint-react/prettier';

export default generatePrettierReactConfig({
  // Custom Tailwind stylesheet path (default: './src/styles.css')
  tailwindStylesheet: './styles/main.css',
});
```

```js
import { generatePrettierReactConfig } from '@ktam/lint-react/prettier';

export default generatePrettierReactConfig({
  // Custom Tailwind functions to sort classes in
  tailwindFunctions: ['clsx', 'cn', 'cva', 'tw'],
});
```

For Astro projects:

```js
import { generatePrettierAstroConfig } from '@ktam/lint-react/prettier';

export default generatePrettierAstroConfig({
  tailwindStylesheet: './src/styles/global.css',
});
```

### Prettier Generator Options

| Option               | Type       | Default                 | Description                               |
| -------------------- | ---------- | ----------------------- | ----------------------------------------- |
| `tailwind`           | `boolean`  | `true`                  | Enable/disable Tailwind CSS plugin        |
| `tailwindStylesheet` | `string`   | `'./src/styles.css'`    | Path to Tailwind CSS stylesheet (for v4+) |
| `tailwindFunctions`  | `string[]` | `['clsx', 'cn', 'cva']` | Functions to sort Tailwind classes in     |

## Exports

| Export                            | Description                               |
| --------------------------------- | ----------------------------------------- |
| `@ktam/lint-react/eslint`         | ESLint config for React                   |
| `@ktam/lint-react/eslint-astro`   | ESLint config for Astro                   |
| `@ktam/lint-react/prettier`       | Prettier config for React (with Tailwind) |
| `@ktam/lint-react/prettier-astro` | Prettier config for Astro (with Tailwind) |

## Peer Dependencies

- `eslint@^9.39`
- `prettier@^3.8`
- `typescript@^5.9.3`
