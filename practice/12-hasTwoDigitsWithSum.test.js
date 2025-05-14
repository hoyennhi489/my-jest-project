const hasTwoDigitsWithSum = require('./12-hasTwoDigitsWithSum');

describe('hasTwoDigitsWithSum', () => {
  test('valid pairs that match sum', () => {
    expect(hasTwoDigitsWithSum(10, 1)).toBe(true);
    expect(hasTwoDigitsWithSum(11, 2)).toBe(true);
    expect(hasTwoDigitsWithSum(123456, 11)).toBe(true);
  });

  test('no matching digit pairs', () => {
    expect(hasTwoDigitsWithSum(101, 3)).toBe(false);
  });

  test('invalid inputs return false', () => {
    expect(hasTwoDigitsWithSum(9, 5)).toBe(false);
    expect(hasTwoDigitsWithSum(1000000, 10)).toBe(false);
    expect(hasTwoDigitsWithSum(1234, 0)).toBe(false);
    expect(hasTwoDigitsWithSum(1234, 19)).toBe(false);
  });
});