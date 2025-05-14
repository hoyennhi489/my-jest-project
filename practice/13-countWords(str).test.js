const countWords = require('./13-countWords(str)');

describe('countWords', () => {
  test('counts words in normal strings', () => {
    expect(countWords('easy frontend')).toBe(2);
    expect(countWords('hello world')).toBe(2);
    expect(countWords('this is a test')).toBe(4);
  });

  test('handles empty or whitespace-only strings', () => {
    expect(countWords('')).toBe(0);
    expect(countWords('   ')).toBe(0);
  });

  test('handles multiple spaces between words', () => {
    expect(countWords('  hello   world  ')).toBe(2);
    expect(countWords('a   b   c')).toBe(3);
  });
});
