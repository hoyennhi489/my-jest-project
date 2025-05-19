const findStudentIndexById = require('./36-findStudentIndexById');

test('finds index of student with id 123', () => {
  const students = [
    { id: 101, name: 'Alice' },
    { id: 123, name: 'Bob' },
    { id: 150, name: 'Charlie' }
  ];
  expect(findStudentIndexById(students, 123)).toBe(1);
  expect(findStudentIndexById(students, 999)).toBe(-1);
});