const isDecreasing = require('./27-isDecreasing');

describe('isDecreasing', () => {
  test('returns true for decreasing or equal elements', () => {
    expect(isDecreasing([5, 4, 4, 2, 1])).toBe(true);
    expect(isDecreasing([10, 9, 8, 7])).toBe(true);
  });

  test('returns false for arrays that are not decreasing', () => {
    expect(isDecreasing([1, 2, 3, 4])).toBe(false);
    expect(isDecreasing([5, 3, 4])).toBe(false);
  });

  test('returns true for empty or single-element arrays', () => {
    expect(isDecreasing([])).toBe(true);
    expect(isDecreasing([100])).toBe(true);
  });
});