module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: [
    "node_modules/(?!(expo|@expo|expo-modules-core|react-native|@react-native|react-native-svg|@react-navigation|@react-native-async-storage|expo-status-bar)/)",
  ],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"],
};
