# Linting and Prettier Configuration Packages

This repository contains shared configurations for ESLint and Prettier to make it easier to share configs between projects targetted at modern ESM Node.JS/React apps.

## PNPM v10 Requirements

When using pnpm v10 with Astro, the following lines need to be added to your `.npmrc` file:

```
# Hoist typescript eslint and jsx to support eslint astro
# https://github.com/ota-meshi/eslint-plugin-astro/issues/470
public-hoist-pattern[]=@typescript-eslint/parser
public-hoist-pattern[]=eslint-plugin-jsx-a11y
```

## Tailwind CSS v4 Configuration

When using Tailwind CSS v4 with Prettier, you can customize the stylesheet path using the generator function. The default path is `./src/styles.css`:

```js
// prettier.config.js
import { generatePrettierReactConfig } from '@ktam/lint-react/prettier';

export default generatePrettierReactConfig({
  tailwindStylesheet: './your-project-path/app.css',
});
```

To disable Tailwind support entirely:

```js
// prettier.config.js
import { generatePrettierReactConfig } from '@ktam/lint-react/prettier';

export default generatePrettierReactConfig({
  tailwind: false,
});
```

The repository is structured into two packages, each serving a different project type:

## 1. `@ktam/lint-node`

This package provides ESLint and Prettier configurations tailored for ESM Node.js applications that do not use React.

### Features:

- ESLint configuration for Node.js environments.
- Prettier setup for code formatting.

### Installation:

```bash
pnpm add -D @ktam/lint-node
```

### Usage:

#### ESLint Configuration

To use the **ESLint** configuration, create an `eslint.config.js` in the root of your project and import the configuration:

```js
export { default } from '@ktam/lint-node/eslint';
```

You can adjust or extend the configuration if needed by modifying the imported rules.

#### Prettier Configuration

To apply the **Prettier** configuration, create a `prettier.config.js` file in the root of your project and import the configuration:

```js
export { default } from '@ktam/lint-node/prettier';
```

---

## 2. `@ktam/lint-react`

This package provides ESLint and Prettier configurations specifically for React and Astro applications, extending the base Node.js configuration with React-specific rules and practices.

### Features:

- ESLint rules for React, JSX, and modern JavaScript/TypeScript.
- Integration with popular React linting plugins.
- Prettier setup that works with React and JSX.
- Astro support.

### Installation:

```bash
pnpm add -D @ktam/lint-react
```

### Usage:

#### ESLint Configuration

To use the **ESLint** configuration, create an `eslint.config.js` in the root of your project and import the configuration:

```js
export { default } from '@ktam/lint-react/eslint';
```

You can adjust or extend the configuration if needed by modifying the imported rules.

#### Prettier Configuration

To apply the **Prettier** configuration, create a `prettier.config.js` file in the root of your project and import the configuration:

```js
export { default } from '@ktam/lint-react/prettier';
```

## Contributing

Feel free to contribute by opening issues or submitting pull requests! Though note that it's a personal config so I may have differeing opinions.

## License

This project is licensed under the MIT License.
