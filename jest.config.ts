import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: '.',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  snapshotSerializers: [
    '@emotion/jest/serializer' /* if needed other snapshotSerializers should go here */,
  ],
};

export default createJestConfig(customJestConfig);
