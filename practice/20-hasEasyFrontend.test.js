const hasEasyFrontend = require('./20-hasEasyFrontend');

describe('hasEasyFrontend', () => {
  test('returns true if array contains "easy frontend"', () => {
    expect(hasEasyFrontend(['hello', 'easy frontend', 'test'])).toBe(true);
    expect(hasEasyFrontend(['easy frontend'])).toBe(true);
  });

  test('returns false if array does not contain "easy frontend"', () => {
    expect(hasEasyFrontend(['easy', 'frontend'])).toBe(false);
    expect(hasEasyFrontend([])).toBe(false);
    expect(hasEasyFrontend(['easyfrontend'])).toBe(false);
  });
});