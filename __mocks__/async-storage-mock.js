export default {
  getItem: jest.fn((key) => {
    if (key === "token") {
      return Promise.resolve("fake-token");
    }
    return Promise.resolve(null);
  }),
  setItem: jest.fn(() => Promise.resolve()),
  removeItem: jest.fn(() => Promise.resolve()),
  clear: jest.fn(() => Promise.resolve()),
};
