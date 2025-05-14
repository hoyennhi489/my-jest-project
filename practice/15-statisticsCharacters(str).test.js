const statisticsCharacters = require('./15-statisticsCharacters(str)');

describe('statisticsCharacters', () => {
  test('counts character frequencies', () => {
    expect(statisticsCharacters('aa b cc ')).toEqual({
      a: 2,
      b: 1,
      c: 2,
      space: 3
    });

    expect(statisticsCharacters('hello world')).toEqual({
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      space: 1,
      w: 1,
      r: 1,
      d: 1
    });
  });

  test('handles empty string', () => {
    expect(statisticsCharacters('')).toEqual({});
  });

  test('handles string with only spaces', () => {
    expect(statisticsCharacters('     ')).toEqual({
      space: 5
    });
  });
});