const hasEvenNumberGreaterThan = require('./18-hasEvenNumberGreaterThan(arr, n)');

describe('hasEvenNumberGreaterThan', () => {
  test('returns true if there is even number > n', () => {
    expect(hasEvenNumberGreaterThan([2, 4, 6], 3)).toBe(true);
  });

  test('returns false if no even number > n', () => {
    expect(hasEvenNumberGreaterThan([1, 3, 5], 2)).toBe(false);
    expect(hasEvenNumberGreaterThan([2, 4], 5)).toBe(false);
  });
});