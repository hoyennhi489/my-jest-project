const findLastPerfectSquare = require('./34-isPerfectSquare');

test('finds last perfect square number', () => {
  expect(findLastPerfectSquare([3, 4, 10, 16, 20])).toBe(16);
  expect(findLastPerfectSquare([2, 3, 5, 7])).toBeNull();
});