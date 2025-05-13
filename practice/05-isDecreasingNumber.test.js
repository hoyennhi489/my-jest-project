const isDecreasingNumber = require('./05-isDecreasingNumber');

describe('isDecreasingNumber', () => {
  test('should return false for number less than 10', () => {
    expect(isDecreasingNumber(9)).toBe(false);
  });

  test('should return false for number greater than or equal to 1000000', () => {
    expect(isDecreasingNumber(1000000)).toBe(false);
  });

  test('should return false for number with equal adjacent digits', () => {
    expect(isDecreasingNumber(11)).toBe(false);
  });

  test('should return true for strictly decreasing number', () => {
    expect(isDecreasingNumber(321)).toBe(true);
  });

  test('should return false for non-decreasing number', () => {
    expect(isDecreasingNumber(12321)).toBe(false);
  });

  test('should return true for number 987654', () => {
    expect(isDecreasingNumber(987654)).toBe(true);
  });

  test('should return false for number with a repeated digit like 3321', () => {
    expect(isDecreasingNumber(3321)).toBe(false);
  });
});