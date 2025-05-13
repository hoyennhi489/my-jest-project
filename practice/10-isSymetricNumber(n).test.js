const isSymetricNumber = require('./10-isSymetricNumber(n)');

describe('isSymetricNumber', () => {
  test('should return false for n <= 1', () => {
    expect(isSymetricNumber(0)).toBe(false);
    expect(isSymetricNumber(1)).toBe(false);
  });

  test('should return false for n >= 1000000', () => {
    expect(isSymetricNumber(1000000)).toBe(false);
  });

  test('should return true for symmetric numbers', () => {
    expect(isSymetricNumber(11)).toBe(true);
    expect(isSymetricNumber(121)).toBe(true);
    expect(isSymetricNumber(12321)).toBe(true);
    expect(isSymetricNumber(1221)).toBe(true);
  });

  test('should return false for non-symmetric numbers', () => {
    expect(isSymetricNumber(10)).toBe(false);
    expect(isSymetricNumber(123)).toBe(false);
  });
});
