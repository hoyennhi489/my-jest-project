const sumMathScoresOfMales = require('./46-sumMathScoresOfMales');

test('sum math scores of male students', () => {
  const students = [
    { name: 'An', gender: 'male', math: 8 },
    { name: 'Binh', gender: 'male', math: 7 },
    { name: 'Nhi', gender: 'female', math: 9 },
    { name: 'Duy', gender: 'male', math: 6 }
  ];
  expect(sumMathScoresOfMales(students)).toBe(21); // 8 + 7 + 6
});
