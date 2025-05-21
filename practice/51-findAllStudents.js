// Find all students with math score less than 5

function findAllStudents(studentList) {
  return studentList.filter(student => student.math < 5);
}

module.exports = findAllStudents;