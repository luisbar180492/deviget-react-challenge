module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: ['airbnb'],
  plugins: [],
  parser:  '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'import/no-unresolved': 'off', // is to resolve imports
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx']
    }], // allow .jsx extension
    'react/jsx-one-expression-per-line': 'off', // disable put jsx expressions in a new line, 
    'react/prefer-stateless-function': 1, // Only use function components 'Warning'
    'no-console': 'off', // Don't use console.log() 'Warning'
    'no-alert': 1, // Don't use alert()'Warning'
    'space-before-function-paren': 0, // space between functions
    'max-len': ['error', 90, 2, {
      ignoreUrls: true,
    }], // max lenght is of 90
    'padded-blocks': 'off', // turn off padding between block and first line of code, ej between block class and first line after
    'class-methods-use-this': 'off', // is useful when we call methods on class components
    'comma-dangle': ['error', 'always'], // use always trailing comas
    'no-trailing-spaces': 'off', // allow trailing spaces
    'no-plusplus': 'off', // enable plusplus e.g. let a = 1; a++;
    'no-await-in-loop': 'off', // enable await for using it inside a loop
    'function-paren-newline': ['error', { minItems: 1 }], // add new line in functions that has one argument or more
    'import/prefer-default-export': 'off', // export default not mandatory
    '@typescript-eslint/explicit-function-return-type': 'error', // you have to specify the return type
    '@typescript-eslint/indent': ['error', 2], // indentation
    'react/prop-types': 'off', // disable verification of prop types because we are using typescript interfaces instead of prop types
    'array-bracket-spacing': ['error', 'always'], // to put sapaces at the begining and the end of array
    '@typescript-eslint/no-var-requires': 0, // flag for enabling and disabling require
    'no-param-reassign': ['error', { 'props': false }], // flag for enable reassignation of properties of a variable
    semi: ['error', 'never'], // to disable checking of semicolon at the end of a class or interface because Prettier removes them
    'no-use-before-define': 'off', // disable definitinition of a class, function and variable before using it
    'import/extensions': 0, // disable importing files adding their extension
    '@typescript-eslint/ban-types': 1, // warning for avoiding to use object as data type
    '@typescript-eslint/no-explicit-any': 1, // warning for avoiding to use any as data type
  },
};