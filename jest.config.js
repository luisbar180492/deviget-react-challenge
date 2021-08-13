module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.js'],
  setupFilesAfterEnv: ['./jest.dom.js'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        sort: 'executionAsc',
        pageTitle: 'Tests Report',
        outputPath: '.',
        hideIcon: true,
        publicPath: '.',
        filename: 'tests.report.html',
        expand: false,
      },
    ],
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },
  moduleNameMapper: {
    '^stateMachines/(.*)': '<rootDir>/src/stateMachines/$1',
    '^atoms/(.*)': '<rootDir>/src/components/atoms/$1',
    '^pages/(.*)': '<rootDir>/src/components/pages/$1',
    '^styles/(.*)': '<rootDir>/src/assets/styles/$1',
    '^routes/(.*)': '<rootDir>/src/routes/$1',
    '^utils/(.*)': '<rootDir>/src/utils/$1',
    '^internationalization/(.*)': '<rootDir>/src/internationalization/$1',
    '^root/(.*)': '<rootDir>/$1',
  },
}
