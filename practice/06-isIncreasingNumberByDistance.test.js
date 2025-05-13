const isIncreasingNumberByDistance = require('./06-isIncreasingNumberByDistance');

describe('isIncreasingNumberByDistance', () => {
  test('should return false for number less than 10', () => {
    expect(isIncreasingNumberByDistance(5, 1)).toBe(false);
  });

  test('should return false for number >= 1000000', () => {
    expect(isIncreasingNumberByDistance(1000000, 1)).toBe(false);
  });

  test('should return false for x <= 0', () => {
    expect(isIncreasingNumberByDistance(123, 0)).toBe(false);
  });

  test('should return false for x >= 5', () => {
    expect(isIncreasingNumberByDistance(123, 5)).toBe(false);
  });

  test('should return false when digits are equal', () => {
    expect(isIncreasingNumberByDistance(11, 1)).toBe(false);
  });

  test('should return true for valid increasing number with distance 1', () => {
    expect(isIncreasingNumberByDistance(123, 1)).toBe(true);
  });

  test('should return true for valid increasing number with distance 2', () => {
    expect(isIncreasingNumberByDistance(135, 2)).toBe(true);
  });

  test('should return false when digits increase but not with correct distance', () => {
    expect(isIncreasingNumberByDistance(135, 1)).toBe(false);
  });

  test('should return false if not strictly increasing by x', () => {
    expect(isIncreasingNumberByDistance(124, 1)).toBe(false); // 2 - 1 = 1, 4 - 2 = 2
  });
});