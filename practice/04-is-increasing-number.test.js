const isIncreasingNumber = require('./04-is-increasing-number');

describe('isIncreasingNumber(n)', () => {
  it('should return false when n < 10', () => {
    Array.from({ length: 10 }, (_, idx) => idx).forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(false);
    });
  });

  it('should return false when n is not an increasing number', () => {
    [11, 222, 333, 4444, 55555, 666666, 21, 312, 7831, 76872, 121212].forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(false);
    });
  });

  it('should return true when n is an increasing number', () => {
    [12, 123, 456, 123456, 456789].forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(true);
    });
  });
});
