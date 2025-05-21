const findAllStudents = require('./51-findAllStudents');

test('finds students with math score < 5', () => {
  const studentList = [
    { id: 1, name: 'Alice', math: 9 },
    { id: 2, name: 'Bob', math: 4 },
    { id: 3, name: 'John', math: 0 },
  ];

  expect(findAllStudents(studentList)).toEqual([
    { id: 2, name: 'Bob', math: 4 },
    { id: 3, name: 'John', math: 0 },
  ]);
});