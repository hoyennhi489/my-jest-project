// Count the number of students in grade 12

function countGrade12Students(students) {
  return students.filter(student => student.grade === 12).length;
}

module.exports = countGrade12Students;