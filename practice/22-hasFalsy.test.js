const hasFalsy = require('./22-hasFalsy');

describe('hasFalsy', () => {
  test('returns true if array contains at least one falsy value', () => {
    expect(hasFalsy([0, 1, 2])).toBe(true);
    expect(hasFalsy([null, 'hello', 5])).toBe(true);
    expect(hasFalsy([false])).toBe(true);
    expect(hasFalsy([NaN, 5])).toBe(true);
  });

  test('returns false if array contains no falsy values', () => {
    expect(hasFalsy([1, 2, 3])).toBe(false);
    expect(hasFalsy(['a', 'b'])).toBe(false);
    expect(hasFalsy([true, 42])).toBe(false);
  });

  test('returns false for empty array', () => {
    expect(hasFalsy([])).toBe(false);
  });
});