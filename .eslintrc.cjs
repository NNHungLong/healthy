module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'react', 'unused-imports'],
  rules: {
    'react/no-unused-state': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/display-name': 'warn',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
  }
};
