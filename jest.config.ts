// See https://metareal.blog/en/post/2021/01/16/setup-jest-for-expo-typescript-project/
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  preset: 'jest-expo',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
    '!**/jest.config.ts',
  ],
};

export default config;
