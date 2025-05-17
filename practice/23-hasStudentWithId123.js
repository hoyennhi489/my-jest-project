// // Check if there is a student with id = 123 in the array

function hasStudentWithId123(students) {
  return students.some(student => student.id === 123);
}
module.exports = hasStudentWithId123;