const findMinPositive = require('./29-findMinPositive');

describe('findMinPositive', () => {
  test('returns the smallest positive number', () => {
    expect(findMinPositive([3, -1, 7, 2, 0])).toBe(2);
    expect(findMinPositive([10, 5, 3])).toBe(3);
  });

  test('returns null if no positive number', () => {
    expect(findMinPositive([-5, -2, 0])).toBe(null);
    expect(findMinPositive([])).toBe(null);
  });
});