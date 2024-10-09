# Linting and Prettier Configuration Packages

This repository contains shared configurations for ESLint and Prettier to make it easier to share configs between projects targetted at modern ESM Node.JS/React apps.

## Packages

The repository is structured into two packages, each serving a different project type:

### 1. `@ktam/lint-node`
This package provides ESLint and Prettier configurations tailored for ESM Node.js applications that do not use React.

#### Features:
- ESLint configuration for Node.js environments.
- Prettier setup for code formatting.

#### Installation:
```bash
pnpm add -D @ktam/lint-node
```

#### Usage:
Create or update your ESLint configuration to extend the base rules:
```json
{
  "extends": ["@ktam/lint-node"]
}
```

Add a Prettier configuration file (`.prettierrc.js`):
```json
"@your-scope/lint-base/prettier-config"
```

---

### 2. `@ktam/lint-react`
This package provides ESLint and Prettier configurations specifically for React applications, extending the base Node.js configuration with React-specific rules and practices.

#### Features:
- ESLint rules for React, JSX, and modern JavaScript/TypeScript.
- Integration with popular React linting plugins.
- Prettier setup that works with React and JSX.

#### Installation:
```bash
pnpm add -D @ktam/lint-react
```

#### Usage:
Extend your ESLint configuration with React-specific rules:
```json
{
  "extends": ["@ktam/lint-react"]
}
```

Add Prettier configuration:
```json
"@ktam/lint-react/prettier-config"
```

## Contributing

Feel free to contribute by opening issues or submitting pull requests! Though note that it's a personal config so I may have differeing opinions.

## License

This project is licensed under the MIT License.
