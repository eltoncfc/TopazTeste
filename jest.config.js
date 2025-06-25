module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  setupFiles: ["./jest.setup.js"], // aqui
  transformIgnorePatterns: [
    "node_modules/(?!(expo|@expo|react-native|@react-native|expo-font|expo-asset|expo-constants|expo-modules-core|react-native-svg|@react-navigation|@react-native-async-storage|expo-status-bar)/)",
  ],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"],
};
