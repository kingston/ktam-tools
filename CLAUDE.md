# Coding Guidelines for ktam-tools

This document outlines the coding standards and conventions used in the ktam-tools monorepo. These guidelines ensure consistency across all packages and help maintain high code quality.

## Project Structure

- **Monorepo**: Uses pnpm workspaces with packages in `packages/` directory
- **Package Manager**: pnpm 10+ (enforced via `only-allow` preinstall hook)
- **Node Version**: 20+ (specified in engines, Volta pinned to 22.14.0)
- **Module System**: ESM only (`"type": "module"` in package.json)

## File Naming Conventions

- **Files**: Use kebab-case for all file names (e.g., `system-info.ts`, `eslint.config.js`)
- **Directories**: Use kebab-case for directory names
- **Test Files**: Use descriptive suffixes:
  - `.unit.test.ts` for unit tests
  - `.int.test.ts` for integration tests
  - Tests should be collocated with source files in the same directory

## Import/Export Rules

### ESM-Style Imports

- **Always use .js extensions** in import statements, even when importing TypeScript files
- Example: `import { getSystemInfo } from '@src/system-info.js';`
- This is required for proper ESM module resolution with TypeScript's `NodeNext` module resolution

### Import Organization

Imports must be sorted according to perfectionist rules in this order:

1. Type imports
2. Built-in and external value imports
3. Internal type imports
4. Internal value imports (using `@src/` pattern)
5. Relative type imports (parent, sibling, index)
6. Relative value imports (parent, sibling, index)
7. Side-effect imports

### Type Imports

- Use `import type` for type-only imports: `import type { MyType } from './types.js';`
- Use consistent type exports: `export type { MyType };`

## TypeScript Rules

### Function Return Types

- **Always specify explicit return types** for functions (enforced by `@typescript-eslint/explicit-function-return-type`)
- Exceptions: Expression functions and typed function expressions are allowed
- Example:

  ```typescript
  export function getSystemInfo(): SystemInfo {
    // implementation
  }

  function displaySystemInfo(): void {
    // implementation
  }
  ```

### General TypeScript Rules

- Use strict type checking configuration
- Enable `isolatedModules` for faster compilation
- Use `NodeNext` module resolution
- Prefer destructuring for objects (not arrays)
- Use consistent type imports/exports

## Testing with Vitest

### Configuration

- **No globals**: Import test functions explicitly from 'vitest'
- Example: `import { describe, expect, it } from 'vitest';`
- Tests run from `./src` root directory
- Mock reset enabled by default

### Test Structure

```typescript
import { describe, expect, it } from "vitest";
import { getSystemInfo } from "@src/system-info.js";

describe("getSystemInfo", () => {
  it("should return a platform", () => {
    const systemInfo = getSystemInfo();
    expect(systemInfo.platform).toBeTruthy();
  });
});
```

## Code Style Rules

### General JavaScript/TypeScript

- **Object shorthand**: Always use shorthand syntax for object properties
- **Template literals**: Prefer template literals over string concatenation
- **Arrow functions**: Use concise arrow function syntax when possible

### Import Rules

- No extraneous dependencies (must be in package.json)
- Dev dependencies allowed in:
  - Test files (`**/*.test.{js,ts,tsx,jsx}`)
  - Test helpers (`**/*.test-helper.{js,ts,jsx,tsx}`)
  - Config files at root level (`*.{js,ts,mjs,mts,cjs,cts}`)
  - Test directories (`src/tests/**/*`, `**/__mocks__/**/*`)

### Unicorn Rules (Selected)

- Abbreviations are allowed in identifiers
- `null` values are permitted
- Array callback references are allowed

## Development Commands

Essential commands for maintaining code quality:

```bash
# Install dependencies (pnpm enforced)
pnpm install

# Run linting across all packages
pnpm lint

# Run type checking across all packages
pnpm typecheck

# Run tests across all packages
pnpm test

# Run Prettier formatting
pnpm prettier:check
pnpm prettier:write

# Build all packages
pnpm build
```

## For New Projects Using These Rules

To bootstrap a new project with these linting rules:

1. **Install the linting packages**:

   ```bash
   pnpm add -D @ktam/lint-node  # for Node.js projects
   # or
   pnpm add -D @ktam/lint-react # for React projects
   ```

2. **Create eslint.config.js**:

   ```javascript
   import eslintBase from "@ktam/lint-node/eslint";
   // or: import eslintBase from '@ktam/lint-react/eslint';

   export default [...eslintBase];
   ```

3. **Set up package.json**:

   ```json
   {
     "type": "module",
     "scripts": {
       "lint": "eslint .",
       "typecheck": "tsc --noEmit",
       "test": "vitest run"
     }
   }
   ```

4. **Configure TypeScript** (tsconfig.json):

   ```json
   {
     "compilerOptions": {
       "target": "ES2022",
       "module": "NodeNext",
       "moduleResolution": "NodeNext",
       "strict": true,
       "isolatedModules": true,
       "noEmit": true
     }
   }
   ```

5. **Set up Vitest** (vitest.config.ts):

   ```typescript
   import { defineConfig } from "vitest/config";

   export default defineConfig({
     test: {
       watch: false,
       root: "./src",
       mockReset: true,
     },
   });
   ```

6. **Copy this CLAUDE.md** to your new project for Claude Code to follow the same conventions.

## Key Reminders for Claude Code

- Always use `.js` extensions in imports, even for TypeScript files
- Specify explicit return types on all functions
- Use kebab-case for file names
- Import test functions from 'vitest' (no globals)
- Collocate tests with source files using `.unit.test.ts` or `.int.test.ts` suffixes
- Run `pnpm lint --fix` and `pnpm typecheck` before committing changes
