// Remove a student by a given id

function removeStudentById(studentList, targetId) {
  return studentList.filter(student => student.id !== targetId);
}

module.exports = removeStudentById;