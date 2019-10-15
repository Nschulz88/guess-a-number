module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/react',
  ],
  globals: {
    __DEV__: true,
  },
  plugins: ['flowtype', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'flowtype/space-after-type-colon': 0,
    'flowtype/require-valid-file-annotation': [2, 'always'],
    'jest/valid-expect': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js'],
      },
    ],
    'object-curly-newline': 0,
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
  overrides: [
    {
      files: ['flow-typed/**', '*.test.*', '**/test/**'],
      rules: {
        'flowtype/require-valid-file-annotation': 'off',
        'flowtype/no-types-missing-file-annotation': 'off',
      },
    },
    {
      files: ['src/selectors/**/*'],
      rules: {
        'no-shadow': 'off',
      },
    },
  ],
};
