const findMinPositive = require('./50-findMinPositive');

test('finds smallest positive number', () => {
  expect(findMinPositive([])).toBeUndefined();
  expect(findMinPositive([-1, -5])).toBeUndefined();
  expect(findMinPositive([-1, -5, 2, 6])).toBe(2);
  expect(findMinPositive([5, 1, 9, 3])).toBe(1);
});