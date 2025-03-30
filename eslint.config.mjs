import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const project = resolve(__dirname, 'tsconfig.json');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:@next/next/core-web-vitals' // 👈 Next.js plugin (core-web-vitals rules)
  ),

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      // eslint-disable-next-line import/no-unresolved
      parser: (await import('@typescript-eslint/parser')).default,
      parserOptions: {
        project,
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: true,
        JSX: true,
        NodeJS: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project,
        },
      },
    },
    plugins: {
      'unused-imports': (await import('eslint-plugin-unused-imports')).default,
      '@next/next': (await import('@next/eslint-plugin-next')).default,
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'off',
      'import/no-default-export': 'off',
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
      'eslint-comments/require-description': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: ['arrow-function', 'function-declaration'],
          unnamedComponents: 'arrow-function',
        },
      ],
      'jsx-a11y/heading-has-content': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      'prettier/prettier': 'warn',
    },
  },
];

export default eslintConfig;
