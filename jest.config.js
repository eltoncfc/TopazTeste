module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  setupFiles: ["<rootDir>/jest.setup.js"],
  transformIgnorePatterns: [
    "node_modules/(?!(expo|@expo|react-native|@react-native|expo-font|expo-asset|expo-constants|expo-modules-core|react-native-svg|@react-navigation|@react-native-async-storage|expo-status-bar|react-redux)/)",
  ],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"],
  moduleNameMapper: {
    "^@react-native-async-storage/async-storage$":
      "<rootDir>/__mocks__/async-storage-mock.js",
    "\\.svg$": "<rootDir>/__mocks__/svgMock.js",
  },
};
