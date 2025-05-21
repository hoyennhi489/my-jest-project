const insertIntoSortedArray = require('./49-insertIntoSortedArray');

test('inserts number into sorted array and keeps it sorted', () => {
  expect(insertIntoSortedArray([1, 3, 5, 7], 4)).toEqual([1, 3, 4, 5, 7]);
  expect(insertIntoSortedArray([1, 2, 3], 0)).toEqual([0, 1, 2, 3]);
  expect(insertIntoSortedArray([1, 2, 3], 5)).toEqual([1, 2, 3, 5]);
  expect(insertIntoSortedArray([], 10)).toEqual([10]);
});