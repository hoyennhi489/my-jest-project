const findLongestWordUnder5 = require('./30-findLongestWordUnder5');

describe('findLongestWordUnder5', () => {
  test('returns the longest word with length less than 5', () => {
    expect(findLongestWordUnder5(['a', 'word', 'test', 'four', 'five'])).toBe('word');
    expect(findLongestWordUnder5(['hi', 'cat', 'dog', 'bird'])).toBe('bird');
  });

  test('returns null if no word is shorter than 5', () => {
    expect(findLongestWordUnder5(['hello', 'world', 'apple'])).toBe(null);
    expect(findLongestWordUnder5([])).toBe(null);
  });
});