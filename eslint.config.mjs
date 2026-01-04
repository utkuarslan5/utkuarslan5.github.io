import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      // General JavaScript/TypeScript rules
      'no-unused-vars': ['warn', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }],
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-duplicate-imports': 'error',
      'no-unused-expressions': 'warn',
      
      // Code quality
      'prefer-const': 'warn',
      'no-var': 'error',
      'object-shorthand': 'warn',
      'prefer-arrow-callback': 'warn',
      
      // React best practices (without plugin)
      'no-restricted-syntax': [
        'warn',
        {
          selector: 'CallExpression[callee.name="console.error"]',
          message: 'Avoid console.error in production code. Use error boundaries or logging service instead.'
        }
      ]
    }
  },
  {
    ignores: ['dist/**', 'node_modules/**', '*.config.*', '*.config.mjs', '*.config.js']
  }
];

