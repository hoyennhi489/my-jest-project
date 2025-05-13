const isPerfectSquare = require('./08-isPerfectSquare(n)');

describe('isPerfectSquare', () => {
  test('should return false for n <= 0', () => {
    expect(isPerfectSquare(0)).toBe(false);
    expect(isPerfectSquare(-4)).toBe(false);
  });

  test('should return false for n >= 100000', () => {
    expect(isPerfectSquare(100000)).toBe(false);
  });

  test('should return true for perfect squares', () => {
    expect(isPerfectSquare(4)).toBe(true);
    expect(isPerfectSquare(9)).toBe(true);
    expect(isPerfectSquare(25)).toBe(true);
    expect(isPerfectSquare(36)).toBe(true);
  });

  test('should return false for non-perfect squares', () => {
    expect(isPerfectSquare(5)).toBe(false);
    expect(isPerfectSquare(10)).toBe(false);
    expect(isPerfectSquare(26)).toBe(false);
  });
});
