const sumEvenGreaterThanPrevious = require('./45-sumEvenGreaterThanPrevious');

test('sums even numbers greater than the previous number', () => {
  expect(sumEvenGreaterThanPrevious([1, 4, 3, 6, 2, 8])).toBe(18); 
  // 4 > 1, 6 > 3, 8 > 2 → 4 + 6 + 8 = 18
  expect(sumEvenGreaterThanPrevious([10, 8, 6, 4])).toBe(0); // no number is satisfied
});