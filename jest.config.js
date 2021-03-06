const path = require('path')

const fromRoot = d => path.join(__dirname, d)

module.exports = {
  resetMocks: true,
  coveragePathIgnorePatterns: [],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts,tsx}'],
  coverageThreshold: null,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
    '^.+\\.jsx?$': 'esbuild-jest',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    '@testing-library/react',
    '<rootDir>/jest.setup.js',
  ],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
}
