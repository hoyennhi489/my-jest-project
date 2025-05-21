const removeStudentById = require('./48-removeStudentById');

test('removes student with given id', () => {
  const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  expect(removeStudentById(students, 2)).toEqual([
    { id: 1, name: 'Alice' },
    { id: 3, name: 'Charlie' }
  ]);

  expect(removeStudentById(students, 999)).toEqual(students);
});
