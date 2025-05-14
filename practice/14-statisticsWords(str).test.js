const statisticsWords = require('./14-statisticsWords(str)');

describe('statisticsWords', () => {
  test('counts frequency of each word correctly', () => {
    expect(statisticsWords('easy frontend easy')).toEqual({
      easy: 2,
      frontend: 1
    });

    expect(statisticsWords('hello world hello world hello')).toEqual({
      hello: 3,
      world: 2
    });

    expect(statisticsWords('one two three two one one')).toEqual({
      one: 3,
      two: 2,
      three: 1
    });
  });

  test('handles empty strings and whitespace-only strings', () => {
    expect(statisticsWords('')).toEqual({});
    expect(statisticsWords('   ')).toEqual({});
  });

  test('handles multiple spaces between words', () => {
    expect(statisticsWords('  a   b   a  ')).toEqual({
      a: 2,
      b: 1
    });
  });
});