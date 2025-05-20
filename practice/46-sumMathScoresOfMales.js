// Sum of math scores of students whose gender is male

function sumMathScoresOfMales(students) {
  return students
    .filter(student => student.gender === 'male' && typeof student.math === 'number')
    .reduce((total, student) => total + student.math, 0);
}

module.exports = sumMathScoresOfMales;