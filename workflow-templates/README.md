A simple set of GitHub workflows that can be copy pasted into projects that use main as their main branch.

## Publishing

`release.yml` publishes to npm with [trusted publishing](https://docs.npmjs.com/trusted-publishers) (OIDC), so no `NPM_TOKEN` secret is needed. For each package, add a trusted publisher on npmjs.com with:

- **Workflow filename:** `release.yml`
- **Environment:** `Production` (must match `environment` in the workflow)
