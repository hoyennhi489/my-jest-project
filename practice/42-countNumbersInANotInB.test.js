const countNumbersInANotInB = require('./42-countNumbersInANotInB');

test('counts numbers in a not in b', () => {
  const a = [1, 2, 3, 4, 4, 5];
  const b = [3, 4, 6];
  expect(countNumbersInANotInB(a, b)).toBe(3); // 1, 2, 5
});

test('returns 0 if all a elements are in b', () => {
  expect(countNumbersInANotInB([1, 2], [1, 2, 3])).toBe(0);
});