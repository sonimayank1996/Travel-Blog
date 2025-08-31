module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'prettier', // Must be last to override other configs
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // ESLint rules
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }], // Ignore 'next' parameter in Express middleware
    'no-console': 'warn', // Warn about console.log statements
    'no-process-exit': 'off', // Allow process.exit()
    
    // Prettier rules
    'prettier/prettier': 'error',
    
    // Node.js specific rules
    'node/no-unsupported-features/es-syntax': 'off', // Allow modern JS features
    'node/no-missing-require': 'off', // Off for better module resolution
  },
  overrides: [
    {
      // TypeScript files (if you're using TypeScript)
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};