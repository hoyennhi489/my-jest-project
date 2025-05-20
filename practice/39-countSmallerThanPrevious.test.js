const countSmallerThanPrevious = require('./39-countSmallerThanPrevious');

test('counts numbers smaller than the one before', () => {
expect(countSmallerThanPrevious([5, 3, 4, 2, 1])).toBe(3); // 3 < 5, 2 < 4, 1 < 2
expect(countSmallerThanPrevious([1, 2, 3, 4])).toBe(0); // No number is smaller than the previous one
});