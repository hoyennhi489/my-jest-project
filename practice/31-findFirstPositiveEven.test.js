const findFirstPositiveEven = require('./31-findFirstPositiveEven');

test('finds first positive even number', () => {
  expect(findFirstPositiveEven([1, -2, 3, 4, 6])).toBe(4);
  expect(findFirstPositiveEven([-1, -3, -5])).toBeNull();
});