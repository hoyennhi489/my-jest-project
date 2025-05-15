const hasOddDivisibleBy3 = require('./19-hasOddDivisibleBy3');

describe('hasOddDivisibleBy3', () => {
  test('returns true when there is an odd number divisible by 3', () => {
    expect(hasOddDivisibleBy3([1, 2, 3])).toBe(true); 
    expect(hasOddDivisibleBy3([5, 9, 12])).toBe(true);
  });

  test('returns false when there is no odd number divisible by 3', () => {
    expect(hasOddDivisibleBy3([2, 4, 6])).toBe(false); 
    expect(hasOddDivisibleBy3([1, 5, 7])).toBe(false); 
  });

  test('returns false for empty array', () => {
    expect(hasOddDivisibleBy3([])).toBe(false);
  });
});
