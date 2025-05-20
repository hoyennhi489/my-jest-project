const countDistinctNumbers = require('./41-countDistinctNumbers');

test('counts distinct numbers in the array', () => {
  expect(countDistinctNumbers([1, 2, 2, 3, 4, 4, 5])).toBe(5);  // 1, 2, 3, 4, 5
  expect(countDistinctNumbers([7, 7, 7, 7])).toBe(1);          // there is only 1 number
  expect(countDistinctNumbers([])).toBe(0);                    // empty array
});