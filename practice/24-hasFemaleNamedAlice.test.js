const hasFemaleNamedAlice = require('./24-hasFemaleNamedAlice');

describe('hasFemaleNamedAlice', () => {
  test('returns true when Alice with gender Nữ is present', () => {
    const students = [
      { name: 'Alice', gender: 'Nữ' },
      { name: 'Bob', gender: 'Nam' }
    ];
    expect(hasFemaleNamedAlice(students)).toBe(true);
  });

  test('returns false when Alice is not female', () => {
    const students = [
      { name: 'Alice', gender: 'Nam' },
      { name: 'Bob', gender: 'Nam' }
    ];
    expect(hasFemaleNamedAlice(students)).toBe(false);
  });

  test('returns false when there is no Alice', () => {
    const students = [
      { name: 'Lina', gender: 'Nữ' },
      { name: 'Bob', gender: 'Nam' }
    ];
    expect(hasFemaleNamedAlice(students)).toBe(false);
  });

  test('returns false for empty array', () => {
    expect(hasFemaleNamedAlice([])).toBe(false);
  });
});