const findTwoSum = require('./47-findTwoSum');

test('finds two numbers that sum to target', () => {
  expect(findTwoSum([2, 7, 11, 15], 9)).toEqual([2, 7]);
  expect(findTwoSum([3, 2, 4], 6)).toEqual([2, 4]);
  expect(findTwoSum([1, 2, 3], 7)).toBeNull();
});