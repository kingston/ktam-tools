import eslintBase from './eslint.config.base.js';

export default [
  ...eslintBase,
  {
    rules: {
      // by default, we allow dev depedencies in all root configs
      // but for this repo, we want to make sure we don't have
      // any extraneous dependencies in base configs
      'import-x/no-extraneous-dependencies': [
        'error',
        { devDependencies: ['eslint.config.js', '.prettierrc.js'] },
      ],
    },
  },
];
