const isSymmetric = require('./28-isSymmetric');

describe('isSymmetric', () => {
  test('returns true for symmetric arrays', () => {
    expect(isSymmetric([1, 2, 3, 2, 1])).toBe(true);
    expect(isSymmetric(['a', 'b', 'b', 'a'])).toBe(true);
    expect(isSymmetric([])).toBe(true); 
  });

  test('returns false for non-symmetric arrays', () => {
    expect(isSymmetric([1, 2, 3, 4])).toBe(false);
    expect(isSymmetric(['a', 'b', 'c'])).toBe(false);
  });
});
