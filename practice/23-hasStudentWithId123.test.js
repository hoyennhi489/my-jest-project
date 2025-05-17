const hasStudentWithId123 = require('./23-hasStudentWithId123');

describe('hasStudentWithId123', () => {
  test('returns true when there is a student with id = 123', () => {
    const students = [
      { id: 1, name: 'Alice' },
      { id: 123, name: 'Bob' },
      { id: 456, name: 'Charlie' }
    ];
    expect(hasStudentWithId123(students)).toBe(true);
  });

  test('returns false when no student has id = 123', () => {
    const students = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ];
    expect(hasStudentWithId123(students)).toBe(false);
  });

  test('returns false for an empty array', () => {
    expect(hasStudentWithId123([])).toBe(false);
  });
});