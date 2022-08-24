module.exports = {
  preset: "ts-jest",

  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    // "@testing-library/react/cleanup-after-each",
    // "@testing-library/jest-dom/extend-expect",
    "<rootDir>/src/tests/setupTests.js",
  ],

  // Test spec file resolution pattern
  // Matches parent folder `tests` and filename
  // should contain `test` or `spec`.
  testRegex: "(/tests/specs/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "identity-obj-proxy",
  },
};
