import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.jsx', '**/*.tsx'],
    ...react.configs.flat.recommended,
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 0,
      'react/jsx-uses-react': 0,
      'react/prop-types': 0,
    },
  },
  prettier,
];
