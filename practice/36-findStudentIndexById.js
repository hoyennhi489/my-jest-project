// Find the index of the student with id = 123

function findStudentIndexById(students, id) {
  return students.findIndex(student => student.id === id);
}

module.exports = findStudentIndexById;