/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: "v8",
  testMatch: ["**/?(*.)+(spec|test).ts"],
};
