const isIncreasing = require('./26-isIncreasing');

describe('isIncreasing', () => {
  test('returns true for increasing array', () => {
    expect(isIncreasing([1, 2, 3, 4])).toBe(true);
  });

  test('returns false for not increasing array', () => {
    expect(isIncreasing([1, 3, 2, 4])).toBe(false);
  });

  test('returns true for empty or single-element array', () => {
    expect(isIncreasing([])).toBe(true);
    expect(isIncreasing([10])).toBe(true);
  });
});