/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const jestConfig = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,cjs}', '!**/node_modules/**', '!**/constants/**'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  reporters: [
    'default',
    [
      'jest-junit',
      { classNameTemplate: '{classname}', titleTemplate: '{title}', ancestorSeparator: ' > ' }
    ]
  ],
  moduleFileExtensions: ['js', 'cjs'],
  rootDir: './',
  roots: ['<rootDir>/src/'],
  verbose: true,
  transform: {
    '\\.[jt]s$': 'babel-jest'
  }
};

export default jestConfig;
