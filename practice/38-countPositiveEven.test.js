const countPositiveEven = require('./38-countPositiveEven');

test('counts positive even numbers in array', () => {
  expect(countPositiveEven([1, 2, 4, -6, 0, 5, 8])).toBe(3); // 2, 4, 8
  expect(countPositiveEven([-2, -4, 3, 5])).toBe(0);
});