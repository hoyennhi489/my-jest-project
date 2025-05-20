const countGrade12Students = require('./43-countGrade12Students');

test('counts number of grade 12 students', () => {
  const students = [
    { name: 'An', grade: 11 },
    { name: 'Nhi', grade: 12 },
    { name: 'Huy', grade: 12 },
    { name: 'Duy', grade: 10 }
  ];
  expect(countGrade12Students(students)).toBe(2);
});