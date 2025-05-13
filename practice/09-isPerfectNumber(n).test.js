const isPerfectNumber = require('./09-isPerfectNumber(n)');

describe('isPerfectNumber', () => {
  test('should return false for n <= 1', () => {
    expect(isPerfectNumber(1)).toBe(false);
    expect(isPerfectNumber(0)).toBe(false);
  });

  test('should return false for n >= 1000', () => {
    expect(isPerfectNumber(1000)).toBe(false);
    expect(isPerfectNumber(1001)).toBe(false);
  });

  test('should return true for perfect numbers', () => {
    expect(isPerfectNumber(6)).toBe(true);   // 1 + 2 + 3 = 6
    expect(isPerfectNumber(28)).toBe(true);  // 1 + 2 + 4 + 7 + 14 = 28
    expect(isPerfectNumber(496)).toBe(true); // 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 = 496
  });

  test('should return false for non-perfect numbers', () => {
    expect(isPerfectNumber(10)).toBe(false);
    expect(isPerfectNumber(12)).toBe(false);
    expect(isPerfectNumber(100)).toBe(false);
  });
});