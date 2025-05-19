const findLastNegativeOdd = require('./32-findLastNegativeOdd');

test('finds last negative odd number', () => {
  expect(findLastNegativeOdd([4, -2, -3, 7, -5])).toBe(-5);
  expect(findLastNegativeOdd([1, 2, 3, -2, -4])).toBeNull();
});