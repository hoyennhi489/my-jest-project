const findSecondLargest = require('./33-findSecondLargest');

test('finds the second largest number', () => {
  expect(findSecondLargest([1, 5, 3, 9, 7])).toBe(7);
  expect(findSecondLargest([4, 4, 4])).toBeNull();
});