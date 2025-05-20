const countLongWords = require('./40-countLongWords');

test('counts words with length > 5', () => {
  expect(countLongWords(['hello', 'sunshine', 'apple', 'elephant'])).toBe(2); // 'sunshine', 'elephant'
  expect(countLongWords(['a', 'tiny', 'short'])).toBe(0);
});